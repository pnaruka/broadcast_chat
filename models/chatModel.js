const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        message:{
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

chatSchema.statics.addMsg = async function(msg){
    if(!msg.username || !msg.message)
    throw Error('All field are required');

    const newMsg = await this.create({
        username: msg.username,
        message: msg.message
    });
    return newMsg;
}

chatSchema.statics.getAllMsg = async function(){
    const messages = await this.find({}).exec();
    if(!messages)
    throw Error('No messages');

    return messages;
}