const Student = require('../models/Student');

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('student validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}


module.exports.signup_get = (req, res) => {
  res.send('signup');
}

module.exports.login_get = (req, res) => {
  res.send('login');
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try{
  	const user = await Student.create({email,password});
  	res.status(201).json(user);
  }
  catch(err){
  	const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.login_post = async (req, res) => {
  res.send('user login');
}
