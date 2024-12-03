// lib/mongodb.js
import { MongoClient } from "mongodb";

// Use a connection string from your MongoDB cluster (e.g., MongoDB Atlas or a local MongoDB instance)
const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so the MongoClient is not constantly re-initialized when the server is hot-reloaded
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = MongoClient.connect(uri, options);
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's safe to not use global variables
  clientPromise = MongoClient.connect(uri, options);
}

export default clientPromise;
