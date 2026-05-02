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
};