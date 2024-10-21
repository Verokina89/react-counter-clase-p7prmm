import { useState } from 'react';
import ReactDom from 'react-dom/client';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Contador: {count}</h1>
    </div>
  );
}

export default App;

ReactDom.createRoot(document.getElementById('root')).render(<App />);
