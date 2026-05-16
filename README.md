# FlyTicket — Frontend

User interface for the FlyTicket airline booking application.
Built with plain HTML, CSS, and vanilla JavaScript.

## Technologies Used

- HTML5
- CSS3 (custom, no frameworks)
- Vanilla JavaScript (ES6+)
- Served via Express static files

## Getting Started

### Prerequisites

- FlyTicket backend must be running on `http://localhost:5000`
- See [flyticket-backend](https://github.com/ruasnv/flyticket-backend) for setup

### Running the Frontend

The frontend is served directly by the Express backend.
Once the backend is running, open:
http://localhost:5000

No separate install or build step needed.

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/index.html` | Flight search and all available flights |
| Booking | `/booking.html` | Seat selection and passenger info |
| Confirmation | `/confirmation.html` | Booking success + e-ticket download |
| Login | `/login.html` | User login |
| Register | `/register.html` | User registration |
| Profile | `/profile.html` | View and cancel user tickets |
| Admin Login | `/admin/login.html` | Admin login |
| Admin Dashboard | `/admin/dashboard.html` | Flight and booking management |

## Features

### User Side
- View all upcoming flights on the home page
- Search flights by origin, destination, and date
- View direct and connecting flights in results
- Interactive seat map for seat selection
- Book tickets with passenger information
- Download e-ticket as a text file
- View and cancel bookings from profile page

### Admin Side
- Secure login with session management
- View, add, edit and delete flights
- Flight rule validation with friendly error messages
- View all bookings and cancel any ticket

## Bonus Features Implemented

- Seat selection with interactive seat map
- Download e-ticket on confirmation page
- User authentication (register/login/logout)
- Connected flights via graph algorithm

## Project Structure
```
frontend/
├── index.html           # Home — search + all flights
├── booking.html         # Seat map + passenger form
├── confirmation.html    # Booking confirmation + download
├── login.html           # User login
├── register.html        # User registration
├── profile.html         # User ticket management
├── admin/
│   ├── login.html       # Admin login
│   └── dashboard.html   # Admin panel
├── css/
│   └── style.css        # Global styles
└── js/
└── api.js           # All API calls in one place
```

## Admin Credentials

| Field    | Value    |
|----------|----------|
| Username | admin    |
| Password | admin123 |