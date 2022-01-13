const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  lastname: {
    type: String,
    required: [true, "Last name is required"],
    default: "",
  },
  firstname: {
    type: String,
    required: [true, "First name is required"],
    default: "",
  },
  middlename: {
    type: String,
    default: "",
  },
  suffix: {
    type: String,
    default: "",
  },
  sex: {
    type: String,
    required: [true, "Sex is required"],
    default: "",
  },
  birthday: {
    type: String,
    required: [true, "Birthday is required"],
    default: "",
  },
  houseNo: {
    type: String,
    required: [true, "House no is required"],
    default: "",
  },
  barangay: {
    type: String,
    required: [true, "Barangay is required"],
    default: "",
  },
  city: {
    type: String,
    required: [true, "City or Municipality is required"],
    default: "",
  },
  province: {
    type: String,
    required: [true, "Province is required"],
    default: "",
  },
  zip: {
    type: Number,
    required: [true, "Zip is required"],
    default: 0,
  },
  region: {
    type: String,
    required: [true, "Region is required"],
    default: "",
  },
  role: {
    type: String,
    enum: ["Applicant", "Citizen", "Administrator", "Super Administrator"],
    default: "Applicant",
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    default: "",
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
    select: false,
    default: "",
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true
  }
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre(/^find/, function(next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.pre('save', function(next) {
  if(!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp;
  }
  // False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  console.log({resetToken}, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; //10minutes

  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
