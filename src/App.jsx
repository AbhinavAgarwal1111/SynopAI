import Hero from "./components/Hero";
import Demo from "./components/Demo";

import './App.css';

const App = () => {
  return (
    <main>
      <div className="main" >
        <div className="gradient" />
      </div>

      <div className="app flex flex-row">
        <Hero />
        <Demo />
      </div>
    </main>

  )
}

export default App