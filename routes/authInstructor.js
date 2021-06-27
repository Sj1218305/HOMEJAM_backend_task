const { Router } = require('express');
const instructorAuth = require('../controllers/instructorAuth');

const router = Router();

// router.get('/signup/tourist', instructorAuth.signup_get);
router.post('/signup/instructor', instructorAuth.signup_post);
// router.get('/login/tourist', instructorAuth.login_get);
router.post('/login/instructor', instructorAuth.login_post);
router.get('/instructor/logout', instructorAuth.logout_get);

module.exports = router;