import React, { useState, useEffect } from 'react';
import PubNub from 'pubnub';
import 'normalize.css';
import 'src/styles/global.css';
import { ChatPage, TodoPage } from './components/pages';
import Layout from './components/templates/Layout';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from 'src/config/constants';
import users from './users.json';
import { useAppDispatch } from './config/store';
import { addUser } from 'src/store/todo/todo.slice';

const userId = localStorage.getItem('userId');
const randomUser = users[Math.floor(Math.random() * users.length)];

const pubnub = new PubNub({
  publishKey: process.env.REACT_APP_PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.REACT_APP_PUBNUB_SUBSCRIBE_KEY || '',
  uuid: userId ? userId : randomUser.id
});

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!userId) {
      localStorage.setItem('userId', JSON.stringify(randomUser));
      dispatch(addUser(randomUser));
    }
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path={AppRoutes.LOGIN} element={<Home />} />
        <Route path={AppRoutes.CHAT} element={<ChatPage pubnubClient={pubnub} />} />
        <Route path={AppRoutes.TODO_LIST} element={<TodoPage />} />
      </Routes>
    </Layout>
  );
}
export default App;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setIsOpen(!isOpen)}>Login</button>
    </div>
  );
};
