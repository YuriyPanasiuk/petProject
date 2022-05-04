import React from 'react';
import 'normalize.css';
import 'src/styles/global.css';
import { ChatPage, TodoPage } from './components/pages';
import Layout from './components/templates/Layout';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from 'src/config/constants';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.CHAT} element={<ChatPage />} />
        <Route path={AppRoutes.TODO_LIST} element={<TodoPage />} />
      </Routes>
    </Layout>
  );
}

const Home = () => <h1>HomePage</h1>;

export default App;
