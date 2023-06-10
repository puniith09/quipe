import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        // Get the connected user's account address
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error fetching account:', error);
      }
    };

    fetchAccount();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Connected Account: {account}</p>
      {/* Add additional dashboard content here */}
    </div>
  );
};

export default Dashboard;
