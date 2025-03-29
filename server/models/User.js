import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ timestamps: true }
);

// 🔹 Hash password before saving to DB
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next(); // Skip if password is unchanged

	const salt = await bcrypt.genSalt(10); // Generate salt
	this.password = await bcrypt.hash(this.password, salt); // Hash password
	next();
});

const User = mongoose.model("User", userSchema);

export default User;
