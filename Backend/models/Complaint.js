// const mongoose = require("mongoose");

// // Dynamically import nanoid in an async function
// let nanoid;

// async function initialize() {
//   const { nanoid: nanoidFn } = await import("nanoid");
//   nanoid = nanoidFn;
// }

// // Initialize the nanoid function asynchronously
// initialize();

// const ComplaintSchema = new mongoose.Schema({
//   complaintId: {
//     type: String,
//     default: () => nanoid(8), // Generate exactly 8 characters
//     unique: true
//   },
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   contact: { type: String, required: true },
//   address: { type: String, required: true },
//   complaint: { type: String, required: true },
//   imageUrl: { type: String, default: "" },
//   createdAt: { type: Date, default: Date.now },
// });

// // Export the model
// const Complaint = mongoose.models.Complaint || mongoose.model("Complaint", ComplaintSchema);

// module.exports = Complaint;
const mongoose = require("mongoose");

// Function to generate a 10-digit numeric ID
const generateNumericId = () => {
  return Math.floor(Math.random() * 10000000000); // Generates a number between 0 and 9999999999
};

const ComplaintSchema = new mongoose.Schema({
  complaintId: {
    type: Number,
    default: generateNumericId, // Generate a 10-digit numeric ID
    unique: true
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  complaint: { type: String, required: true },
  imageUrl: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

// Export the model
const Complaint = mongoose.models.Complaint || mongoose.model("Complaint", ComplaintSchema);

module.exports = Complaint;
