import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';
import TransactionForm from './TransactionForm';

function App() {
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

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="app">
      <h1>Recent Bank Transactions</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <TransactionTable transactions={transactions.filter(transaction => transaction.description.toLowerCase().includes(searchTerm.toLowerCase()))} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
}

export default App;
