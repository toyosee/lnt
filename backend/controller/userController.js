const bcrypt = require('bcryptjs');
const { User, KycDocument } = require('../models'); // Sequelize models

const registerUser = async (req, res) => {
  try {
    const { name, email, phone, location, password, role, accepted_terms, kyc } = req.body;

    // Basic validation
    if (!name || !email || !password || !role || !accepted_terms) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check for existing user
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await User.create({
      name,
      email,
      phone,
      location,
      password_hash,
      role,
      accepted_terms
    });

    // Save KYC documents
    if (kyc && Array.isArray(kyc)) {
      for (const doc of kyc) {
        await KycDocument.create({
          user_id: newUser.id,
          document_type: doc.type,
          document_url: doc.url,
          extra_info: doc.extra || null
        });
      }
    }

    // TODO: Generate and send OTP

    res.status(201).json({ message: 'User registered successfully', user_id: newUser.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser };