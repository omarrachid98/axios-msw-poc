import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axiosFunctions from "./lib/axios.ts";
import {PostsType} from "./types/types.ts";



function App() {
    const [count, setCount] = useState(0)
    const [test, setTest] = useState<Array<PostsType>>([])

    const getPosts = async () => {
        try {
            return await axiosFunctions.getData('/posts');
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getPosts().then(post => setTest(post?.data));
    }, []);

    console.log(test)
    return (
        <>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
    )
}

export default App
