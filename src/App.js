
import styled from "styled-components";
import 'antd/dist/antd.css';
import OrderDetail from "./components/OrderDetail";

const AppContainer = styled.div`
`

function App() {
  return (
    <AppContainer>
      <OrderDetail/>
    </AppContainer>
  );
}

export default App;
