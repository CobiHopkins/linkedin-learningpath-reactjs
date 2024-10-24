import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ query })
}

function Lift({ name, elevation, status }) {

  return (
    <div>
      <h1>{name}</h1>
      <p>{elevation} {status}</p>
    </div>
  )
}

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com`, opts)
      .then(response => response.json())
      .then(data => setData(data))
      .then(() => setLoading(false))
      .catch(error => setError(error));
  }, []);

  /*
   * During asynchronous processes, you need to handle:
   * - Loading state: Show a loading spinner or message.
   * - Success state: Show the result of the process.
   * - Error state: Show an error spinner or message.
  */

  if(loading)
    return <h1>Loading...</h1>;
  if(error)
    return <pre>{JSON.stringify(error)}</pre>;
  if(!data)
    return null;

  return (
    <div>
      {data.data.allLifts.map(lift => (
        <Lift name={lift.name} elevation={lift.elevationGain} status={lift.status}/>
        ))}
    </div>
  );

}

export default App;