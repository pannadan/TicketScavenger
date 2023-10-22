
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
    const { age, retireAge, costOfLiving, currSavings, totInvestments, bankInterestRate, 
        retirementLength, monthlyContribution, companyMatching, debt } = req.body;

    const yearsWorking = retireAge-age;
    const moneyNeeded = costOfLiving * 12 * retirementLength;
    var totalSaved = currSavings;
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

    incomeTaxesToPay += (retiredYearlyIncome) * 0.10;

    totalSaved -= incomeTaxesToPay*retirementLength;

    totalSaved += totInvestments - debt;

    var goodOrBadString;
    var isAbove;
    var optionsExplanation;
    var moreYearsString;
    var moreMoneyString;
    var disposableIncomeString;

    if (totalSaved < moneyNeeded) {
        goodOrBadString = "Unfortunately,\nyou are not on track to meet your retirement goals...\nYET!";
        isAbove = false;

        //Keep pay the same, find extra years you'd need to work

        var moneyToGo = moneyNeeded - totalSaved;
        var yearsToGo = 0;
        while (moneyToGo > 0) {
          moneyToGo -= monthlyContribution * 12;
          yearsToGo++;
        }

        //Keep working years the same, increase monthly contribution.

        
        var newMonthlyContribution = monthlyContribution;

        while (totalSaved < moneyNeeded) {
          newMonthlyContribution += 12;
          totalSaved = currSavings;
          for (var i = 0; i < yearsWorking; i++) {
              totalSaved += (newMonthlyContribution + companyMatching) * 12;
              totalSaved *= (1 + bankInterestRate/100);
          }

          retiredYearlyIncome = totalSaved / retirementLength;
          incomeTaxesToPay = 0;
          amtInBracket = 0;
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

          incomeTaxesToPay += (retiredYearlyIncome) * 0.10;

          totalSaved -= incomeTaxesToPay*retirementLength;

          totalSaved += totInvestments - debt;
        }





        optionsExplanation = "Some options to reach your current retirement goals:";
        moreYearsString = "If you keep everything the \nsame, you can retire " + yearsToGo + " years\nlater at age " + (yearsToGo + retireAge);
        moreMoneyString = "If you can increase your monthly\ncontributions to" + newMonthlyContribution + " and still\nretire at " + retireAge + ".";

    } else {
        goodOrBadString = "Congratulations!\nYou are on track to meet your retirement goals!";
        isAbove = true;
        disposableIncomeString = "You will have $" + ((totalSaved - moneyNeeded) / (retirementLength * 12)) + " of disposable income\navailable to you each month."
    }


    
    //years to go should be how many more years you have to work.

    var yearlyCostLiving = costOfLiving * 12;
    


    const result = {
        isAbove,
        goodOrBadString,
        optionsExplanation,
        moreYearsString,
        moreMoneyString,
        disposableIncomeString
    }

    res.json(result);

});