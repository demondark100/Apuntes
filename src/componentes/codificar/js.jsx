import { useState } from 'react';

function CodigoJs() {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleRunCode = () => {
    try {
      eval(code);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea value={code} onChange={handleCodeChange} rows={10} cols={50} />
      <button onClick={handleRunCode}>Run Code</button>
    </div>
  );
}
export default CodigoJs;