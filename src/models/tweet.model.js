import mongoose, {Schema} from "mongoose";
  const tweetSchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    contet:{
        type: String,
        required: true
    }
  })


  export const Tweet= mongoose.model("Tweet",tweetSchema)