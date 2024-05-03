import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable'; // Ensure this import matches the actual file name
import TransactionForm from './components/TransactionForm'; // Ensure this import matches the actual file name

const App = () => {
  const [transactions, setTransactions] = useState([
    // Your initial transactions
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filterTransactions = (searchTerm) => {
    if (!searchTerm) {
      return transactions;
    }
    return transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    const filteredTransactions = filterTransactions(searchTerm);
    setTransactions(filteredTransactions); // Update the state with filtered transactions
  }, [searchTerm]);

  return (
    <div>
      <h1>Bank Transactions</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionTable transactions={transactions} /> {/* Pass the filtered transactions here */}
    </div>
  );
};

export default App;
