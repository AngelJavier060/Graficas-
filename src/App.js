import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import LinesChart from "./LinesChart";
import BarsChart from "./BarsChart";
import PiesChart from "./PiesChart";

function App() {
  return (
    <div>
      {/* Aqui Incluire las graficas (un componete por cada ejemplo).*/}
      <h1 className="bg-info text-center font-monospace fw-bold ln-base">Graficas de lineas básicos</h1>
      <div>
        <p className="m-2"><b>Ejemplo#1:</b>Graficos de lineas básicos</p>
        <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px",height:"230px"}}>
          <LinesChart /> 
        </div>
        </div>

        <hr className="mt-3 mb-2"/>
      <div>
        <p className="m-2"><b>Ejemplo#2</b>Grafico de Barras</p>
        <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px",height:"225px"}}>
        <BarsChart />
        </div>
        </div>
       
        <hr className="mt-3 mb-2"/>
        <div>
        <p className="m-2"><b>Ejemplo#3</b>Grafico de Circular</p>
        <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px",height:"250px"}}>
        <PiesChart /> 
        </div>
      </div>
      </div>
    
  );
}

export default App;
