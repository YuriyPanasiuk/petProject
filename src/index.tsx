import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './config/store';
import { Provider } from 'react-redux';

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URI,
  cache: new InMemoryCache()
});

const pubnubClient = new PubNub({
  publishKey: process.env.REACT_APP_PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.REACT_APP_PUBNUB_SUBSCRIBE_KEY || '',
  uuid: 'user'
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PubNubProvider client={pubnubClient}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </PubNubProvider>
    </BrowserRouter>
  </Provider>
);
