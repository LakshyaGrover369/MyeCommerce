const User  = require('../models/User')


const test = (req,res) =>{
    res.json('test is working');
}


const registerUser = async(req,res) => {
    console.log("hi entring register")
    try{
        const {name , email , password} = req.body;
        if(!name){
            return res.json({
                error : 'fill the name'
             })
        }
        if(password.length < 6)
            return res.json({
                error : "password should be greater that 6 letters"
        })
        const exist = await User.findOne({email});

        if(exist){
            res.json({
                error : "email already exist"
            })
        }

        const user =  await User.create({
            name , email , password
        })
        console.log(user)
;        return res.json({user});
    }
    catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ error: 'An error occurred while registering the user' });
    }
}


module.exports ={
    test,
    registerUser
}