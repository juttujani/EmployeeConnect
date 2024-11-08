const User = require("../model/Usermodel");

const createUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newUser = new User({
            name,
            email,
            phone,
        });
        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
};

const getAllEmployees = async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json({message:"All users fetched succesfully", users: users});
    }catch(err){
        res.status(500).json({ message:err.message});
    }
}

const getEmployeeById = async (req, res) => {
    try{
        const id = req.params.id;
        const employee = await User.findOne({_id:id});
        if(!employee){
            res.status(500).json({message:"user not found"})
        }
        res.status(200).json({message:"user found",user: employee});
    }catch(err){
        console.log(err);
        
    }
}

const updateEmployee = async (req, res) => {
    try {
      const id = req.params.id;
      const employee = await User.findOne({ _id: id });
      if (!employee) {
        return res.status(404).json({ message: "User not found" });
      }
      const updateuser = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(updateuser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error updating user" });
    }
  };

const deleteEmployee = async (req, res)=> {
    try{
        const id = req.params.id;
        const employee = await User.findOne({_id:id})
        if(!employee){
            return res.status(404).json({message:"user not found"})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"user deleted succesfully"})
    }catch(err){
        console.log(err);
        
    }
}

module.exports = { createUser, getAllEmployees ,getEmployeeById,updateEmployee,deleteEmployee };
