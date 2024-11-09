import React, {useState} from 'react'
import logo from './images/logo3.png';
import './App.css';

function App() {

  const [values, setValues] = useState();
  console.log(values);
  const handleChangedValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const handleClickButton = () => {
    console.log(values);
  }

  return (
    <div className='app-container'>
      <div className='register-container'>
        <img src={logo} className='logo' alt='logo da book bridge'/>
        <h1 className='register-title'>Cadastro</h1>
        <input
          type='text'
          name='name'
          placeholder='Nome'
          className='register-input'
          onChange={handleChangedValues}
        />
        <input
          type='text'
          name='username'
          placeholder='Nome de usuário'
          className='register-input'
          onChange={handleChangedValues}
        />
        <input
          type='text'
          name='email'
          placeholder='E-mail'
          className='register-input'
          onChange={handleChangedValues}
        />
        <input
          type='text'
          name='password'
          placeholder='Senha'
          className='register-input'
          onChange={handleChangedValues}
        />
        <button className='register-button' onClick={() => handleClickButton}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
