import logo from './logocali.png';
import './NavBar.css';


export const NavBar =() => {
    return (
   <section className='fondo'>
     <div className='barra contenedor'>
        <img src={logo} className='log' ></img> 
           <nav>
              <ul>
                  <li>
                   <a>Inicio</a>
                  </li>
                  <li>
                   <a>Productos</a>
                  </li>
                  <li>
                    <a>Preguntas Frecuentes</a>
                  </li>
                  <li>
                    <a>Quines Somos</a>
                  </li> 
               </ul>
           </nav>
      </div>
    </section>
    )
}

