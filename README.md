# typescript-login-app
User registration Login with hashed passwords (bcrypt) JWT authentication Protected route (/auth/profile) Fully written in TypeScript

**Backend (Node.js + Express + TypeScript)**
backend/
├── package.json
├── tsconfig.json
└── src/
    ├── app.ts
    ├── server.ts
    ├── controllers/
    │   └── auth.controller.ts
    ├── middleware/
    │   └── auth.middleware.ts
    ├── models/
    │   └── user.model.ts
    ├── services/
    │   └── user.service.ts
    └── routes/
    └── auth.routes.ts
**
✅ Features:**

User registration
Login with hashed passwords (bcrypt)
JWT authentication
Protected route (/auth/profile)
Fully written in TypeScript

**How to run the backend:**

cd login-app/backend

npm install

npx ts-node-dev src/server.ts


Backend runs on:
http://localhost:4000

🔐 Example API calls

Register
POST /auth/register
{
  "email": "user@test.com",
  "password": "password123"
}


Login
POST /auth/login

Returns JWT token.

GET /auth/profile
Authorization: Bearer <TOKEN>

1️⃣ Test Register API
Endpoint
POST /auth/register

Full URL
http://localhost:4000/auth/register

Postman Setup
Method: POST
Headers:
Content-Type: application/json

Body → raw → JSON
JSON

{  "email": "test@example.com",
"password": "password123"}

✅ Expected Response
JSON

{  "id": "some-uuid", 
"email": "test@example.com"}


✅ This means the user was successfully registered.

2️⃣ Test Login API
Endpoint
POST /auth/login

Full URL
http://localhost:4000/auth/login

Postman Setup
Method: POST
Headers:
Content-Type: application/json

Body → raw → JSON
JSON{  "email": "test@example.com",  "password": "password123"}Show more lines

✅ Expected Response
JSON
{  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJShow more lines

⚠️ Copy this token — you will use it in the next step.

3️⃣ Test Protected Profile API
This endpoint requires authentication.
Endpoint
GET /auth/profile

Full URL
http://localhost:4000/auth/profile

✅ Postman Setup (IMPORTANT)
Method: GET
Headers:
KeyValueAuthorizationBearer <PASTE_YOUR_TOKEN>
📌 Example:
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

✅ Expected Response
JSON

{  "user": 

{    "userId": "some-uuid",
"iat": 1712399999,
"exp": 1712403599
}}

✅ This proves:

JWT works
Middleware works
Protected route works


