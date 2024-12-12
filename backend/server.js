const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static assets
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://mohanprasath:mohan2004@cluster0.rg93q.mongodb.net/portfolioDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API routes
app.use(projectRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
