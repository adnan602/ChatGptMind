import logo from "./logo.svg";
import "./App.css";
import { RightSidebar } from "./Components/RightSidebar";
import { LeftSidebar } from "./Components/LeftSidebar";
import { Main } from "./Components/Main";
import { AppProvider } from "context/app.context";

function App() {
  return (
    <AppProvider>
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </AppProvider>
  );
}

export default App;
