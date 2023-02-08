import './App.css';
import BasicExample from './components/navbar-componet/Navbar-basic';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/formularios-component/Form-generico';
import VideoGallery from './components/galeria-video-componet/Galeria'

function App() {
  return (
    <div className="App">
    <BasicExample/>
   <VideoGallery/>
    <ContactForm/>
      </div>
  );
}

export default App;
