# FarmKonnect Authentication System

## Overview
Complete authentication system with sign-in and sign-up pages for the FarmKonnect Agricultural Marketplace.

## Features
- ✅ User registration (Sign Up)
- ✅ User login (Sign In)
- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Role-based access (Buyer/Seller)
- ✅ Protected routes
- ✅ Responsive design
- ✅ Form validation

## Tech Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs for password hashing
- CORS enabled

### Frontend
- React 19
- Vite
- React Router DOM
- Modern CSS with gradients

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB running on `localhost:27017`

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication Routes

#### POST `/api/auth/signup`
Register a new user
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "buyer" // or "seller"
}
```

Response:
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "buyer"
  }
}
```

#### POST `/api/auth/signin`
Login existing user
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "buyer"
  }
}
```

#### GET `/api/auth/me`
Get current user (Protected route)
Headers: `Authorization: Bearer <token>`

Response:
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "buyer"
  }
}
```

## Frontend Routes

- `/` - Home page (protected, requires authentication)
- `/signin` - Sign in page
- `/signup` - Sign up page

## Features Explained

### Password Security
- Passwords are hashed using bcrypt with salt rounds
- Passwords are never stored in plain text
- Password comparison uses bcrypt's secure compare function

### JWT Authentication
- Tokens expire after 7 days
- Tokens are stored in localStorage
- Protected routes check for valid tokens

### User Roles
- **Buyer**: Default role for regular users
- **Seller**: For farmers/sellers listing products
- **Admin**: For platform administrators (can be added later)

### Form Validation
- Email format validation
- Password minimum length (6 characters)
- Password confirmation matching
- Required field checks

## Testing the Application

### Test Sign Up Flow:
1. Open `http://localhost:5173/signup`
2. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Role: Buyer or Seller
   - Password: test123
   - Confirm Password: test123
3. Click "Sign Up"
4. You should be redirected to the home page

### Test Sign In Flow:
1. Open `http://localhost:5173/signin`
2. Enter credentials:
   - Email: test@example.com
   - Password: test123
3. Click "Sign In"
4. You should be redirected to the home page

### Test Protected Route:
1. Try accessing `http://localhost:5173/` without logging in
2. You should be redirected to `/signin`

### Test Logout:
1. Click the "Logout" button on the home page
2. You should be logged out and redirected to sign-in

## File Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── authController.js  # Auth logic (signup, signin, getMe)
├── middleware/
│   └── auth.js           # JWT verification middleware
├── models/
│   └── User.js           # User schema with password hashing
├── routes/
│   └── auth.js           # Auth routes
├── index.js              # Express app setup
└── package.json

frontend/
├── src/
│   ├── pages/
│   │   ├── SignIn.jsx    # Sign in component
│   │   ├── SignUp.jsx    # Sign up component
│   │   ├── Home.jsx      # Protected home page
│   │   ├── Auth.css      # Auth pages styling
│   │   └── Home.css      # Home page styling
│   ├── App.jsx           # Router setup
│   └── main.jsx
└── package.json
```

## Security Notes

⚠️ **Important for Production:**
1. Move JWT_SECRET to environment variables
2. Use HTTPS in production
3. Implement rate limiting on auth endpoints
4. Add CSRF protection
5. Implement refresh token mechanism
6. Add email verification
7. Add password reset functionality
8. Use secure cookie storage instead of localStorage for tokens

## Next Steps

- [ ] Add password reset functionality
- [ ] Add email verification
- [ ] Add profile update functionality
- [ ] Add forgot password feature
- [ ] Implement refresh tokens
- [ ] Add OAuth (Google, Facebook)
- [ ] Add 2FA authentication
- [ ] Add user profile pictures
- [ ] Implement role-based authorization middleware

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod`
- Check connection string in `backend/config/db.js`

### CORS Issues
- Backend has CORS enabled for `http://localhost:5173`
- Update CORS settings if frontend runs on different port

### Port Already in Use
- Backend: Change port in `backend/index.js`
- Frontend: Vite will automatically try next available port

## Contributing
Feel free to submit issues and enhancement requests!

## License
ISC
