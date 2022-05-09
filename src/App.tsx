import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'normalize.css';
import 'src/styles/global.css';

import { HomePage, ChatPage, TodoPage, LoginPage } from './components/pages';
import Layout from './components/templates/Layout';
import { PrivatePage } from './components/atoms';
import { AppRoutes } from 'src/config/constants';

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      <Route path={AppRoutes.HOME} element={<Layout />}>
        <Route path={AppRoutes.HOME} element={<PrivatePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={AppRoutes.CHAT} element={<PrivatePage />}>
          <Route path="" element={<ChatPage />} />
        </Route>
        <Route path={AppRoutes.TODO_LIST} element={<PrivatePage />}>
          <Route path="" element={<TodoPage />} />
        </Route>
      </Route>
      <Route path="*" element={<p>There nothing here: 404!</p>} />
    </Routes>
  );
}

export default App;
