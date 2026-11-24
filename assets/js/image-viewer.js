/*
 * Image viewer: click (or press Enter/Space on) a content image to see it larger.
 * Used on booth-seating.html. Add class "js-enlargeable" to a container to opt more images in.
 * Uses the native <dialog> element, so Esc closes it and focus returns to the image.
 */
(function () {
  var selector = [
    '.layout-card__image img',
    '.gallery-item img',
    '.why-layout__image img',
    '.about-blurb__image img',
    '.js-enlargeable img'
  ].join(',');

  var images = document.querySelectorAll('main ' + selector.split(',').join(', main '));
  if (!images.length || typeof HTMLDialogElement !== 'function') return;

  // Build the viewer once
  var dialog = document.createElement('dialog');
  dialog.className = 'image-viewer';
  dialog.setAttribute('aria-label', 'Enlarged image');
  dialog.innerHTML =
    '<button type="button" class="image-viewer__close" aria-label="Close enlarged image">&times;</button>' +
    '<figure class="image-viewer__figure">' +
    '<img class="image-viewer__img" alt="">' +
    '<figcaption class="image-viewer__caption"></figcaption>' +
    '</figure>';
  document.body.appendChild(dialog);

  var bigImg = dialog.querySelector('.image-viewer__img');
  var caption = dialog.querySelector('.image-viewer__caption');
  var lastTrigger = null;

  function open(img) {
    lastTrigger = img;
    bigImg.src = img.currentSrc || img.src;
    bigImg.alt = img.alt;
    caption.textContent = img.alt;
    dialog.showModal();
  }

  function close() {
    dialog.close();
  }

  dialog.addEventListener('close', function () {
    bigImg.removeAttribute('src');
    if (lastTrigger) lastTrigger.focus();
  });

  // Close on the close button or a click outside the picture
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog || e.target.closest('.image-viewer__close')) close();
  });

  images.forEach(function (img) {
    img.classList.add('is-enlargeable');
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Enlarge image: ' + img.alt);
    img.addEventListener('click', function () { open(img); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(img);
      }
    });
  });
})();
