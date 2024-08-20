
import './App.css';
import Navbar from './components/Navbar';

// let name= "Mujjo";
// const element = (
//   <b className="greeting">
//     How are u today!
//   </b>
// );
function App() {
  return (
    //jsx= html+js
    //html ke tags & components can be used here but the name is change little bit

    //<div className="blank">Lovely</div>

    <>
  {/* module 1:
  remove curly brac and comment
    <h1 className='header1'>Hello {name} {element}</h1>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quibusdam alias iusto voluptate soluta, minima praesentium debitis doloribus error harum repudiandae esse ex quod atque eveniet sequi. Qui dolores et tempore eum quae quam.</p>
    </div>
    */}

    <Navbar title="My React-app" aboutText="About My React-app"/>
    {/* <Navbar/> */}
    </>
  );
}

export default App;
