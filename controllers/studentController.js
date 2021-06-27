const Student = require('../models/Student');
const Class = require('../models/Class');

module.exports.joinClass = async(req,res)=> {
	const classCode = req.body;
	try{
		const classObject = await Class.findOne({classCode: classCode});
		classObject.studentId.push(req.user._id);
		classObject.noOfStudents +=1;
		res.status(201).json({class: classObject._id});
	}
	catch(err){
		const errors = handleErrors(err);
		res.status(400).json({errors});
	}
}

module.exports.getClasses = async(req,res) => {
	try{
		const classes = await Class.find({studentId: req.user._id});
		res.status(201).json({classes: classes});
	}
	catch(err){
		const errors = handleErrors(err);
	    res.status(400).json({ errors });
	}
}
