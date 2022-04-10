import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import FirebaseContext from '../context/firebase';

const Login = (props) => {
  // useHistory is replaced by useNavigate();
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - InstaClone';
  }, []);

  return <div className="text-3xl font-bold underline">Hello world!</div>;
};

export default Login;
