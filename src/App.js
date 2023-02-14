import React from "react";
import AppRouter from "./components/AppRouter";
import classes from './App.module.css'


function App() {
  return (
    <div className={classes.App}>
      <AppRouter/>
    </div>
  );
}

export default App;
