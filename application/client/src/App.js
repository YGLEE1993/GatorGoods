import React from "react";
import Navigation from "./Components/views/Navigation/Navigation";
import Routes from "./Routes";
import WarningBanner from "./Components/WarningBanner";

function App() {
  return (
    <div className="App">
      <WarningBanner />
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
