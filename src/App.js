// import logo from './logo.svg';
import './App.css';
// import React from 'react' ;

import Navbar from './components/Navbar' ;
import TextForm from './components/TextForm' ;
// import About from './components/About' ;
import Alert from './components/Alert' ;
import React , {useState} from 'react' ;


function App() {

  const [mode,setMode] = useState('light') ;        // whether dark mode is enables or not

  const [alert,setAlert] = useState(null) ;

  const showAlert = (message , type) =>
  {
    setAlert({
      msg : message ,

      type : type
    })

    setTimeout(() =>{
      setAlert(null) ;
    },2500)
  } 

  const toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark') ;

      document.body.style.backgroundColor = '#042743' ;

      showAlert("DarkMode has been enabled!" , "success") ;

    }

    else
    {
      setMode('light') ;

      document.body.style.backgroundColor = 'white' ;
    
      showAlert("LightMode has been enabled!" , "success") ;
    }
  }
  
  return (
    <>
        <div className="container my-3">


          <Navbar title ="AmbujTextutils" toggleMode = {toggleMode} mode={mode}/>

          <Alert alert={alert}/>

          <TextForm showAlert = {showAlert} toggleMode={toggleMode} mode = {mode} />
        
          {/*<About/>*/}

        </div> 
    </>
  );
}

export default App;
