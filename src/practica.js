import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
/*
function Saludar (props){
  return <h1>(props.title)</h1>;
}
*/

class Saludar extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

class Texto extends Component {
  render() {
    /*const textoBooleano = this.props.boolean ? "Verdadero" : "Falso";
    const estaActivado = this.props.boolean ? "On" : "Off";
    /*const arregloCuadrado = this.props.arregloNumeros.map(n => n * 2)*/
    /*const arregloCuadrado = this.props.arregloNumeros.map(this.props.multiplicar)*/
    const {arregloNumeros, estaActivo, multiplicar, objeto, title} = this.props
    const textoBooleano = estaActivo ? "On" : "Off"
    const arregloCuadrado = arregloNumeros.map(multiplicar)
    return (
      <div>
        {/*<p>{this.props.text}</p>
        <p>{this.props.number}</p>
        {/*<p>{JSON.stringify(this.props.boolean)}</p>
        <p>{textoBooleano}</p>
        <p>{estaActivado}</p>
        <p>{this.props.arregloNumeros}</p>
        <p>{arregloCuadrado.join(", ")}</p>
        <p>{this.props.objeto.nombre} {this.props.objeto.apellido}</p>*/}
        {title}
        <p>{textoBooleano}</p>
        <p>{arregloCuadrado.join(", ")}</p>
        <p>{objeto.nombre} {objeto.apellido}</p>
      </div>
    );
  }
}
/*
const Saludar = (props) =><h1>{props.title}</h1>*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Desestructuracion</h2>
        <Saludar title="Bienvenidos a React usando clase, Eduardo Porras" />
        <Texto
          text="Saludos desde la clase Texto"
          number={123}
          boolean={true}
          arregloNumeros={[1, 2, 3, 4, 5]}
          objeto = {{nombre: "Eduardo" , apellido: "Porras"}}
          multiplicar={(n) => n * 2}  // función para multiplicar los números del arreglo
          title = {<h2>Props como elementos</h2>}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
