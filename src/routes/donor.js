import express from 'express';
import donor from '../models/donor.js'; // Adjust path if needed

const router = express.Router();


app.get('/donor', async (req, res) => {
  const { bloodType, state, city } = req.query; // Get search criteria from query params

  try {
    const searchCriteria = {};
    
    if (bloodType) searchCriteria.bloodType = bloodType;
    if (state) searchCriteria.state = state;
    if (city) searchCriteria.city = city;

    // Fetch donors based on search criteria
    const donors = await DonorModel.find(searchCriteria);
    if (donors.length === 0) {
      return res.status(404).json({ message: 'No donors found' });
    }

    res.status(200).json(donors);  // Return donors found in the search
  } catch (err) {
    console.error('Error fetching donors:', err);
    res.status(500).json({ message: 'Error fetching donors' });
  }
});


export default router;
