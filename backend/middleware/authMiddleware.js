const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Optional: validate payload structure
    if (!decoded || !decoded.id) {
      return res.status(403).json({ error: 'Invalid token payload' });
    }

    req.user = decoded; // This must include `id`
    next();
  } catch (err) {
    // Optional: differentiate token errors
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }

    return res.status(403).json({ error: 'Token verification failed' });
  }
};