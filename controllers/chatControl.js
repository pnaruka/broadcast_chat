const { chatModel } = require("../models/chatModel");

const createChat = async(req, res)=>{
    try{
        const msg = req.body;

        const newMsg = await chatModel.addMsg(msg);
        res.status(201).json(newMsg);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
};

const getChat = async(req, res)=>{
    try {
        const messages = await chatModel.getAllMsg();
        res.status(200).json({messages});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createChat,
    getChat
}