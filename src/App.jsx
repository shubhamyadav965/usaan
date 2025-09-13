import React from "react";
import Routes from "./Routes";
import { TranslationProvider } from "./contexts/TranslationContext";

function App() {
  return (
    <TranslationProvider>
      <Routes />
    </TranslationProvider>
  );
}

export default App;
