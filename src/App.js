import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Example 111</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <hr />
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/nothing-here">Nothing Here</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (<h2>Home111</h2>);
}

function About() {
  return (<h2>About111</h2>);
}

function Dashboard() {
  return (<h2>Dashboard111</h2>);
}

function NoMatch() {
  return (
    <><h2>111 Nothing to see here!</h2><p><Link to="/">Go to the home page</Link></p></>
  );
}


export default App;
