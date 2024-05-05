const ExpenseSchema = require('../models/ExpenseModel');

exports.addExpense = async (req, res) => {
  const { title, amount, type, category, description, date } = req.body;
  const expense = ExpenseSchema({
    title,
    amount,
    type,
    category,
    description,
    date,
  });
  try {
    if (!title || !type || !category || !description || !date) {
      res.status(400).json({
        message: 'Please fill all the fields',
      });
    }
    if (amount === undefined || amount < 0 || !amount === 'number') {
      res.status(400).json({
        message: 'Please enter a valid amount',
      });
    }
    await expense.save();
    res.status(200).json({
      message: 'Expense added successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await ExpenseSchema.findByIdAndDelete(id);
    res.status(200).json({
      message: 'Expense deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
