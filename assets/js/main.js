/* Stirling Kitchens — site scripts */
(function () {
  'use strict';

  /* -----------------------------------------
     Mobile nav toggle
  ----------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.getElementById('nav-list');

  if (toggle && navList) {
    function openNav() {
      navList.setAttribute('data-open', 'true');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.classList.add('is-open');
    }

    function closeNav() {
      navList.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-open');
    }

    toggle.addEventListener('click', function () {
      if (navList.getAttribute('data-open') === 'true') {
        closeNav();
      } else {
        openNav();
      }
    });

    /* Close on nav link click */
    navList.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    /* Close on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navList.getAttribute('data-open') === 'true') {
        closeNav();
        toggle.focus();
      }
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (
        navList.getAttribute('data-open') === 'true' &&
        !toggle.contains(e.target) &&
        !navList.contains(e.target)
      ) {
        closeNav();
      }
    });
  }

  /* -----------------------------------------
     Active nav link
  ----------------------------------------- */
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(function (link) {
    var linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* -----------------------------------------
     Enquiry form — basic client-side check
     (server-side validation still required)
  ----------------------------------------- */
  var form = document.querySelector('.enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var firstInvalid = null;
      form.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) {
          field.setAttribute('aria-invalid', 'true');
          if (!firstInvalid) firstInvalid = field;
        } else {
          field.removeAttribute('aria-invalid');
        }
      });
      if (firstInvalid) {
        e.preventDefault();
        firstInvalid.focus();
      }
    });
  }

  /* -----------------------------------------
     Photo enquiry (booth seating page)
     - Shows the chosen photo so people know it worked
     - Shrinks very large photos so they fit Netlify's 8 MB upload limit
     - Plain-language checks before sending
  ----------------------------------------- */
  var photoForm = document.querySelector('.photo-form, .render-form');
  if (photoForm) {
    var photoInput = photoForm.querySelector('.photo-input');
    var drop = photoForm.querySelector('.photo-drop');
    var preview = photoForm.querySelector('.photo-drop__preview');
    var dropText = photoForm.querySelector('.photo-drop__text');
    var dropHint = photoForm.querySelector('.photo-drop__hint');
    var errorBox = photoForm.querySelector('.photo-form__error');
    var MAX_BYTES = 7.5 * 1024 * 1024;

    var showError = function (msg, field) {
      errorBox.textContent = msg;
      errorBox.hidden = false;
      if (field) field.focus();
    };

    var shrinkPhoto = function (file) {
      // Resize to max 2400px wide/high as a JPEG. Resolves with a File, or null if not possible.
      return new Promise(function (resolve) {
        if (!window.createImageBitmap || !window.DataTransfer) { resolve(null); return; }
        createImageBitmap(file).then(function (bmp) {
          var scale = Math.min(1, 2400 / Math.max(bmp.width, bmp.height));
          var canvas = document.createElement('canvas');
          canvas.width = Math.round(bmp.width * scale);
          canvas.height = Math.round(bmp.height * scale);
          canvas.getContext('2d').drawImage(bmp, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(function (blob) {
            if (!blob || blob.size > MAX_BYTES) { resolve(null); return; }
            var name = file.name.replace(/\.[^.]+$/, '') + '.jpg';
            resolve(new File([blob], name, { type: 'image/jpeg' }));
          }, 'image/jpeg', 0.85);
        }).catch(function () { resolve(null); });
      });
    };

    var submitLabel = photoForm.querySelector('.photo-form__submit').textContent;

    // Turns the customer's answers into a ready-to-paste image prompt (ChatGPT etc.).
    // It's sent with the enquiry in a hidden field called "render-prompt".
    var buildRenderPrompt = function () {
      var promptField = photoForm.querySelector('input[name="render-prompt"]');
      if (!promptField) return;
      var pick = function (name) {
        var el = photoForm.querySelector('input[name="' + name + '"]:checked');
        var v = el ? el.value : 'Not sure';
        return v === 'Not sure' ? null : v;
      };
      var text = function (id) {
        var el = photoForm.querySelector('#' + id);
        return el && el.value.trim() ? el.value.trim() : null;
      };
      var choose = 'choose what best suits the room';
      var layout = pick('layout'), timber = pick('timber'), colour = pick('upholstery_colour'),
          fabric = pick('upholstery_type'), back = pick('back_style'), storage = pick('storage'),
          table = pick('table'), seats = pick('seats'), style = pick('style'),
          size = text('rf-size'), notes = text('rf-notes');

      var lines = [
        'Photorealistic interior render. Using the attached photo of the customer\'s room, add custom built-in booth (banquette) seating into the corner or nook shown.',
        'Keep the existing walls, windows, flooring, ceiling, lighting and camera angle exactly as in the photo. Only add the seating, table and cushions.',
        'Layout: ' + (layout ? layout + ' booth seating' : choose) + '.',
        'Timber (base and visible joinery): ' + (timber ? timber : choose) + '.',
        'Upholstery: ' + (colour ? colour : 'a colour that suits the room') + ' ' + (fabric ? fabric : 'upholstery') + '.',
        'Seat back: ' + (back ? back : choose) + '.',
        'Base and storage: ' + (storage === 'Floating'
          ? 'floating base, raised about 150 mm off the floor with open space and the floor visible underneath, optional soft LED strip lighting under the seat'
          : (storage ? storage : 'choose what best suits the room')) + '.',
        'Table: ' + (table ? (table === 'Keeping my own table' ? 'keep a simple table similar to the existing one' : table + ' table') : choose) + '.',
        'Seating for: ' + (seats ? seats + ' people' : choose) + '.',
        'Overall style: ' + (style ? style.replace('&amp;', '&') : 'match the existing room') + '.',
        size ? 'Approximate size of the space: ' + size + '.' : null,
        notes ? 'Customer notes: ' + notes : null,
        'Realistic proportions: seat height about 450 mm, seat depth 450–500 mm, table height about 750 mm. Natural daylight, high-end New Zealand home, warm and inviting.'
      ];
      promptField.value = lines.filter(Boolean).join('\n');
    };

    photoInput.addEventListener('change', function () {
      errorBox.hidden = true;
      drop.classList.remove('is-invalid');
      var file = photoInput.files && photoInput.files[0];
      if (!file) return;

      preview.hidden = false;
      preview.src = URL.createObjectURL(file);
      preview.onerror = function () { preview.hidden = true; }; // e.g. HEIC on some desktop browsers
      drop.classList.add('has-photo');
      dropText.textContent = 'Photo added';
      dropHint.textContent = 'Tap to change it';

      if (file.size > MAX_BYTES) {
        dropHint.textContent = 'Making the photo smaller so it sends…';
        shrinkPhoto(file).then(function (small) {
          if (small) {
            var dt = new DataTransfer();
            dt.items.add(small);
            photoInput.files = dt.files;
            dropHint.textContent = 'Tap to change it';
          } else {
            dropHint.textContent = 'Tap to change it';
            showError('That photo is too big to send. Try a screenshot of it, or email it to admin@stirlingkitchens.co.nz.');
          }
        });
      }
    });

    // Clear an error as soon as the person starts fixing that field
    photoForm.addEventListener('input', function (e) {
      if (e.target.getAttribute('aria-invalid') === 'true') {
        e.target.removeAttribute('aria-invalid');
        errorBox.hidden = true;
      }
    });

    photoForm.addEventListener('submit', function (e) {
      errorBox.hidden = true;
      var file = photoInput.files && photoInput.files[0];
      var name = photoForm.querySelector('#pf-name');
      var email = photoForm.querySelector('#pf-email');
      [name, email].forEach(function (f) { if (f) f.removeAttribute('aria-invalid'); });

      if (!file) {
        e.preventDefault();
        drop.classList.add('is-invalid');
        showError('Add a photo of your corner first.', photoInput);
        return;
      }
      if (file.size > MAX_BYTES) {
        e.preventDefault();
        showError('That photo is too big to send. Try a screenshot of it, or email it to admin@stirlingkitchens.co.nz.');
        return;
      }
      if (!name.value.trim()) {
        e.preventDefault();
        name.setAttribute('aria-invalid', 'true');
        showError('Add your name so Craig knows who to reply to.', name);
        return;
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        e.preventDefault();
        email.setAttribute('aria-invalid', 'true');
        showError(email.value.trim() ? 'That email address doesn\'t look quite right.' : 'Add your email so we can send you the render.', email);
        return;
      }
      buildRenderPrompt();
      var btn = photoForm.querySelector('.photo-form__submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;
    });

    // If someone comes back with the browser's Back button, reset the button
    window.addEventListener('pageshow', function () {
      var btn = photoForm.querySelector('.photo-form__submit');
      btn.textContent = submitLabel;
      btn.disabled = false;
    });
  }

  /* -----------------------------------------
     "Send us your corner" step-by-step app
     Turns the render form into one question per screen.
     Without JavaScript the full form still shows and works.
  ----------------------------------------- */
  var appForm = document.querySelector('.render-form');
  if (appForm) {
    var steps = Array.prototype.slice.call(appForm.querySelectorAll('.render-q'));
    var total = steps.length;
    var current = 0;
    var submitBtn = appForm.querySelector('.photo-form__submit');
    var errBox = appForm.querySelector('.photo-form__error');

    appForm.classList.add('is-app');

    // Progress bar
    var progress = document.createElement('div');
    progress.className = 'app-progress';
    progress.innerHTML = '<div class="app-progress__bar"><span></span></div><p class="app-progress__label" aria-live="polite"></p>';
    appForm.insertBefore(progress, appForm.firstChild);
    var bar = progress.querySelector('.app-progress__bar span');
    var label = progress.querySelector('.app-progress__label');

    // Back / Next buttons
    var nav = document.createElement('div');
    nav.className = 'app-nav';
    nav.innerHTML = '<button type="button" class="btn btn-secondary app-nav__back">Back</button>' +
                    '<button type="button" class="btn btn-primary app-nav__next">Next</button>';
    submitBtn.parentNode.insertBefore(nav, submitBtn);
    var backBtn = nav.querySelector('.app-nav__back');
    var nextBtn = nav.querySelector('.app-nav__next');

    var isChoiceStep = function (step) { return !!step.querySelector('.chips'); };

    var show = function (i, focus) {
      current = i;
      steps.forEach(function (s, n) { s.hidden = n !== i; });
      var step = steps[i];
      var last = i === total - 1;
      bar.style.width = Math.round(((i + 1) / total) * 100) + '%';
      label.textContent = 'Step ' + (i + 1) + ' of ' + total;
      backBtn.hidden = i === 0;
      nextBtn.hidden = last;
      submitBtn.hidden = !last;
      // On choice questions, "Next" reads "Skip" until something other than "Not sure" is picked
      if (isChoiceStep(step)) {
        var picked = step.querySelector('input:checked');
        nextBtn.textContent = picked && picked.value !== 'Not sure' ? 'Next' : 'Skip';
      } else {
        nextBtn.textContent = 'Next';
      }
      errBox.hidden = true;
      if (focus) {
        step.setAttribute('tabindex', '-1');
        step.focus({ preventScroll: true });
        appForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    var canLeave = function (i) {
      if (i === 0) {
        var file = appForm.querySelector('.photo-input').files[0];
        if (!file) {
          errBox.textContent = 'Add a photo of your corner first.';
          errBox.hidden = false;
          appForm.querySelector('.photo-drop').classList.add('is-invalid');
          return false;
        }
      }
      return true;
    };

    nextBtn.addEventListener('click', function () {
      if (canLeave(current) && current < total - 1) show(current + 1, true);
    });
    backBtn.addEventListener('click', function () {
      if (current > 0) show(current - 1, true);
    });

    // Tapping an answer moves on by itself
    steps.forEach(function (step, n) {
      if (!isChoiceStep(step)) return;
      step.addEventListener('click', function (e) {
        var chip = e.target.closest('.chip');
        if (!chip) return;
        setTimeout(function () { if (current === n && n < total - 1) show(n + 1, true); }, 250);
      });
    });

    // Enter in a text box goes to the next step instead of sending early
    appForm.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && e.target.tagName === 'INPUT' && current < total - 1) {
        e.preventDefault();
        nextBtn.click();
      }
    });

    // If the main form check stops a send, jump to the step with the problem
    appForm.addEventListener('submit', function (e) {
      if (!e.defaultPrevented) return;
      var photo = appForm.querySelector('.photo-input').files[0];
      show(photo ? total - 1 : 0, false);
      errBox.hidden = false;
    });

    show(0, false);
  }

  /* -----------------------------------------
     Call buttons on computers
     A tel: link can't dial from a desktop browser — it just asks to open
     an app (FaceTime, Teams, Skype). On mouse-based devices, clicking a
     call button instead shows the number on the button and copies it.
     Phones and tablets are untouched and dial as normal.
  ----------------------------------------- */
  var isDesktop = window.matchMedia &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (isDesktop) {
    var status = document.createElement('div');
    status.setAttribute('role', 'status');
    status.className = 'visually-hidden';
    status.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;';
    document.body.appendChild(status);

    var formatNz = function (href) {
      var digits = href.replace(/[^0-9+]/g, '').replace(/^\+64/, '0');
      if (/^02\d{7,8}$/.test(digits)) {            // mobile: 021 144 3301
        return digits.slice(0, 3) + ' ' + digits.slice(3, 6) + ' ' + digits.slice(6);
      }
      if (/^0\d{8}$/.test(digits)) {               // landline: 09 279 8984
        return digits.slice(0, 2) + ' ' + digits.slice(2, 5) + ' ' + digits.slice(5);
      }
      return digits;
    };

    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var number = formatNz(link.getAttribute('href').slice(4));

        // Show the number on the button (keep the phone icon)
        if (link.textContent.indexOf(number) === -1) {
          var icon = link.querySelector('svg');
          link.textContent = '';
          if (icon) { link.appendChild(icon); link.appendChild(document.createTextNode(' ')); }
          link.appendChild(document.createTextNode(number));
        }

        var announce = function (msg) {
          status.textContent = '';
          setTimeout(function () { status.textContent = msg; }, 50);
          link.setAttribute('title', msg);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(number).then(
            function () { announce('Call us on ' + number + ' (number copied)'); },
            function () { announce('Call us on ' + number); }
          );
        } else {
          announce('Call us on ' + number);
        }
      });
    });
  }

})();
