import React from 'react';
import { Layout } from './components';
import { CustomerProvider } from './context';

const App = () => <div className="App">
  <CustomerProvider>
    <Layout />
  </CustomerProvider>
</div>;
export default App;
