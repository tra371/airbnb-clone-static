import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import {data} from './data';

function App() {
  const dataObject = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="section-2">
        {dataObject}
      </section>
      
    </div>
    
  )
}

export default App;
