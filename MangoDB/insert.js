// Title - Insert Data using insertOne and insertMany operations
// Author - Bharath S
// Created Date - 13/05/2024

const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/aspire';

const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();  

        const db = client.db('test');
        const collection = db.collection('Employees');

        const cursor = collection.find({});
        await cursor.forEach(record => {
            console.log(record);
        });

        //insertOne
        const ackResult = await collection.insertOne({
            _id: 6,
            firstName: 'sunder',
            lastName: 'raj',
            gender: 'male',
            email: 'sunderraj@abc.com',
            salary: 60000,
            department: { name: 'Finance' }
        });

        console.log("The record inserted into the collection with ID: " + ackResult.insertedId);
 
 
        //insertMany      
        const manyDocumentsToInsert = [
            {
                _id: 7,
                firstName: 'hema',
                lastName: 'raja',
                gender: 'female',
                email: 'hemaraja@gmail.com',
                salary: 60000,
                department: { name: 'Tester' }
            },
            {
                _id: 8,
                firstName: 'hari',
                lastName: 'haran',
                gender: 'male',
                email: 'hariharan@gmail.com',
                salary: 70000,
                department: { name: 'TN' }
            }
        ];

        const manyAckResult = await collection.insertMany(manyDocumentsToInsert);
        console.log("The " + manyAckResult.insertedCount + " records inserted into the collection");

        await client.close();

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();