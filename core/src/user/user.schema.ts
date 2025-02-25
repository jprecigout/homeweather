import { Schema } from 'mongoose';
import { User } from './user.interface';
import * as bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

export const UserSchema = new Schema({
  username: String,
  password: String,
});

UserSchema.pre<User>('save', function(next) {
  const user = this as User;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = async (candidatePassword, password) => {
  return bcrypt.compare(candidatePassword, password);
};

// UserSchema.methods.generateHash = password => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_WORK_FACTOR));
// };

// UserSchema.methods.isPasswordValid = password => {
//   return bcrypt.compareSync(password, this.local.password);
// };

// // Omit the password when returning a user
// UserSchema.set('toJSON', {
//   transform: function(doc, ret) {
//     delete ret.local.password;
//     return ret;
//   },
// });
