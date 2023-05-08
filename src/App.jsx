import { Container, Row, Column } from "./style/App";
import { Menu } from "./components/menu";
import { AppBar } from "./components/app_bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Cadastro } from "./pages/cadastro";
import { Contatos } from "./pages/contatos";

function App() {
  const path = window.location.pathname;

  return (
    <Container>
      <Row>
        <Menu />
        <Column width="calc(100% - 300px)">
          <AppBar />
          <Row>
            <BrowserRouter>
              <Routes>
                <Route exact path="/contatos" element={<Contatos />} />
                <Route exact path="/cadastro" element={<Cadastro />} />
                <Route
                  path="/editar/*"
                  element={<Cadastro id={path.replace(/\/editar\/?/, "")} />}
                />
              </Routes>
            </BrowserRouter>
          </Row>
        </Column>
      </Row>
    </Container>
  );
}

export default App;
