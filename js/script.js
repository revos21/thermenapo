(function () {
  var toggle = document.querySelector('.menu-toggle');
  var drawer = document.querySelector('.drawer');
  if (!toggle || !drawer) return;

  function open() {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Menü schließen');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü öffnen');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    if (drawer.classList.contains('is-open')) close();
    else open();
  });

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
  var layers = document.querySelectorAll('[data-map-reveal]');
  if (!layers.length) return;

  layers.forEach(function (layer) {
    layer.addEventListener('click', function () {
      var map = layer.closest('.contact-map');
      if (!map) return;
      var actions = map.querySelector('.map-actions');
      if (actions) actions.classList.remove('map-actions--hidden');
      layer.style.display = 'none';
    });
  });
})();
