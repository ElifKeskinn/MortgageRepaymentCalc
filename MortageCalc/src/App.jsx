import './App.css';
import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Results from './components/Results';
import ClearButton from './components/ClearButton';

function App() {
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageType, setMortgageType] = useState('Repayment');
  const [monthlyRepayment, setMonthlyRepayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);

  const handleCalculate = ({ mortgageAmount, mortgageTerm, interestRate, mortgageType }) => {
    if (!mortgageAmount || !mortgageTerm || !interestRate || !mortgageType) {
      alert('Please fill in all fields.');
      return;
    }

    const P = parseFloat(mortgageAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(mortgageTerm) * 12;

    const repayment =
      mortgageType === 'Repayment'
        ? (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        : P * r * n;

    const total =
      mortgageType === 'Repayment' ? repayment * n : P + repayment;

    setMonthlyRepayment(repayment.toFixed(2));
    setTotalRepayment(total.toFixed(2));
  };

  const handleClear = () => {
    setMortgageAmount('');
    setMortgageTerm('');
    setInterestRate('');
    setMortgageType('Repayment');
    setMonthlyRepayment(null);
    setTotalRepayment(null);
  };

  return (
    <div className="mortgage-calculator">
      <div className="calculator-container">
        <h2>Mortgage Calculator</h2>
        <ClearButton onClear={handleClear} />
        <Calculator 
          mortgageAmount={mortgageAmount}
          setMortgageAmount={setMortgageAmount}
          mortgageTerm={mortgageTerm}
          setMortgageTerm={setMortgageTerm}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          onCalculate={handleCalculate}
        />
      </div>
      <Results
        monthlyRepayment={monthlyRepayment}
        totalRepayment={totalRepayment}
      />
    </div>
  );
}

export default App;
