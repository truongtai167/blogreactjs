import logo from './logo.svg';
import Index from './component/blog';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import notfound from './component/notfound';
function App() {
  return (
    <div className="App">
      <div class="jumbotron text-center">
        <h1>
          Tai Blog Web
        </h1>
        <p>This is my first Web blog using reactjs</p>
        <a href="/index" class="btn btn-dark btn-lg">All blogs</a>
      </div>
      <Routes>
        <Route path="/index" Component={Index}></Route>
        <Route path="/" Component={Index}></Route>
        <Route path="*" Component={notfound}></Route>
      </Routes>
    </div>
  );
}

export default App;
