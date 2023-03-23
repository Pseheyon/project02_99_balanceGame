import "./App.css";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";

import Router from "./shared/Router";
function App() {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Router />
      </Layout>
    </>
  );
}

export default App;
const Layout = styled.div`
height :100vh`;

