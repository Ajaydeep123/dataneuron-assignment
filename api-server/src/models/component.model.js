import mongoose, {Schema} from "mongoose";

const componentSchema = new Schema(
  {
    componentId: {
      type: String,
      required: true,
      unique: true
    },
    data: {
      type: String,
      required: true
    }
  }
)
export const Component = mongoose.model("Component", componentSchema)
