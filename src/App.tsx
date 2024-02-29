import styled from "styled-components";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <>
      <AppContainer>
        <Header></Header>
        <MainPage></MainPage>
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;

  display: block;

  background-color: #333;
`;
