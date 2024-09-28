'use client'
import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let characters = "";
    if (includeLetters) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="input-group">
        <label>Password Length: {length}</label>
        <input type="range" min="4" max="20" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
      </div>
      <div className="checkbox-group">
        <label><input type="checkbox" checked={includeLetters} onChange={(e) => setIncludeLetters(e.target.checked)} /> Include Letters</label>
        <label><input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} /> Include Numbers</label>
        <label><input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} /> Include Symbols</label>
      </div>
      <button onClick={generatePassword} className="generate-btn">Generate Password</button>
      {password && (
        <>
          <div className="password-display">{password}</div>
          <button onClick={copyToClipboard} className="copy-btn">Copy to Clipboard</button>
        </>
      )}
      <footer>
        © All rights reserved. Password Generator by Yemna Mehmood.
      </footer>
    </div>
  );
}
