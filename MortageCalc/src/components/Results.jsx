import React from 'react';

const Results = ({ monthlyRepayment, totalRepayment }) => {
  return (
    <div className="results">
      {monthlyRepayment && totalRepayment ? (
        <div>
          <h3>Your results</h3>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate repayments”
            again.
          </p>
          <div className="results-container">
            <div className="results-box">
              <h4>Your Monthly Repayments</h4>
              <p className="monthly-repayment-amount">{`£${monthlyRepayment}`}</p>
              <hr className="divider" />
              <h4>Total you'll repay over the term</h4>
              <p className="total-repayment-amount">{`£${totalRepayment}`}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="results-placeholder">
          <img src="/public/calcM.png" alt="Calculator" />
          <h3>Results shown here</h3>
          <p>
          Complete the form and click “calculate repayments” to see what your monthly repayments would be.
          </p>
        </div>
      )}
    </div>
  );
};

export default Results;
