const User = require('../Models/UserModel'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const login = async ({ email, password, userType }) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("email not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        if (user.userType != userType) {
            throw new Error("Unauthorized user type");
        }

        const token = jwt.sign({ id: user._id, email: user.email, userType: user.UserType }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { message: "Login successful", token };
    } catch (error) {
        throw new Error(error.message);
    }
};

const addUser = async (data) => {
    try {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = new User({ ...data, password: hashedPassword });
        await user.save();
        return { message: "User created successfully", user };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {login, addUser};