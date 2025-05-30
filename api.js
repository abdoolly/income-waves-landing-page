function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return '';
}

async function sendPageViewToCAPI(eventId) {
  const fbc = getCookie('_fbc');
  const fbp = getCookie('_fbp');
  const userAgent = navigator.userAgent;

  try {
    const ipRes = await fetch('https://api64.ipify.org?format=json');
    const ip = (await ipRes.json()).ip;

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
    const ipRes = await fetch('https://api64.ipify.org?format=json');
    const ip = (await ipRes.json()).ip;

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
