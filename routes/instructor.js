const { Router } = require('express');
const instructorController = require('../controllers/instructorController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

router.post('/instructor/addClass', requireAuth, instructorController.addClass);
router.get('/instructor/classes', requireAuth, instructorController.getClasses);
router.put('/instructor/updateClass/:classId', requireAuth, instructorController.updateClass);
router.get('/instructor/deleteClass/:classId', requireAuth, instructorController.deleteClass);
router.get('/instructor/getStudents/:classId', requireAuth, instructorController.getStudents);
router.get('/instructor/removeStudent/:classId/:studentId/', requireAuth, instructorController.removeStudent);


module.exports = router;