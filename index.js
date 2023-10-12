import { closeClient } from "./src/connectDb.js";
import { addAFish, getAllFish, deleteOneFish, deleteFishByID, updateOneFish} from "./src/fish.js";

await addAFish();
await getAllFish();
await deleteOneFish();
await deleteFishByID();
await updateOneFish();
closeClient();