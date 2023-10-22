
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
    
    
  
  

    var retiredYearlyIncome = totalSaved / retirementLength;
    var incomeTaxesToPay;
    var amtInBracket;
    if (retiredYearlyIncome > 578125) {
        amtInBracket = retiredYearlyIncome - 578125;
        incomeTaxesToPay += (amtInBracket) * 0.37;
        retiredYearlyIncome -= amtInBracket;
    }
    if (retiredYearlyIncome > 231251) {
      amtInBracket = retiredYearlyIncome - 231251;
      incomeTaxesToPay += (amtInBracket) * 0.35;
      retiredYearlyIncome -= amtInBracket;
    }
    if (retiredYearlyIncome > 182101) {
      amtInBracket = retiredYearlyIncome - 182101;
      incomeTaxesToPay += (amtInBracket) * 0.32;
      retiredYearlyIncome -= amtInBracket;
    }
    if (retiredYearlyIncome > 95376) {
      amtInBracket = retiredYearlyIncome - 95376;
      incomeTaxesToPay += (amtInBracket) * 0.24;
      retiredYearlyIncome -= amtInBracket;
    }
    if (retiredYearlyIncome > 44726) {
      amtInBracket = retiredYearlyIncome - 44726;
      incomeTaxesToPay += (amtInBracket) * 0.22;
      retiredYearlyIncome -= amtInBracket;
    }
    if (retiredYearlyIncome > 11001) {
      amtInBracket = retiredYearlyIncome - 11001;
      incomeTaxesToPay += (amtInBracket) * 0.12;
      retiredYearlyIncome -= amtInBracket;
    }

    incomeTaxesToPay += (amtInBracket) * 0.10;
    retiredYearlyIncome -= amtInBracket;

    totalSaved -= incomeTaxesToPay;





    totalSaved += totInvestments;
});