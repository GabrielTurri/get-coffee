import React from 'react';

import GlobalStyle from './styles/globalStyle';

import Landing from './pages/Landing';

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <GlobalStyle/>
    </>
  );
}

export default App;
