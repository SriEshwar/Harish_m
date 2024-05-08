const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/aspire';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('aspire')
        const collection = db.collection('employee')
        console.log('Connected to MongoDB successfully');
        const cursor = collection.find({})

 

        await cursor.forEach(record=>{
            console.log(record)
        })
        
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function insertData(){
    try {
        await client.connect();
        const db = client.db('aspire')
        const collection = db.collection('employee')
        await collection.insertOne({ id: 1,
            firstname: 'Ram',
            lastname: 'M',
            gender: 'Male',
            email: 'ram.m@gmail.com',
            salary: 20000,
            department: { name: 'UI/UX' } })    
        console.log("Record inserted")
    }catch(error){
        console.error(error);
    }
}

async function updateOne(){
    try {
        await client.connect();
        const db = client.db('aspire')
        const collection = db.collection('employee')
        await collection.updateOne({ id: 1}, { $set: { email: "harishm@gmail.com"} })    
        console.log("Record Updated")
    }catch(error){
        console.error(error);
    }
}


async function deleteMany(){
    try {
        await client.connect();
        const db = client.db('aspire')
        const collection = db.collection('employee')
        await collection.deleteMany({ id: 4})    
        console.log("Record Deleted")
    }catch(error){
        console.error(error);
    }
}



// Call the function to connect
connectToMongoDB();
//updateOne();

//deleteMany();


