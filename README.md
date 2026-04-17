# IT Asset Manager

Work in progress 🚧

A system for managing company IT assets such as laptops, monitors, and other hardware.

## Planned features
- CRUD for devices
- Assignment to employees
- Warranty tracking
- Email notifications
- Basic authentication
- Search & filter
- Dashboard (KPIs)

## Installation

Install dependencies
```bash
cd backend

cp .env.example .env

npm install
```

Run database migrations and seeding
```bash
npx knex migrate:latest

npx knex seed:run
```