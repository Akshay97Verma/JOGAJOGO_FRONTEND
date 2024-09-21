import { useHistory } from 'react-router-dom';

const handleLogout = () => {
  // Clear user session or token
  history.push('/login');
};
