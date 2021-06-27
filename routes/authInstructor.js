const { Router } = require('express');
const instructorAuth = require('../controllers/instructorAuth');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

router.post('/signup/instructor', instructorAuth.signup_post);
router.post('/login/instructor', instructorAuth.login_post);
router.get('/instructor/logout', requireAuth, instructorAuth.logout_get);

module.exports = router;