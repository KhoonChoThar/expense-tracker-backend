const IncomeSchema = require('../models/IncomeModel');

exports.addIncome = async (req, res) => {
  const { title, amount, type, category, description, date } = req.body;
  const income = IncomeSchema({
    title,
    amount,
    type,
    category,
    description,
    date,
  });
  try {
    if (!title || !category || !date) {
      return res.status(400).json({
        message: 'Please fill all the fields',
      });
    }
    if (amount === undefined || amount < 0 || typeof amount !== 'number') {
      return res.status(400).json({
        message: 'Please enter a valid amount',
      });
    }
    await income.save();
    return res.status(200).json({
      message: 'Income added successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    await IncomeSchema.findByIdAndDelete(id);
    res.status(200).json({
      message: 'Income deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
