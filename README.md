# 💰 Expense Tracker App

This is a simple and efficient **Expense Tracker** application built with **React**, **React-Redux**, and **Tailwind CSS**. The app helps users track their income and expenses, providing an overall balance that persists across page reloads. Users can easily add or delete transactions, assign a date to each transaction, and monitor their financial activity.

## 🚀 Features

- **Persistent Data**: The transactions and balance persist even after page reload.
- **Add Transactions**: Users can add both income and expense transactions, and specify the date on which the transaction occurred.
- **Delete Transactions**: Users can remove transactions to update their records.
- **Track Balance**: The overall balance is dynamically updated as transactions are added or deleted.
- **Income and Expense Summary**: Separate totals for income and expenses are displayed, providing clear insights into financial status.
- **Date of Transaction**: Users can assign a date for each transaction, enabling historical tracking of financial activities.

## 🛠️ Technologies Used

- **React**: For building the user interface.
- **React-Redux**: For state management, ensuring that transaction data persists across components and page reloads.
- **LocalStorage**: To persist data between page reloads.

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/expense-tracker-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd expense-tracker-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the app:
    ```bash
    npm start
    ```

The app will be accessible at `http://localhost:3000`.

## 📋 Usage

1. **Add Transaction**:
    - Enter a description, amount, and select a date for the transaction.
    - Positive amounts represent income, and negative amounts represent expenses.
    - Click on the "Add Transaction" button to submit.

2. **Delete Transaction**:
    - To remove a transaction, click the delete icon next to the entry.

3. **Check Balance**:
    - The balance, income, and expenses are displayed at the top, automatically updating with each transaction.

## 😁 Happy Learning