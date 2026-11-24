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
