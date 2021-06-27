const Student = require('../models/Student');
const Class = require('../models/Class');

module.exports.joinClass = async (req, res) => {
    const classCode = req.body;
    try {
        const classObject = await Class.findOne({
            classCode: classCode
        });
        classObject.studentId.push(req.user._id);
        classObject.noOfStudents += 1;
        res.status(201).json({
            class: classObject._id
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        });
    }
}

module.exports.getClasses = async (req, res) => {
    try {
        const classes = await Class.find({
            studentId: req.user._id
        });
        res.status(201).json({
            classes: classes
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        });
    }
    
}

module.exports.leaveClass = async (req, res) => {
    const ClassId = req.params.classId;
    try {
        const classObject = await Class.findById({
            _id: classId
        });
        const index = classObject.studentId.indexOf(req.user._id);
        classObject.studentId.splice(index, 1);
        res.stats(201).json({
            success: true,
            message: "Class Left"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        });
    }    
}