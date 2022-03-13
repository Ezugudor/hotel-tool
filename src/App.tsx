import React from 'react';
import { Layout } from './components';
import { AvailableRoomsProvider, CustomerProvider } from './context';

const App: React.FunctionComponent = () => <div className="App">
  <CustomerProvider>
    <AvailableRoomsProvider>
      <Layout />
    </AvailableRoomsProvider>
  </CustomerProvider>
</div>;
export default App;
