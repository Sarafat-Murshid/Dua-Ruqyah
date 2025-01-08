import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import serverless from "serverless-http";

const app = express();
const router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = new sqlite3.Database("dua_main.sqlite", (err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// GET: All Categories
router.get("/category", (req, res) => {
  db.all("SELECT * FROM category", [], (err, rows) => {
    if (err)
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    res.json({
      success: true,
      data: rows,
    });
  });
});

// GET: Sub Categories by Category ID
router.get("/sub_category", (req, res) => {
  const { cat_id } = req.query;
  if (!cat_id) {
    return res.status(400).json({
      success: false,
      error: "Category ID (cat_id) is required",
    });
  }

  db.all(
    "SELECT * FROM sub_category WHERE cat_id = ?",
    [cat_id],
    (err, rows) => {
      if (err)
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      res.json({
        success: true,
        data: rows,
      });
    }
  );
});

// GET: Duas by Category ID and SubCategory ID
router.get("/dua", (req, res) => {
  const { cat_id, subcat_id } = req.query;
  if (!subcat_id) {
    return res.status(400).json({
      success: false,
      error: "SubCategory ID (subcat_id) is required",
    });
  }

  const query = cat_id
    ? "SELECT * FROM dua WHERE cat_id = ? AND subcat_id = ?"
    : "SELECT * FROM dua WHERE subcat_id = ?";
  const params = cat_id ? [cat_id, subcat_id] : [subcat_id];

  db.all(query, params, (err, rows) => {
    if (err)
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    res.json({
      success: true,
      data: rows,
    });
  });
});

// GET: Dua by ID
router.get("/dua/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM dua WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
    if (!row) {
      return res.status(404).json({
        success: false,
        error: "Dua not found",
      });
    }
    res.json({
      success: true,
      data: row,
    });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

app.use("/.netlify/functions/server", router);

export const handler = serverless(app);
