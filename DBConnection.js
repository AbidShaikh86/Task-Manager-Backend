const mongoose = require('mongoose')

function DBConnection(){
    const DB_URL = "mongodb+srv://abidshaikh86_db_user:FcXP8IuSekUmkVQz@todocluster.eenqn3n.mongodb.net/?appName=TodoCluster";

    mongoose.connect(DB_URL);

    const db = mongoose.connection;

    db.on("error",console.error.bind(console,"Connection Error!"))
    db.once("open",function(){
        console.log("DB Connected...");
        
    })
}

module.exports = DBConnection;
