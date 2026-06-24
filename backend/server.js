//const express = require('express');
import express from 'express';

const app = express();

app.get("/api/auth/signup", (req, res) => {
  res.json({ message: "Signup route" });
});

app.get("/api/auth/login", (req, res) => {
  res.json({ message: "Login route" });
});
app.get("/api/auth/logout", (req, res) => {
  res.json({ message: "Logout route" });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
