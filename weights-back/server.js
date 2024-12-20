const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 6003;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  console.log('Received request:', req.body); // Add this line for logging
  const { gender, age, weight, height, activity, goal } = req.body;

  // Simple calorie calculation logic
  let maintenanceCalories = 0;
  if (gender === 'male') {
    maintenanceCalories = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    maintenanceCalories = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  let activityMultiplier = 1.2;
  if (activity === 'light') activityMultiplier = 1.375;
  else if (activity === 'moderate') activityMultiplier = 1.55;
  else if (activity === 'active') activityMultiplier = 1.725;

  maintenanceCalories *= activityMultiplier;

  let resultCalories = maintenanceCalories;
  if (goal === 'lose') resultCalories -= 500;
  else if (goal === 'gain') resultCalories += 500;

  res.json({ maintenanceCalories, resultCalories });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
