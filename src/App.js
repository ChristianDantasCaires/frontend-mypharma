import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/main/Main";
import Detalhes from "./pages/detalhes/Detalhes";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </Router>
  );
}

export default App;
