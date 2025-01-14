# Crypto Milan Backend

This is the backend for the Crypto Milan application, which mimics the functionality of Luma. Admins can list events, and users can view event details.

## Features

- Admin can list events (protected endpoint)
- Users can view event details
- Event data stored in MongoDB

## Setup

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone
   cd crypto-milan/backend
   ```

2. Install dependencies:

   ```sh
   npm install express body-parser mongoose dotenv
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   MONGODB_URI=mongodb://localhost:27017/crypto-milan
   ADMIN_TOKEN=admin-token
   ```

4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Event Routes

- `GET /events`: Get all events
- `GET /events/:id`: Get event by ID
- `POST /events`: Add a new event (protected)

## Authentication

To access protected endpoints, include the following header in your request:

```sh
Authorization: Bearer admin-token
```

## License

This project is licensed under the MIT License.
