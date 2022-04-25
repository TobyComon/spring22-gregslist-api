import { Schema } from 'mongoose'
const Schema = mongoose.schema

export const CommentSchema = new Schema({
  body: { type: String, required: true },
  carId: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
{ timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
