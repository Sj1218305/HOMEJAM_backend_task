const Instructor = require('../models/Instructor');
const Class = require('../models/Class');
const Student = require('../models/Student');

module.exports.addClass = async (req, res) => {
    const {
        title,
        metaData,
        subject
    } = req.body;
    //ASSUMPTION: The front-end will be sending user data to the server on every request
    const {
        classTeacherId
    } = req.user._id;
    try {
        const classObject = await Class.create({
            title,
            metaData,
            subject,
            classTeacherId
        });
        res.status(201).json({
            class: classObject._id
        });
    } catch (error) {
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
            classTeacherId: req.user._id
        });
        res.status(201).json({
            classes: classes
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        });
    }
}

module.exports.updateClass = async (req, res) => {
    const classId = req.params.classId;
    const changes = JSON.parse(req.body.data);
    try {
        const classObject = await Class.findOneAndUpdate({
            _id: classId
        }, changes, {
            new: true
        });
        res.status(201).json({
            class: classObject._id
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        });
    }
}

module.exports.deleteClass = async (req, res) => {
    const classId = req.params.classId;
    try {
        Class.findByIdAndDelete({
            _id: classId
        })
        res.stats(201).json({
            success: true,
            message: "Class Deleted"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        });
    }
}

module.exports.getStudents = async (req, res) => {
    const classId = req.params.classId;
    try {
        const classObject = await Class.findById({
            _id: classId
        });
        let students = [];
        classObject.studentId.forEach((studentId) => {
            const Student = Student.findById({
                _id: studentId
            });
            students.push(Student.username);
        })
        res.status(201).json({
            students: students
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        });
    }
}

module.exports.removeStudent = async (req, res) => {
    const studentId = req.params.studentId;
    const classId = req.params.classId;
    try {
        const classObject = await Class.findById({
            _id: classId
        });
        const index = classObject.studentId.indexOf(studentId);
        classObject.studentId.splice(index, 1);
        res.stats(201).json({
            success: true,
            message: "Student Removed"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        });
    }
}