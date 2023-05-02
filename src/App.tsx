import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { CoffeeCartContextProvider } from "./context/CoffeCartContext";

function App() {
  return (
    <BrowserRouter>
      <CoffeeCartContextProvider>
        <Router />
        <GlobalStyle />
      </CoffeeCartContextProvider>
    </BrowserRouter>
  );
}

export default App;
