# Notes API Skeleton Project

This project is a **backend skeleton for a Notes API** built with **Node.js, Express, and MongoDB**.  
It is generated using [Express Generator](https://expressjs.com/en/starter/generator.html) and includes helpful packages like:

- **dotenv** → for environment variables
- **cookie-parser** → for parsing cookies
- **morgan** → for request logging
- **mongoose** → for MongoDB interaction
- **nodemon** → for automatic server reload during development

This skeleton is intended for **learning and practice**. Each member has their **assigned files** (models, controllers, routes) to implement based on TODO comments.

---

## Project Setup Instructions

### 1. Clone the project

```bash
git clone git@github.com:imperionite/notes.git
cd notes
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

- Copy `.env.example` → `.env`
- Add your **MongoDB URI** and desired **PORT**

```env
MONGO_URI=<Your MongoDB connection string>
PORT=3000
```

---

## MongoDB Setup

We will use **MongoDB Atlas** (cloud database).

**Steps:**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account
2. Create a **cluster** → a cloud database instance
3. Create a **database user** with username & password
4. Get your **connection string (URI)** and replace `<username>`, `<password>`, `<dbname>`
5. Add this URI to your `.env` file as `MONGO_URI`

> For detailed guidance, you can follow these tutorials:
>
> - Blog: [MongoDB Atlas + Express Connection](https://medium.com/@obinnayouyou/how-to-connect-mongodb-atlas-with-vs-code-nodejs-1aa443030e73)
> - YouTube: [MongoDB Atlas Tutorial for Beginners](https://www.youtube.com/watch?v=-56x56UppqQ)

---

## Run the server

- For development with auto-reload:

```bash
npm run dev
```

- For production:

```bash
npm start
```

- Open browser or Postman: [http://localhost:3000/](http://localhost:3000/)
- Test API endpoints:
  - GET `/notes` → fetch all notes
  - POST `/notes` → add a note `{ "text": "My first note" }`

---

## Test API Endpoints

**Base URL:** `http://localhost:3000/`

### GET all notes

- Browser / Postman: `http://localhost:3000/notes`
- Curl:

```bash
curl -X GET http://localhost:3000/notes
```

### POST a new note

- Postman: POST `http://localhost:3000/notes` with JSON body:

```json
{ "text": "My first note" }
```

- Curl:

```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"text": "My first note"}'
```

> Tip: Use `curl -v` to see detailed request/response for learning purposes

---

## Team Assignment

- Each member will **implement their assigned file** (models, controllers, routes) based on TODO comments
- After completing your tasks:
  1. Push your changes to your own GitHub repo
  2. Send the repo link in the **group chat (GC)** for review

---

## Frontend Integration (Optional)

- For now, **focus on completing your backend tasks**
- A **simple frontend** connecting to this API will be shared later
- After receiving it, review the code and observe how frontend **fetches data from the API**

---

## Notes

- Follow the TODO comments carefully; they are **step-by-step instructions**
- Don’t worry if some concepts are new — this is a **learning activity**
- Always test your changes with either Postman, REST CLient, Curl or browser before pushing

---

## Recommended Learning Resources

- Node.js + Express Basics: [Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
- Mongoose Basics: [Mongoose Tutorial](https://www.youtube.com/watch?v=WDrU305J1yw)
- MongoDB Atlas Quick Start: [MongoDB Docs](https://www.mongodb.com/docs/atlas/getting-started/)
