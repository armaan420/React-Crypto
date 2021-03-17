import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoinList from "./screens/CoinList";
import Header from "./components/Header";
import { WatchListContextProvider } from "./context/watchListContext";

function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={CoinList} />
          </Switch>
        </Router>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
