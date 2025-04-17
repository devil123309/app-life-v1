import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodType: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String }, // ✅ Optional and no constraints
});

const DonorModel = mongoose.model('Donor', donorSchema);
export default DonorModel;
