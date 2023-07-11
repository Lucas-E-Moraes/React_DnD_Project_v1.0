import React from "react";
import Routers from './Routers'

import Body from './template/Body'
import Header from './template/Header'
import Footer from './template/Footer'

function App() {
  return (
    <Body>
      <Header />
      <Routers />
      <Footer />
    </Body>
  );
}

export default App;
