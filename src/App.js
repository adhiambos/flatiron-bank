import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';

const TransactionApp = () => {
  const [transactions, setTransactions] = useState([
    {
      date: "2024-04-01",
      description: "cheque",
      category: "rent",
      amount: "5000",
    },
    {
      date: "2024-04-02",
      description: "uber ride",
      category: "transport",
      amount: "850",
    },
    {
      date: "2024-04-03",
      description: "salon",
      category: "beauty",
      amount: "2500",
    },
  ]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <h1>Bank Transactions</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default TransactionApp;