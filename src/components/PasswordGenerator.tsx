// src/components/PasswordGenerator.tsx

import React, { useState } from 'react';
import './PasswordGenerator.css';
import logo from '../assets/logo.svg'; // Import the logo

const PasswordGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [passwords, setPasswords] = useState<string[]>([]);

  const generatePasswords = (input: string) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&/()=?';
    const passwords: string[] = [];

    for (let i = 0; i < 10; i++) {
      let password = '';
      for (let j = 0; j < 12; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
      passwords.push(password);
    }

    setPasswords(passwords);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleGenerateClick = () => {
    generatePasswords(input);
  };

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" /> {/* Add the logo */}
        <h1>Generador de Contraseñas</h1>
      </div>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Escribe una palabra"
        />
        <button onClick={handleGenerateClick}>Generar contraseñas</button>
      </div>
      <div className="password-list">
        {passwords.map((password, index) => (
          <p key={index} className="password">{password}</p>
        ))}
      </div>
    </div>
  );
};

export default PasswordGenerator;
