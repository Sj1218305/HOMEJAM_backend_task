const { Router } = require('express');
const studentController = require('../controllers/studentController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

router.post('/student/joinClass', requireAuth, studentController.joinClass);
router.get('/student/classes', requireAuth, studentController.getClasses);
router.get('/student/leaveClass/:classId', requireAuth, studentController.leaveClass);

module.exports = router;