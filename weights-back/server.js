const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 6003;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  const { gender, age, weight, height, activity, goal } = req.body;

  let maintenanceCalories = 0;
  if (gender === 'male') {
    maintenanceCalories = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    maintenanceCalories = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
  };

  maintenanceCalories *= activityMultipliers[activity] || 1.2;

  let resultCalories = maintenanceCalories;
  if (goal === 'lose') resultCalories -= 500;
  else if (goal === 'gain') resultCalories += 500;

  res.json({ maintenanceCalories, resultCalories });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
