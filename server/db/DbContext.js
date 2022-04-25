import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { CarSchema } from '../models/Car.js'
import { CommentSchema } from '../models/Comment.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Cars = mongoose.model('Car', CarSchema);
  // Houses = mongoose.model('House', HouseSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
