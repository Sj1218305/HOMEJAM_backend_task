const Instructor = require('../models/Instructor');
const Class = require('../models/Class');

module.exports.addClass = async(req,res) => {
	const { title,metaData,subject } = req.body;
	//ASSUMPTION: The front-end will be sending user data to the server on every request
	const {classTeacherId} = req.user._id;
	try{
		const classObject = await Class.create({title,metaData,subject,classTeacherId});
		res.status(201).json({class: classObject._id});
	}
	catch(err){
	  	const errors = handleErrors(err);
	    res.status(400).json({ errors });
  }

}

module.exports.getClasses = async(req,res) => {
	try{
		const classes = await Class.find({classTeacherId: req.user._id});
		res.status(201).json({classes: classes});
	}
	catch(err){
		const errors = handleErrors(err);
	    res.status(400).json({ errors });
	}
}

module.exports.updateClass = async(req,res) => {
	const classId = req.params.classId;
	const changes = JSON.parse(req.body.data);
	try{
	const classObject = await Class.findOneAndUpdate({_id:classId},changes,{new: true});
	res.status(201).json({class: classObject._id});
	}	
	catch(err){
		const errors = handleErrors(err);
	    res.status(400).json({ errors });
	}
}

module.exports.deleteClass = async(req,res) => {
	const classId = req.params.classId;
	try{
		Class.findByIdAndDelete({_id: classId})
		res.stats(201).json({
			success: true,
			message: "Class Deleted"
		});
	}catch(err){
		const errors = handleErrors(err);
	    res.status(400).json({ errors });
	}
}
