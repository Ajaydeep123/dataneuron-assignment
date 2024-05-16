import mongoose, {Schema} from "mongoose";

const countSchema = new Schema(
    {
    addCount: {
        type: Number,
        default: 0
    },
    updateCount: {
        type: Number,
        default: 0
    }
})

export const Count = mongoose.model("Count", countSchema)
