const mongoose = require('mongoose');

const schema = mongoose.Schema;

const classSchema = new schema({
	title:{
		type: String,
	    required: [true, 'Please enter a title']
	},
	metaData: {
		type: String
	},
	subject: {
		type: String
	},
	classCode: {
		type: String,
		unique: true
	},
	classTeacherId:{
		type: schema.Types.ObjectId,
		required: true,
		ref: 'instructor'
	},
	startDate: {
		default: new Date().toJSON().slice(0,10),
		type:Date
	},
	endDate: {
		type: Date
	},
	duration: {
		type: Number
	},
	studentId: [{
		type: schema.Types.ObjectId,
		ref: 'student'
	}],
	noOfStudents: {
		default: 0,
		type: Number
	}
})

classSchema.pre('save', async function(next) {
  this.classCode = Math.random().toString(36).slice(2);
  next();
});


const Class = mongoose.model('class', classSchema);

module.exports = Class;