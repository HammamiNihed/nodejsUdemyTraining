const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://nihed:nihed@cluster0.96dnb.mongodb.net/taskdb?retryWrites=true&w=majority')
.then(()=>{
    console.log("DB connected Sucessfuly")
})
.catch((error)=>{
    console.log("Error occured while DB connection", error)
});

module.exports = mongoose;