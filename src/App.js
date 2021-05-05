import logo from "./logo.svg";
import "./App.css";
import ExportExcel from "react-export-excel";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

const json = [
  { nombre: "Lexfer", apellido: "Ramirez" },
  { nombre: "Lexfer1", apellido: "Ramirez1" },
  { nombre: "Lexfer2", apellido: "Ramirez2" },
];

function App() {
  return (
    <div className="App">
      <ExcelFile
        element={<button>Exportar Excel</button>}
        filename="Prueba Lexfer"
      >
        <ExcelSheet data={json} name="Json de lexfer">
          <ExcelColumn label="nombre" value="nombre" />
          <ExcelColumn label="apellido" value="apellido" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
}

export default App;
