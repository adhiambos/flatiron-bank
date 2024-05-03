const [searchTerm, setSearchTerm] = useState('');

const filterTransactions = (searchTerm) => {
  if (!searchTerm) {
    return transactions;
  }
  return transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
