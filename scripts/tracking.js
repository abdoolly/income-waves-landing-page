!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '2424270707948114');

// Initialize tracking with geolocation-based consent
async function initializeTracking() {
  try {
    // Check for existing consent first
    const hasConsent = localStorage.getItem('cookieConsent') === 'accepted';
    window.hasConsent = hasConsent;

    if (hasConsent) {
      // User already gave consent
      fbq('consent', 'grant');
      const pageViewLocalEventId = `pageview_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 8)}`;

      fbq('track', 'PageView', {}, { eventID: pageViewLocalEventId });
      sendPageViewToCAPI(pageViewLocalEventId);
      if (window.posthog) posthog.opt_in_capturing();
    } else {
      // Try auto opt-in for non-EU/US users
      const autoOptedIn = await handleAutoOptIn();

      if (!autoOptedIn) {
        // EU/US user needs manual consent - start with revoked consent
        fbq('consent', 'revoke');
        if (window.posthog) posthog.opt_out_capturing();
      }
    }
  } catch (error) {
    console.error('Error initializing tracking:', error);
    // Fallback to requiring consent if error occurs
    fbq('consent', 'revoke');
    if (window.posthog) posthog.opt_out_capturing();
  }
}

// Initialize tracking on page load
initializeTracking();
