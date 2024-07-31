import "./App.css";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Sidebar from "./Component/Slidebar";
import Footer from "./Component/Footer";
import Tarea from "./Component/Tarea";

function App() {
  return (
    <div className="Aplicacion-tareas">
      <Header />
      <Nav />
      <div className="main-content">
        <Sidebar />
      </div>
      <div className="lista-tareas">
        <h1>Lista de tareas</h1>

        <Tarea texto="Aprendiendo React en Disenio de Interfaces"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
