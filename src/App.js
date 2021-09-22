import { Route, Switch } from 'react-router-dom';
import "./App.scss";

// imported components
import SideBar from "./components/SideBar/SideBar"
import Header from "./components/Header/Header"

// imported pages
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <SideBar />
      <main className="main-page">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/about" component={Abo2ut} />cv 
          <Route path="/shop" component={Shop} />
          <Route component={Error} /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
