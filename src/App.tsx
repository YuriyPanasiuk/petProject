import React from 'react';
import 'normalize.css';
import 'src/styles/global.css';
import { Chat } from './components/pages';
import Layout from './components/templates/Layout';

function App() {
  return (
    <Layout>
      <Chat />
    </Layout>
  );
}

export default App;
