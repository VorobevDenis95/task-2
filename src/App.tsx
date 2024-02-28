import { useEffect, useState } from 'react'
import './App.css'
import { PropsTodo } from './components/Todo/Todo';
import Todos from './components/Todo/Todos';
import Loader from './components/Loader/Loader';

function App() {
  const [list, setList] = useState<PropsTodo[]>([]);
  const [isLoading, setLoad] = useState(false);

  useEffect(() => {
    if (!isLoading) setLoad(true);

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
        console.log(err)
      }
    } 
    fetchData();
  }, [])



  return (
    <>
      {isLoading && <Loader/> } 
      {!isLoading &&<Todos list={list}/>}
    </>
  )
}

export default App
