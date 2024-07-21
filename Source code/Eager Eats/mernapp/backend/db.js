const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://eagereats:6600@cluster0.jsndnco.mongodb.net/eagereatsmern?retryWrites=true&w=majority&appName=Cluster0';
const mongoURI = 'mongodb://eagereats:6600@ac-xqyxgpk-shard-00-00.jsndnco.mongodb.net:27017,ac-xqyxgpk-shard-00-01.jsndnco.mongodb.net:27017,ac-xqyxgpk-shard-00-02.jsndnco.mongodb.net:27017/eagereatsmern?replicaSet=atlas-xbbfoj-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("food_items");
        let data = await fetched_data.find({}).toArray();
        const foodCategory =await mongoose.connection.db.collection("foodCategory");
        let catData =await foodCategory.find({}).toArray();

        global.food_items = data;
        global.foodCategory=catData;
    } catch (err) {
        console.log("---" + err);
    }
}

module.exports = mongoDB;
