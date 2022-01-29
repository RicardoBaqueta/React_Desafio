import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Views/Home';
import { Listar } from './Views/Cliente/Listar';
import { Fazer } from './Views/Compra/Fazer';
import { Pedir } from './Views/Produtos/Pedir';
import { Menu } from './Components/Menu';
import { itemCompra } from './Views/Produtos/ItemCompra';
import './App.css';
import { Cadastrar } from './Views/Produtos/Cadastrar';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Routes>

          <Route exatc path="/" component={Home}/>
          <Route path="/listar-cliente" component={Listar}/>
          <Route path="/fazer-compra" component={Fazer}/>
          <Route path="/pedir-produto" component={Pedir}/>
          <Route path="/fazer-compra/id" component={itemCompra}/>
          <Route path="/cadastrarproduto" component={Cadastrar}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
