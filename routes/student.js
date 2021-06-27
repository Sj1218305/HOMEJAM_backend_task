const { Router } = require('express');
const studentController = require('../controllers/studentController');

const router = Router();

router.post('/student/joinClass', studentController.joinClass);
router.get('/student/classes', studentController.getClasses);

module.exports = router;