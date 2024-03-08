import { useState } from "react"

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>hi, {props.name}!</h1>
      <img className="logo" alt="logo" src="https://livecodes.io/livecodes/assets/templates/react.svg" />
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default function App() {
  return <Counter name="LiveCodes" />;
}
