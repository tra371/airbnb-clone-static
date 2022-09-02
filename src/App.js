import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katiezaferes from './images/katie_zaferes.png'
import weddingphoto from './images/wedding_photo.png'
import mountainbike from './images/mountain_bike.png'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="section-2">
        <Card 
          img={katiezaferes}
          availability="SOLD OUT"
          rating="(5.0)"
          reviewCount="6"
          country="USA"
          title="Life lessons with Katie Zaferes"
          price="136"
        />
        <Card 
          img={weddingphoto}
          availability="ONLINE"
          rating="(5.0)"
          reviewCount="30"
          country="USA"
          title="Learn wedding photography"
          price="125"
        />
        <Card 
          img={mountainbike}
          rating="(4.8)"
          reviewCount="2"
          country="USA"
          title="Group Mountain Biking"
          price="50"
        />
      </section>
      
    </div>
    
  )
}

export default App;
