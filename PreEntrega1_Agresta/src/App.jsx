import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './App.css';

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting = "Bienvenidos a nuestro sitio!!!" />
    </div>
  )
};

export default App;