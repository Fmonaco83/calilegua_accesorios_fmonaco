
import '../src/App.css'
import { NavBar } from './components/navbar/NavBar'
import  {ItemListContainer}  from './components/ItemListContainer'; 
import 'bootstrap/dist/css/bootstrap.min.css';





const App = () => {
     return (
          <div>

            <NavBar/>
            <ItemListContainer/> 

             
          
          </div>
     );
}

export default App;
