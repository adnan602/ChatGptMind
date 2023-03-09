import logo from './logo.svg';
import './App.css';
import { RightSidebar } from './Components/RightSidebar';
import { LeftSidebar } from './Components/LeftSidebar';
import { Main } from './Components/Main';

function App() {
  return (

    <div >
      <LeftSidebar />
      <Main />
      <RightSidebar />

    </div>
  );
}

export default App;
