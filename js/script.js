(function () {
  /* Off-canvas menu: only when a hamburger toggle exists (mobile rail has no toggle). */
  var toggle = document.querySelector('.menu-toggle');
  var drawer = document.querySelector('.drawer');
  if (!toggle || !drawer) return;

  var backdrop = document.createElement('div');
  backdrop.className = 'drawer-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.appendChild(backdrop);

  var lastFocus = null;

  function open() {
    lastFocus = document.activeElement;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Menü schließen');
    document.body.style.overflow = 'hidden';
    backdrop.classList.add('is-visible');
    var firstLink = drawer.querySelector('a');
    if (firstLink) {
      window.setTimeout(function () {
        firstLink.focus();
      }, 0);
    }
  }

  function close() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü öffnen');
    document.body.style.overflow = '';
    backdrop.classList.remove('is-visible');
    if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
    }
    lastFocus = null;
  }

  toggle.addEventListener('click', function () {
    if (drawer.classList.contains('is-open')) close();
    else open();
  });

  backdrop.addEventListener('click', close);

  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
  });
})();

(function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sections = document.querySelectorAll('.reveal');
  if (!sections.length || prefersReducedMotion) return;

  var staggerGroups = document.querySelectorAll('[data-stagger]');
  staggerGroups.forEach(function (group) {
    var children = Array.prototype.slice.call(group.children || []);
    children.forEach(function (child, index) {
      child.style.transitionDelay = String(60 * index) + 'ms';
    });
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();

(function () {
  var graphic = document.getElementById('hero-graphic');
  var hero = document.querySelector('.hero');
  if (!graphic || !hero) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ticking = false;

  function updateTransition() {
    var scrollY = window.scrollY || window.pageYOffset;
    var heroH = hero.offsetHeight;
    var progress = Math.min(Math.max(scrollY / heroH, 0), 1);
    var ease = 1 - Math.pow(1 - progress, 1.4);
    graphic.style.setProperty('--hero-scroll-progress', String(ease));
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateTransition);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateTransition);
  updateTransition();
})();

(function () {
  var sliders = document.querySelectorAll('[data-slider]');
  if (!sliders.length) return;

  sliders.forEach(function (slider) {
    var track = slider.querySelector('[data-slider-track]');
    var prev = slider.querySelector('[data-slider-prev]');
    var next = slider.querySelector('[data-slider-next]');
    if (!track || !prev || !next) return;

    function getStep() {
      var firstCard = track.children[0];
      if (!firstCard) return 320;
      var cardWidth = firstCard.getBoundingClientRect().width;
      var styles = window.getComputedStyle(track);
      var gap = parseFloat(styles.columnGap || styles.gap || '18');
      return cardWidth + gap;
    }

    prev.addEventListener('click', function () {
      track.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });

    next.addEventListener('click', function () {
      track.scrollBy({ left: getStep(), behavior: 'smooth' });
    });
  });
})();

(function () {
  var launchers = document.querySelectorAll('[data-map-launcher]');
  if (!launchers.length) return;

  function isApplePlatform() {
    var ua = navigator.userAgent || '';
    var platform = navigator.platform || '';
    var maxTouchPoints = navigator.maxTouchPoints || 0;
    var isIOS = /iPhone|iPad|iPod/i.test(ua);
    var isMacLike = /Mac/i.test(platform) && maxTouchPoints > 1;
    var isMacDesktop = /Macintosh/i.test(ua);
    return isIOS || isMacLike || isMacDesktop;
  }

  function getFallbackMapUrl(provider, destination) {
    var encoded = encodeURIComponent(destination);
    if (provider === 'apple') {
      return 'https://maps.apple.com/?q=' + encoded;
    }
    return 'https://www.google.com/maps/search/?api=1&query=' + encoded;
  }

  launchers.forEach(function (launcher) {
    var destination = launcher.getAttribute('data-destination');
    if (!destination) return;
    var googleProfileUrl = launcher.getAttribute('data-google-profile-url') || '';
    var appleProfileUrl = launcher.getAttribute('data-apple-profile-url') || '';

    launcher.addEventListener('click', function (event) {
      var target = event.target;
      if (!(target instanceof Element)) return;
      var button = target.closest('[data-map-open]');
      if (!button) return;

      var mode = button.getAttribute('data-map-open');
      var provider = mode;
      if (mode === 'smart') {
        provider = isApplePlatform() ? 'apple' : 'google';
      }

      var url = '';
      if (provider === 'google') {
        url = googleProfileUrl || getFallbackMapUrl('google', destination);
      } else if (provider === 'apple') {
        url = appleProfileUrl || getFallbackMapUrl('apple', destination);
      } else {
        url = getFallbackMapUrl('google', destination);
      }

      window.open(url, '_blank', 'noopener');
    });
  });
})();

(function () {
  var widgets = document.querySelectorAll('[data-map-widget]');
  if (!widgets.length) return;

  widgets.forEach(function (widget) {
    var loadBtn = widget.querySelector('[data-map-load]');
    var consent = widget.querySelector('[data-map-consent]');
    var iframe = widget.querySelector('[data-map-iframe]');
    var actions = widget.querySelector('.map-actions');
    var embedSrc = widget.getAttribute('data-map-embed-src');
    if (!loadBtn || !consent || !iframe || !embedSrc) return;

    loadBtn.addEventListener('click', function () {
      iframe.src = embedSrc;
      iframe.classList.remove('map-embed--hidden');
      consent.classList.add('map-consent--hidden');
      consent.setAttribute('aria-hidden', 'true');
      if (actions) {
        actions.classList.remove('map-actions--hidden');
      }
      var firstAction = actions && actions.querySelector('button');
      if (firstAction) {
        firstAction.focus();
      } else {
        iframe.focus();
      }
    });
  });
})();

(function () {
  var form = document.querySelector('form[data-contact-form]');
  if (!form) return;

  var consent = form.querySelector('#privacy-consent');
  var consentField = form.querySelector('[data-consent-field]');
  var consentError = form.querySelector('#privacy-consent-error');
  var statusEl = document.getElementById('form-submit-status');
  var submitBtn = form.querySelector('button[type="submit"]');
  if (!consent || !consentField || !consentError || !statusEl || !submitBtn) return;

  var submitLabel = submitBtn.getAttribute('data-submit-label') || submitBtn.textContent.trim();
  var sendingLabel = 'Wird gesendet…';
  var errorHtml =
    'Ihre Nachricht konnte gerade nicht gesendet werden. Bitte versuchen Sie es in ein paar Minuten erneut oder rufen Sie uns an: ' +
    '<a href="tel:+4333333970">03333 3970</a>. ' +
    '<a href="/kontakt/fehler/">Zur Fehlerhilfe</a>';

  function clearConsentError() {
    consentField.classList.remove('form-consent--invalid');
    consent.removeAttribute('aria-invalid');
    consentError.hidden = true;
  }

  function showConsentError() {
    consentField.classList.add('form-consent--invalid');
    consent.setAttribute('aria-invalid', 'true');
    consentError.hidden = false;
    consent.focus();
  }

  function hideSubmitError() {
    statusEl.hidden = true;
    statusEl.classList.remove('form-status--error');
    statusEl.textContent = '';
  }

  function showSubmitError() {
    statusEl.innerHTML = errorHtml;
    statusEl.classList.add('form-status--error');
    statusEl.hidden = false;
    statusEl.focus();
  }

  function setSubmitting(isSubmitting) {
    submitBtn.disabled = isSubmitting;
    submitBtn.setAttribute('aria-busy', isSubmitting ? 'true' : 'false');
    submitBtn.textContent = isSubmitting ? sendingLabel : submitLabel;
  }

  function showUrlErrorIfPresent() {
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('fehler') === '1') {
        showSubmitError();
      }
    } catch (e) {
      /* ignore */
    }
  }

  consent.addEventListener('change', function () {
    if (consent.checked) clearConsentError();
  });

  showUrlErrorIfPresent();

  form.addEventListener('submit', function (event) {
    if (!consent.checked) {
      event.preventDefault();
      hideSubmitError();
      showConsentError();
      return;
    }

    clearConsentError();

    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }

    if (typeof window.fetch !== 'function') {
      return;
    }

    event.preventDefault();
    hideSubmitError();
    setSubmitting(true);

    var controller = typeof AbortController === 'function' ? new AbortController() : null;
    var timeoutId = controller
      ? window.setTimeout(function () {
          controller.abort();
        }, 30000)
      : null;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
      signal: controller ? controller.signal : undefined,
    })
      .then(function (response) {
        if (response.ok) {
          window.location.assign('/kontakt/danke/');
          return;
        }
        throw new Error('form-submit-failed');
      })
      .catch(function () {
        setSubmitting(false);
        showSubmitError();
      })
      .finally(function () {
        if (timeoutId !== null) {
          window.clearTimeout(timeoutId);
        }
      });
  });
})();
