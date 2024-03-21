import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Counter } from './components/counter/counter'
import { Footer } from './components/footer/footer'
import { PrimerosPasos } from './components/generation/primerosPasos'
import { Navbar } from './components/navbar/navbar'
import { About } from './components/about/about'
import { NotFound } from './components/404/notFound'
import { Home } from './components/home/home'


function App() {
  //sintaxis JSX
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>

          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="about" element={<About />} />
          <Route path="primeros-pasos" element={ <PrimerosPasos /> } />
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App

//import Generation from './components/generation/generation'
/*import Gene from './components/generation/generation'
   <Gene></Gene>
   <Gene/>*/
//import { Greeting } from './components/generation/generation'
/*import { Greeting as Gree } from './components/generation/generation'
   <Gree></Gree>
   <Gree />*/

/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

/* function App() {
  const [count, setCount] = useState(0)

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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */