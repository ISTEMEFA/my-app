import './App.css';
import BasicExample from './components/navbar-componet/Navbar-basic';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/formularios-component/Form-generico';

function App() {
  return (
    <div className="App">
    <BasicExample/>
    <div>
    <ContactForm/></div>
      </div>
  );
}

export default App;
