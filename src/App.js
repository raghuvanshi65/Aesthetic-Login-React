import './App.css';
import styled from 'styled-components';
import { AccountBox } from './accountBox'; 

const AppContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;


function App() {
  return (
    <AppContainer className="App">
        <AccountBox></AccountBox>
    </AppContainer>
  );
}

export default App;
