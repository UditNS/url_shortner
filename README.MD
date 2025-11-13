# 🔗 URL Shortener

A simple URL shortener built with **Node.js**, **Express**, and **MongoDB**.  
This app converts long URLs (like `https://mobile.com/search?query=xyz`) into short, shareable links (like `http://localhost:3000/abcd`).

---

## 🚀 Features

- Shortens long URLs into unique short links  
- Redirects short links to the original URL  
- Stores data in MongoDB  
- Simple RESTful API structure  
- Easily extendable for analytics or expiration logic  

---

## 🧰 Tech Stack

- **Node.js** – Server-side JavaScript runtime  
- **Express.js** – Web framework for Node.js  
- **MongoDB** – NoSQL database for storing URLs  
- **Mongoose** – ODM library for MongoDB  
- **Shortid** – To generate unique short codes  

---

## Setup environment variables
- Create a .env file and add your DB_URL