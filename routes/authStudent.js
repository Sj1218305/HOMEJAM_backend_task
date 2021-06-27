const { Router } = require('express');
const studentAuth = require('../controllers/studentAuth');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();


router.post('/signup/student', studentAuth.signup_post);
router.post('/login/student', studentAuth.login_post);
router.get('/student/logout', requireAuth, studentAuth.logout_get);

module.exports = router;