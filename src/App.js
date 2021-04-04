
import './App.css';
//import HelloWorld from './components/HelloWorld';
import Subtitulo from "./components/Subtitulo";
import Titulo from "./components/Titulo";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTarea from "./components/FormTarea";

function App() {
  return (
    <div className="App">

      <Titulo/>
      <Subtitulo comision='3A' estado={true}></Subtitulo>
      <FormTarea></FormTarea>
    
      {/* <HelloWorld text="my friend."></HelloWorld> */}
    </div>
  );
}

export default App;
