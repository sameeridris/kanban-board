import { useState, FormEvent, ChangeEvent } from "react";
import {Link} from 'react-router-dom';
import Auth from '../utils/auth';
import {signUp} from '../api/authAPI';

const SignUp = () => {
  const [signupData, setsignUp] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setsignUp({
      ...signupData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await signUp(signupData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label >Username</label>
        <input 
          type='text'
          name='username'
          value={signupData.username || ''}
          onChange={handleChange}
        />
      <label>Password</label>
        <input 
          type='password'
          name='password'
          value={signupData.password || ''}
          onChange={handleChange}
        />
        <button type='submit'>Submit Form</button>
        <Link to='/login'>Login</Link>
      </form>
    </div>
    
  )
};

export default SignUp;