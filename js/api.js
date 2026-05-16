const BASE = 'http://localhost:5000/api';

async function request(path, options = {}) {
  const res = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    ...options
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}

const api = {
  getCities:       ()           => request('/cities'),
  searchFlights:   (params)     => request(`/flights/search?${new URLSearchParams(params)}`),
  getFlight:       (id)         => request(`/flights/${id}`),
  getAllFlights:   ()            => request('/flights'),
  createFlight:    (body)       => request('/flights', { method: 'POST', body: JSON.stringify(body) }),
  updateFlight:    (id, body)   => request(`/flights/${id}`, { method: 'PUT', body: JSON.stringify(body) }),
  deleteFlight:    (id)         => request(`/flights/${id}`, { method: 'DELETE' }),
  bookTicket:      (body)       => request('/tickets', { method: 'POST', body: JSON.stringify(body) }),
  getTickets:      (email)      => request(`/tickets/${email}`),
  adminLogin:      (body)       => request('/admin/login', { method: 'POST', body: JSON.stringify(body) }),
  adminLogout:     ()           => request('/admin/logout', { method: 'POST' }),
  checkSession:    ()           => request('/admin/me'),
  getSeats:        (flightId)   => request(`/flights/${flightId}/seats`),
  // User auth
  register:         (body) => request('/users/register',    { method: 'POST', body: JSON.stringify(body) }),
  userLogin:        (body) => request('/users/login',       { method: 'POST', body: JSON.stringify(body) }),
  userLogout:       ()     => request('/users/logout',      { method: 'POST' }),
  checkUser:        ()     => request('/users/me'),
  getUserTickets:   ()     => request('/users/tickets'),
  cancelTicket:     (id)   => request(`/users/tickets/${id}`,  { method: 'DELETE' }),

  // Admin tickets
  getAdminTickets:   ()    => request('/admin/tickets'),
  adminCancelTicket: (id)  => request(`/admin/tickets/${id}`,  { method: 'DELETE' }),
};

// Auto-update nav on every page
async function initNav() {
  const navUser = document.getElementById('navUser');
  if (!navUser) return;

  try {
    const res = await api.checkUser();
    if (res.loggedIn) {
      navUser.innerHTML = `
        <a href="profile.html" 
          style="font-size:0.85rem;color:var(--primary);font-weight:600">
          👤 ${res.name}
        </a>
        <button class="btn btn-outline" 
          style="padding:0.3rem 0.8rem;font-size:0.82rem"
          onclick="handleUserLogout()">Logout</button>`;
    } else {
      navUser.innerHTML = `
        <a href="login.html" style="font-size:0.85rem">Login</a>
        <a href="register.html" class="btn btn-primary" 
          style="padding:0.4rem 1rem;font-size:0.85rem">Register</a>`;
    }
  } catch {}
}

async function handleUserLogout() {
  await api.userLogout();
  window.location.href = 'index.html';
}

initNav();