function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return '';
}

// Function to detect if user is in EU or US
async function getUserLocation() {
  // Return cached location if already determined
  if (window.userLocation) {
    return window.userLocation;
  }

  try {
    const ipRes = await fetch('https://api64.ipify.org?format=json');
    const ipData = await ipRes.json();

    // Get country info from IP geolocation
    const geoRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
    const geoData = await geoRes.json();

    const countryCode = geoData.country_code;

    // EU countries list (ISO 3166-1 alpha-2 codes)
    const euCountries = [
      'AT',
      'BE',
      'BG',
      'HR',
      'CY',
      'CZ',
      'DK',
      'EE',
      'FI',
      'FR',
      'DE',
      'GR',
      'HU',
      'IE',
      'IT',
      'LV',
      'LT',
      'LU',
      'MT',
      'NL',
      'PL',
      'PT',
      'RO',
      'SK',
      'SI',
      'ES',
      'SE',
      'GB',
    ];

    // Check if user is in EU or US
    const isEuOrUs = euCountries.includes(countryCode) || countryCode === 'US';

    const locationData = {
      countryCode,
      isEuOrUs,
      ip: ipData.ip,
    };

    // Cache the location data globally
    window.userLocation = locationData;

    return locationData;
  } catch (err) {
    console.error('Location detection error:', err);
    // Default to showing banner if location detection fails (safer approach)
    const fallbackData = {
      countryCode: 'UNKNOWN',
      isEuOrUs: true,
      ip: null,
    };

    // Cache the fallback data to avoid repeated API calls
    window.userLocation = fallbackData;

    return fallbackData;
  }
}

// Check if user needs cookie consent (EU/US only)
async function shouldShowCookieBanner() {
  const hasConsent = localStorage.getItem('cookieConsent');
  if (hasConsent) {
    return false; // Already made a choice
  }

  const location = await getUserLocation();
  return location.isEuOrUs;
}

// Automatically opt-in users outside EU/US
async function handleAutoOptIn() {
  const location = await getUserLocation();

  console.log('location', location);

  if (!location.isEuOrUs) {
    // Auto opt-in for non-EU/US users
    localStorage.setItem('cookieConsent', 'accepted');
    window.hasConsent = true;

    // Grant consent and track
    if (typeof fbq !== 'undefined') {
      fbq('consent', 'grant');
      const pageViewLocalEventId = `pageview_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 8)}`;

      fbq('track', 'PageView', { eventID: pageViewLocalEventId });
      sendPageViewToCAPI(pageViewLocalEventId);
    }

    if (window.posthog) {
      posthog.opt_in_capturing();
    }

    return true; // Auto opted-in
  }

  return false; // Needs manual consent
}

async function sendPageViewToCAPI(eventId) {
  const fbc = getCookie('_fbc');
  const fbp = getCookie('_fbp');
  const userAgent = navigator.userAgent;

  try {
    let ip;
    // Try to get IP from stored location first, fallback to API call
    if (window.userLocation && window.userLocation.ip) {
      ip = window.userLocation.ip;
    } else {
      const ipRes = await fetch('https://api64.ipify.org?format=json');
      ip = (await ipRes.json()).ip;
    }

    await fetch('https://income-waves-tracker.onrender.com/t/pageview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_ip: ip,
        user_agent: userAgent,
        fbc,
        fbp,
        eventId,
        testEventCode: 'TEST8368',
      }),
    });
  } catch (err) {
    console.error('CAPI PageView Error:', err);
  }
}

async function trackSignUp(email, sellerOrInvestor, eventId) {
  const fbc = getCookie('_fbc');
  const fbp = getCookie('_fbp');
  const userAgent = navigator.userAgent;

  try {
    let ip;
    // Try to get IP from stored location first, fallback to API call
    if (window.userLocation && window.userLocation.ip) {
      ip = window.userLocation.ip;
    } else {
      const ipRes = await fetch('https://api64.ipify.org?format=json');
      ip = (await ipRes.json()).ip;
    }

    await fetch('https://income-waves-tracker.onrender.com/t/sign_up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        client_ip: ip,
        user_agent: userAgent,
        fbc,
        fbp,
        sellerOrInvestor,
        eventId,
      }),
    });
  } catch (err) {
    console.error('CAPI SignUp Error:', err);
  }
}
