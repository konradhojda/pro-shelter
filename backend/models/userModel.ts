import mongose, { Types } from "mongoose";

const userSchema = new mongose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: false }
  },
  {
    timestamps: true
  }
);

const accountsSchema = new mongose.Schema({
  userId: { type: Types.ObjectId, required: true }
});

const sessionSchema = new mongose.Schema({
  sessionToken: { type: String, required: true },
  userId: { type: Types.ObjectId, required: true },
  expires: {type: Date, required: true}
});

export const User = mongose.model("User", userSchema);
export const Accounts = mongose.model("accounts", accountsSchema);
export const Sessions = mongose.model("sessions", accountsSchema);
