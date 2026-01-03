import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

// Get one todo
router.get("/:id", async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (!todo) return res.status(404).json({ error: "Not found" });
  res.json(todo);
});

// Create
router.post("/", async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json(todo);
});

// Update
router.put("/:id", async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (!todo) return res.status(404).json({ error: "Not found" });
  await todo.update(req.body);
  res.json(todo);
});

// Delete
router.delete("/:id", async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (!todo) return res.status(404).json({ error: "Not found" });
  await todo.destroy();
  res.json({ message: "Deleted" });
});

export default router;
