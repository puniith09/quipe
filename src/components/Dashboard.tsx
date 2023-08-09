import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../types/user';
import { auth } from '../services/auth';
import '../styles/dashboard.css';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        history.push('/login');
      }
    });

    return () => unsubscribe();
  }, [history]);

  const handleLogout = async () => {
    await auth.signOut();
    history.push('/login');
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {user?.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;