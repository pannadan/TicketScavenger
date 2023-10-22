
const express = require('express');
const cors = require('cors')
const app = express();
const port = 4000;

app.use(cors())
app.use(express.json());

let data = { };

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

app.get('/api/getData', (req, res) => {
    res.json(data);
});

app.post('/api/401k', (req, res) => {
    const { age, retireAge, livingCost, savings, investments, apy, 
        yearsOfRet, monthlyCont, companyMatching, debt } = req.body;


    console.log(req.body);


    const yearsWorking = retireAge-age;
    const moneyNeeded = livingCost * 12 * yearsOfRet;
    var totalSaved = savings;
    console.log('years working' + yearsWorking);
    console.log((monthlyCont + companyMatching))
    for (var i = 0; i < parseInt(yearsWorking); i++) {
        console.log('totalSaved1:' + totalSaved);
        console.log(((parseInt(monthlyCont) + parseInt(companyMatching)) * 12));
        totalSaved = parseInt(totalSaved) + ((parseInt(monthlyCont) + parseInt(companyMatching)) * 12);
        console.log('totalSaved2:' + totalSaved);
        totalSaved = parseInt(totalSaved) * (1 + parseFloat(apy)/100);
        console.log('totalSaved3:' + totalSaved);
    }
    console.log('totalSaved:' + totalSaved);
    console.log(parseFloat(apy)/100);
    var retiredYearlyIncome = totalSaved / parseInt(yearsOfRet);
    var incomeTaxesToPay = 0;
    var amtInBracket = 0;
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

    totalSaved -= incomeTaxesToPay*parseInt(yearsOfRet);
    console.log('CHECK THIS' + totalSaved);
    console.log('years of ret: ' + parseInt(yearsOfRet));
    console.log(incomeTaxesToPay);
    totalSaved += investments - debt;

    console.log(totalSaved);
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
          moneyToGo -= monthlyCont * 12;
          yearsToGo++;
        }

        //Keep working years the same, increase monthly contribution.

        
        var newMonthlyContribution = monthlyCont;

        while (totalSaved < moneyNeeded) {
          newMonthlyContribution += 12;
          totalSaved = savings;
          for (var i = 0; i < yearsWorking; i++) {
              totalSaved += (newMonthlyContribution + companyMatching) * 12;
              totalSaved *= (1 + apy/100);
          }

          retiredYearlyIncome = totalSaved / yearsOfRet;
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

          totalSaved -= incomeTaxesToPay*yearsOfRet;

          totalSaved += investments - debt;
        }





        optionsExplanation = "Some options to reach your current retirement goals:";
        moreYearsString = "If you keep everything the \nsame, you can retire " + yearsToGo + " years\nlater at age " + (yearsToGo + retireAge);
        moreMoneyString = "If you can increase your monthly\ncontributions to" + newMonthlyContribution + " and still\nretire at " + retireAge + ".";

    } else {
        goodOrBadString = "Congratulations!\nYou are on track to meet your retirement goals!";
        isAbove = true;
        disposableIncomeString = "You will have $" + ((totalSaved - moneyNeeded) / parseFloat(yearsOfRet * 12)).toFixed(2) + " of disposable income\navailable to you each month."
    }

    console.log(moneyNeeded);
    console.log(yearsOfRet);
    
    //years to go should be how many more years you have to work.

    var yearlyCostLiving = livingCost * 12;
    


    const result = {
        isAbove,
        goodOrBadString,
        optionsExplanation,
        moreYearsString,
        moreMoneyString,
        disposableIncomeString
    }
    data = result;
    console.log(data);
});