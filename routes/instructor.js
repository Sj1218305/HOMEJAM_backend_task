const { Router } = require('express');
const instructorController = require('../controllers/instructorController');

const router = Router();

router.post('/instructor/addClass', instructorController.addClass);
router.get('/instructor/classes', instructorController.getClasses);
router.put('/instructor/updateClass/:classId', instructorController.updateClass);
router.get('/instructor/deleteClass/:classId', instructorController.deleteClass);

module.exports = router;