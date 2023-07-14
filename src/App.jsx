import './App.css'
import Main from './component/Main'
import Navbar from './component/Navbar'
import data from './data';

function App() {
  const Body = data.map(x=>
    (
       <Main {...x}/>
    )
    );
  return (
    <div className="App">
    <Navbar/>
    {Body}
    </div>
  )
}

export default App
