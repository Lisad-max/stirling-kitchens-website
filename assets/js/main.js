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

})();
