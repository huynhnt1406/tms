
import styled from "styled-components";
import SignIn from "./components/SignIn";
import 'antd/dist/antd.css';
const AppContainer = styled.div`
`

function App() {
  return (
    <AppContainer>
      <SignIn/>
    </AppContainer>
  );
}

export default App;
