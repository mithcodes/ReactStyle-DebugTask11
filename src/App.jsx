import React from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import { AuthContextProvider } from './components/store/auth-context';

function App() {
  return (
    <AuthContextProvider>
      <MainHeader />
      <main>
        <Login />
      </main>
    </AuthContextProvider>
  );
}

export default App;