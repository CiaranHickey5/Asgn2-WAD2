import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          value
        );
      },
      message: (props) =>
        `${props.value} is not a valid password! It must be at least 8 characters long and contain at least one letter, one digit, and one special character.`,
    },
  },
});

export default mongoose.model("User", UserSchema);
