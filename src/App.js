import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionForm';
import TransactionForm from './components/TransactionTable';

const App = () => {
  const [transactions, setTransactions] = useState([
    // Your initial transactions
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  useEffect(() => {
    const filtered = filterTransactions(searchTerm);
    setFilteredTransactions(filtered);
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
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
