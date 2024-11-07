const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    books : [
        {
            status: { type: String, required: true },
            id: { type: Schema.Types.ObjectId, ref: 'book', required: true }
        }
    ],
    requestHistory:[
         {
            completed: {type:book,default:false},
            requestedBy:{type: Schema.Types.ObjectId, ref: 'user'},
            message:{type:String}
         }
    ]
})

const UserModel = model('Users', UserSchema);
module.exports = UserModel; 