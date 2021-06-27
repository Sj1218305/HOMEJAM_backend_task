const { Router } = require('express');
const studentAuth = require('../controllers/studentAuth');

const router = Router();

// router.get('/signup', studentAuth.signup_get);
router.post('/signup/student', studentAuth.signup_post);
// router.get('/login', studentAuth.login_get);
router.post('/login/student', studentAuth.login_post);
router.get('/student/logout', studentAuth.logout_get);

module.exports = router;