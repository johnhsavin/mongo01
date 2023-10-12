import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";

const theFish = {
    species: "tetra",
    origin: "Amazon",
    color: "silver",
    size: "1\"",
    family: {
        dad: "🐡", mom: "🐟", sister: "🐳", brother: "🐋"}
    }
// add a fish 
export async function addAFish() {
const fishAdded = await db.collection("fish").insertOne(theFish);
console.log("fishAdded ->", fishAdded)
}

// get all fish

export async function getAllFish() {
    const fishList = await db.collection("fish").find({}).toArray();
    console.table(fishList);
}

// delete  a fish
export async function deleteOneFish() {
    // find the fish we want to delete.
    // delete it.
    const fishDeleted = await db.collection("fish").findOneAndDelete({species: "cichlid"})
    console.log("fishDeleted ->", fishDeleted)
}

// delete a fish by ID?

export async function deleteFishByID(){
    // find the fish by ID
    // delete found fish!
    const myFishId = new ObjectId("65283e5d9f7d9b578d2df894")
    const fishId = await db.collection("fish").findOneAndDelete({_id: myFishId})
    console.log("fishID ->", fishId)
}

// update fish

export async function updateOneFish() {
    // find fish to update 
    // determine property to update
    // find item to update
    // update the fish!
const updatedId = new ObjectId("652847b56a6d90115cd5061d")
const updateData = { color: "red"}
    const fishUpdate = await db.collection("fish").findOneAndUpdate({ _id: "updatedId"}, {$set: updateData})
console.log(fishUpdate)
}