# Mock-Round-practical-3
# Campus Complaint Tracker API

A production-ready, backend-only RESTful API built to register and manage campus complaints. This project implements the **MVC (Model-View-Controller)** architecture using **Node.js, Express.js, and MongoDB**. 

---

## 🚀 Features

- **Full CRUD Operations**: Create, read, update, and delete campus complaints.
- **Automated Lifecycle Timestamps**: Uses Mongoose schemas to track `createdAt` and `updatedAt` records automatically.
- **Advanced Filtering**: Narrow down complaints dynamically via query strings by `status`, `category`, or `priority`.
- **Case-Insensitive Search**: Search seamlessly through titles and student names using MongoDB regex.
- **Strict Data Validation**: Validates all payload structures, enforces enum values, and safely catches invalid MongoDB ObjectIDs.
- **Robust Error Handling**: Sends standard HTTP status codes (`400`, `404`, `500`) alongside clean JSON responses.

---

## 📁 Project Structure

```text
campus-complaint-tracker/
├── config/
│   └── db.js                        # MongoDB connection setup
├── models/
│   └── Complaint.js                 # Mongoose schema and enums
├── controllers/
│   └── complaintController.js       # Core business logic and query building
├── routes/
│   └── complaintRoutes.js           # REST endpoint mapping
├── .env                             # Environment variables configuration
├── package.json                     # Project dependencies & scripts
└── server.js                        # Application entry point
```

---

## 🛠️ Prerequisites

Ensure you have the following installed on your local environment:
- **Node.js** (v16.x or higher)
- **npm** (v7.x or higher)
- **MongoDB** (Local instance or MongoDB Atlas URI)
- **Postman** (For testing endpoints)

---

## ⚙️ Installation & Setup

1. **Clone the repository and navigate to the root folder:**
   ```bash
   cd campus-complaint-tracker
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the following keys:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/campus_complaints
   ```
   *(Replace the `MONGO_URI` with your Atlas connection string if using a cloud database)*

4. **Start the server:**
   ```bash
   # Start in development mode (auto-reloads on save)
   npm run dev
   
   # Or start normally
   npm start
   ```

---

## 📋 API Endpoints Documentation

### 1. Create a Complaint
- **Method / Endpoint**: `POST /api/complaints`
- **Payload Example**:
  ```json
  {
    "studentName": "John Doe",
    "email": "johndoe@campus.edu",
    "title": "Wi-Fi Disconnection in Block C",
    "description": "The internet drops every 10 minutes near room 302.",
    "category": "IT",
    "priority": "High",
    "location": "Block C, 3rd Floor"
  }
  ```
- **Note**: `status` defaults automatically to `Open`.

### 2. Get All Complaints (With Filter & Search)
- **Method / Endpoint**: `GET /api/complaints`
- **Query Parameter Examples**:
  - Filter by category and priority: `/api/complaints?category=IT&priority=High`
  - Filter by status: `/api/complaints?status=In Progress`
  - Global Search (Title/Name): `/api/complaints?search=wifi`

### 3. Get Single Complaint by ID
- **Method / Endpoint**: `GET /api/complaints/:id`

### 4. Update Complaint Details
- **Method / Endpoint**: `PUT /api/complaints/:id`
- **Payload**: Fields you wish to modify (`title`, `description`, etc.)

### 5. Patch Complaint Status
- **Method / Endpoint**: `PATCH /api/complaints/:id/status`
- **Payload**:
  ```json
  { "status": "Resolved" }
  ```
- **Accepted Values**: `Open`, `In Progress`, `Resolved`, `Rejected`

### 6. Delete a Complaint
- **Method / Endpoint**: `DELETE /api/complaints/:id`

---

## 🧪 Postman Testing Checklist

To satisfy the 2-hour practical requirements, ensure you verify the following sequences in Postman:
1. **Data Seed**: Create at least 4 complaints spanning varied categories (`Infrastructure`, `IT`, `Cleanliness`) and priorities.
2. **Validation**: Attempt a `POST` with a missing `email` field to confirm a `400 Bad Request` returns.
3. **Enum Guarding**: Try to `PATCH` a status to `"Pending"` to confirm the API drops the request with validation errors.
4. **Fallback Handling**: Query a non-existent or invalid MongoDB ID format to verify it handles gracefully with a clean `404 Not Found` payload instead of crashing the server.
