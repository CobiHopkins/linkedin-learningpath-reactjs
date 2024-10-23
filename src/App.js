import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name}/>
    </div>
  )
}

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/CobiHopkins`)
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
    <GithubUser 
      name={data.name} 
      location={data.location} 
      avatar={data.avatar_url}
      />
  );

}

export default App;