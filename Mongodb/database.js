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
        const cursor = collection.find({})

        const insertion = await collection.insertOne({
            id: 1,
  firstname: 'Ram',
  lastname: 'M',
  gender: 'Male',
  email: 'ram.m@gmail.com',
  salary: 20000,
  department: { name: 'UI/UX' }

        })

        console.log("the record inserted into the colection with "+ insertion.insertedId)

        await cursor.forEach(record=>{
            console.log(record)
        })
        await client.close()
        //console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();