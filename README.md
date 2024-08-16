# Mortgage Calculator

This project provides a web application for users to calculate mortgage payments. Users can enter the mortgage amount, term, and interest rate to compute monthly payments and total repayment amounts.

## Features

- Enter mortgage amount and term to calculate payments.
- Choose interest rate and mortgage type (Repayment or Interest Only).
- Displays calculation results.
- Option to clear the entire form.

## Technologies

- **React**: For building the user interface.
- **CSS**: For styling and layout.

## Installation

1. Open a terminal and navigate to the root directory of your project.

2. Clone or download the project:

    ```bash
    git clone https://github.com/ElifKeskinn/MortgageRepaymentCalc.git
    cd mortgage-calculator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

   This command will launch your application on a local development server, and you can access it in your browser at `http://localhost:3000`.

## Usage

1. Enter the mortgage amount, term, and interest rate.
2. Select the mortgage type (Repayment or Interest Only).
3. Click the "Calculate Repayments" button.
4. Results will be displayed below.
5. Click the "Clear All" button to reset the form.

## File Structure

- `src/` - Application source code.
  - `components/` - React components.
    - `Calculator.jsx` - Mortgage calculation form component.
    - `ClearButton.jsx` - Component for clearing the form.
    - `Results.jsx` - Component for displaying calculation results.
  - `App.jsx` - Main application component.
  - `App.css` - Application styling.
- `public/` - Static files (e.g., images).

## Contributors

- Elif Keskin - Project owner and main developer.


