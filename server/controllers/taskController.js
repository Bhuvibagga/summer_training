import mongoose from 'mongoose';
import Task from '../models/Task.js';

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid task id' });
    }

    const task = await Task.findOne({ _id: id, createdBy: req.user.id });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate, tags, assignedTo } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const task = await Task.create({
      title,
      description,
      status,
      priority,
      dueDate,
      tags,
      assignedTo,
      createdBy: req.user.id,
    });

    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid task id' });
    }

    const task = await Task.findOne({ _id: id, createdBy: req.user.id });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    const allowedFields = ['title', 'description', 'status', 'priority', 'dueDate', 'tags', 'assignedTo'];
    const updates = {};

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid task id' });
    }

    const task = await Task.findOne({ _id: id, createdBy: req.user.id });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await Task.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
