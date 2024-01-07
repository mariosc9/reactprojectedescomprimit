import { Rllista } from "./Rllista";
import { useState } from "react";
import {
  persones,
  competidors,
  administradors,
  headerConfig,
} from "../models/instancies.js";

export function Container() {
  // Desestructuració d'arrays
  let [titol, setTitol] = useState("Titol");
  let [headerConf, setCapçalera] = useState([]);
  let [datos, setDatos] = useState([]);
  let [copiaDatosOriginales, setDatosLlista] = useState([]);

  let [capçaleraBoolean, setCapçaleraBoolean] = useState(false);
  let [personaBoolean, setPersonaBoolean] = useState(false);
  let [competidorBoolean, setCompetidorBoolean] = useState(false);
  let [administradorBoolean, setAdministradorBoolean] = useState(false);
  let [ordenarBoolean, setOrdenarBoolean] = useState(false);
  let [filtrarBoolean, setFiltrarBoolean] = useState(false);
  let [totalitzarBoolean, setTotalitzarBoolean] = useState(false);
  let total;
  let copiaDatos = [];

  function addCapçalera() {
    if (!capçaleraBoolean) {
      setCapçaleraBoolean(true);
      headerConfig.forEach((capçalera) => headerConf.push(capçalera));
      setCapçalera([...headerConf]);
    }
  }

  function addPersona() {
    if (!personaBoolean) {
      setPersonaBoolean(true);
      const nuevosDatos = [...datos, ...persones];
      setDatos(nuevosDatos);
      setDatosLlista(nuevosDatos);
    }
  }

  function addCompetidor() {
    if (!competidorBoolean) {
      setCompetidorBoolean(true);
      const nuevosDatos = [...datos, ...competidors];
      setDatos(nuevosDatos);
      setDatosLlista(nuevosDatos);
    }
  }

  function addAdministrador() {
    if (!administradorBoolean) {
      setAdministradorBoolean(true);
      const nuevosDatos = [...datos, ...administradors];
      setDatos(nuevosDatos);
      setDatosLlista(nuevosDatos);
    }
  }

  function canviTitol() {
    let tt = prompt("Nou titol:");
    if (tt) {
      setTitol(tt);
      //document.getElementById("titol").innerHTML = tt;
    }
  }
  function Ordenar() {
    if (!ordenarBoolean) {
      setOrdenarBoolean(true);
      copiaDatos = datos.slice().sort(ordenarNom);
      setDatos([...copiaDatos]);
    } else {
      Reiniciar();
    }
  }
  function ordenarNom(a, b) {
    return a.nom > b.nom;
  }
  function Filtrar() {
    if (!filtrarBoolean) {
      setFiltrarBoolean(true);
      copiaDatos = datos.filter((elem) => elem.alçada > 170);
      setDatos([...copiaDatos]);
    } else {
      Reiniciar();
    }
  }
  function Totalitzar() {
    setTotalitzarBoolean(true);
  }
  function actualizarTotal() {
    let totalitzarAlçada = datos.map((ele) => ele["alçada"]);
    let resultat = totalitzarAlçada.reduce((acum, valor) => acum + valor, 0);
    return resultat;
  }
  function Reiniciar() {
    setOrdenarBoolean(false);
    setFiltrarBoolean(false);
    setDatos([...copiaDatosOriginales]);
  }
  if (totalitzarBoolean) {
    total = actualizarTotal();
  }
  return (
    <>
      <h1>{titol}</h1>
      <h1>Llista</h1>
      <div>
        <Rllista data={datos} header={headerConf} />
        <p>{totalitzarBoolean ? "Total: " + total : ""}</p>
        <button onClick={canviTitol}>Títol</button>
        <button onClick={addCapçalera}>Capçalera</button>
        <button onClick={addPersona}>Persona</button>
        <button onClick={addCompetidor}>Competidor</button>
        <button onClick={addAdministrador}>Administrador</button>
        <button onClick={Ordenar}>Ordenar</button>
        <button onClick={Filtrar}>Filtrar</button>
        <button onClick={Totalitzar}>Totalitzar</button>
      </div>
    </>
  );
}
