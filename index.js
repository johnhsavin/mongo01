import { closeClient } from "./src/connectDb.js";
import { addAFish, getAllFish } from "./src/fish.js";

await addAFish();
await getAllFish();
closeClient();