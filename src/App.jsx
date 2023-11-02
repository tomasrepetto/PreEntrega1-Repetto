import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './index.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App(){

  return (
    <div>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a BOXES sneakers" />
    </div>
  );
}


export default App
