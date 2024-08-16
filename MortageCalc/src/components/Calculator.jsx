import React from 'react';
//burayı bir türlü use state ile yapamadım
/*

const Calculator = ({ onCalculate }) => {
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageType, setMortgageType] = useState('Repayment');
  bunu kullandığımda inputları silemiyorum o yüzden böyle bırakıcam burayı
  
*/
const Calculator = ({
  mortgageAmount,
  setMortgageAmount,
  mortgageTerm,
  setMortgageTerm,
  interestRate,
  setInterestRate,
  mortgageType,
  setMortgageType,
  onCalculate
}) => {
  
  const handleCalculate = () => {
    if (!mortgageAmount || !mortgageTerm || !interestRate || !mortgageType) {
      alert('Please fill in all fields.');
      return;
    }

    onCalculate({
      mortgageAmount,
      mortgageTerm,
      interestRate,
      mortgageType,
    });
  };

  return (
    <div className="calculator">
      <div>
        <label>
          Mortgage Amount
          <input
            type="number"
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
            required
          />{' '}
          £
        </label>
      </div>
      <div>
        <label>
          Mortgage Term
          <input
            type="number"
            value={mortgageTerm}
            onChange={(e) => setMortgageTerm(e.target.value)}
            required
          />{' '}
          years
        </label>
      </div>
      <div>
        <label>
          Interest Rate
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />{' '}
          %
        </label>
      </div>
      <div>
        <label>
          Mortgage Type
          <div>
            <input
              type="radio"
              value="Repayment"
              checked={mortgageType === 'Repayment'}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            Repayment
            <input
              type="radio"
              value="Interest Only"
              checked={mortgageType === 'Interest Only'}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            Interest Only
          </div>
        </label>
      </div>
      <button onClick={handleCalculate}>
        <i className="fa-solid fa-calculator"></i>
        Calculate Repayments
      </button>
    </div>
  );
};

export default Calculator;
