const bcrypt = require('bcrypt');
const db = require('./config/db');

const seedAdmin = async () => {
  const name = 'Elijah Abolaji';
  const email = 'admin@barterverse.dev';
  const phone = '+234869213941';
  const password = 'secureAdminPass123';
  const location = 'Kaduna, Nigeria';
  const role = 'admin';
  const isVerified = true;
  const acceptedTerms = true;
  const createdAt = new Date();
  const kyc = null; // or JSON string if needed
  const updatedAt = new Date();
  const lastLogin = null;

  const passwordHash = await bcrypt.hash(password, 10);

  const sql = `
    INSERT INTO users (
      name, email, phone, password_hash, location, role,
      is_verified, accepted_terms, created_at, kyc, updated_at, last_login
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name, email, phone, passwordHash, location, role,
      isVerified, acceptedTerms, createdAt, kyc, updatedAt, lastLogin
    ],
    (err, result) => {
      if (err) {
        console.error('❌ Error seeding admin user:', err);
      } else {
        console.log('✅ Admin user seeded with ID:', result.insertId);
      }
      process.exit();
    }
  );
};

seedAdmin();