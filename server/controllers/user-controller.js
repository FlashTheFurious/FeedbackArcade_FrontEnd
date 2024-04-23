const User = require('../models/user-schema');

// Register a new user
exports.register = async (req, res) => {
    try {
        const { full_name, email,password } = req.body;
        console.log(req.body, "body")

        const hash = await User.generateHash(password);
        const newUser = new User({ full_name, email, password: hash });
    
        await newUser.save();
        req.session.account = User.toAPI(newUser);
        
        return res.status(201).json({ redirect: '/login' });

    } catch (error) {

        console.error(error.message);
        res.status(500).send(error.message);
    }
};

// Controller to handle user login
exports.login = async (req, res) => {
    try {
        console.log(req.body, "body");
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
          }

          const user = await User.authenticate(email, password);
          req.session.account = User.toAPI(user);
          return res.json({ redirect: '/dashboard' });

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};