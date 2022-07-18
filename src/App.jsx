import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ListPage from './components/ListPage';

const list = [
  {path: '/', element: <Home/>, naming: 'Home'},
  {path: '/list', element: <ListPage/>, naming: 'List'}
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        {list.map(page=><Route path={page.path} element={<Layout links={list}>{page.element}</Layout>} key={page.naming}/>)}
      </Routes>
    </BrowserRouter>
  )
}

// ? <Route path={route.path} element={<Layout links={routes}>{route.element}</Layout>}/>

export default App;
