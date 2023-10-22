
const express = require('express');
const app = express();
const port = 4000;

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

app.use(express.json());

app.post('/api/401k', (req, res) => {
    const { age, retireAge, costOfLiving, currSavings, totInvestments, 
            bankInterestRate, retirementLength, monthlyContribution, companyMatching } = req.body;

    const yearsWorking = retireAge-age;
    const moneyNeeded = costOfLiving * 12 * retirementLength;
    var totalSaved = currentSavings;
    for (var i = 0; i < yearsWorking; i++) {
        totalSaved += (monthlyContribution + companyMatching) * 12;
        totalSaved *= (1 + bankInterestRate/100);
    }
    
    totalSaved += totInvestments;
    
});