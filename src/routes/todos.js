import { Router } from "express";
import Todo from "../models/Todo.js";
const router = Router();
// CREATE
router.post("/", async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json(todo);
});

// READ ALL
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// READ BY ID
router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(todo);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
