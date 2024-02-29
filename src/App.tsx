import { useEffect, useState } from 'react'
import './App.css'
import { PropsTodo } from './components/Todo/Todo';
import Todos from './components/Todo/Todos';
import Loader from './components/Loader/Loader';

function App() {
  const [list, setList] = useState<PropsTodo[]>([]);
  const [isLoading, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isLoading) setLoad(true);
    if (error) setError('');

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (response.ok) {
          const data = await response.json()
          if (data) {
            setList(data);
            setLoad(false);
          }
        }
      } catch(err) {
        if (err instanceof Error) {
          setError(err.message)
          setLoad(false);
        
        }     
      }
    } 
    fetchData();
  }, [])



  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <Loader/> } 
      {!isLoading &&<Todos list={list}/>}
    </>
  )
}

export default App
