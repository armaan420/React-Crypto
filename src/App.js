import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoinList from "./screens/CoinList";
import Header from "./components/Header";
import CoinDetail from "./screens/CoinDetail";
import { WatchListContextProvider } from "./context/watchListContext";

function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={CoinList} />
            <Route path="/coins/:coin" exact component={CoinDetail} />
          </Switch>
        </Router>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
