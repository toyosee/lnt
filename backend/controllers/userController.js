const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const registerUser = async (req, res) => {
  const { email, password, role, accepted_terms } = req.body;

  try {
    // Basic validation
    if (!email || !password || !role || !accepted_terms) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check for existing user
    const [existing] = await db.promise().query(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );
    if (existing.length > 0) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    // Hash password
    const password_hash = await bcrypt.hash(password, 10);

    // Prepare values
    const createdAt = new Date();
    const updatedAt = new Date();
    const lastLogin = null;
    const isVerified = false;

    const sql = `
      INSERT INTO users (
        email, password_hash, role, accepted_terms,
        name, phone, location, kyc, is_verified,
        created_at, updated_at, last_login
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      email,
      password_hash,
      role,
      accepted_terms,
      null, // name
      null, // phone
      null, // location
      null, // kyc
      isVerified,
      createdAt,
      updatedAt,
      lastLogin
    ];

    const [result] = await db.promise().query(sql, values);
    const userId = result.insertId;

    const [rows] = await db.promise().query(
      'SELECT * FROM users WHERE id = ?',
      [userId]
    );
    const newUser = rows[0];

    const token = jwt.sign(
      { id: newUser.id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.status(201).json({
      message: 'User registered successfully',
      token,
      user: newUser
    });
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({ message: 'Sign Up failed', error: err.message });
  }
};


// Managing login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Fetch user by email
    const [results] = await db.promise().query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Update last_login timestamp
    await db.promise().query(
      'UPDATE users SET last_login = ? WHERE id = ?',
      [new Date(), user.id]
    );

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token,
      message: 'Login successful'
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

// Update profile
const updateUserProfile = async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized: Missing user ID' });
  }

  const { name, phone, location, kyc } = req.body;
  // const profile_picture = req.file ? req.file.path : null;

  try {
    const fields = [];
    const values = [];

    if (name !== undefined) {
      fields.push('name = ?');
      values.push(name || null);
    }
    if (phone !== undefined) {
      fields.push('phone = ?');
      values.push(phone || null);
    }
    if (location !== undefined) {
      fields.push('location = ?');
      values.push(location || null);
    }
    if (kyc !== undefined) {
      fields.push('kyc = ?');
      values.push(kyc || null);
    }
    // if (profile_picture !== null) {
    //   fields.push('profile_picture = ?');
    //   values.push(profile_picture);
    // }

    if (fields.length === 0) {
      return res.status(400).json({ message: 'No valid fields to update' });
    }

    fields.push('updated_at = ?');
    values.push(new Date());
    values.push(userId);

    const sql = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;

    console.log('SQL:', sql);
    console.log('Values:', values);

    await db.promise().query(sql, values);

    const [updated] = await db.promise().query('SELECT * FROM users WHERE id = ?', [userId]);
    res.status(200).json({ message: 'Profile updated successfully', user: updated[0] });
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(500).json({ message: 'Failed to update profile', error: err.message });
  }
};

// Get user profile
const getUserProfile = async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized: Missing user ID' });
  }

  try {
    const [rows] = await db.promise().query('SELECT * FROM users WHERE id = ?', [userId]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = rows[0];
    delete user.password; // Optional: remove sensitive fields

    res.status(200).json({ user });
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ message: 'Failed to fetch profile', error: err.message });
  }
};


module.exports = { registerUser, loginUser, updateUserProfile, getUserProfile };