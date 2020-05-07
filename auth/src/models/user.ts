import mongoose from 'mongoose';

// Interface that describes what properties a User has
interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

interface UserAttrs {
  email: string;
  password: string;
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
