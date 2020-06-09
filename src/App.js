import React from 'react';
import Navigation from './components/Navigation/Navigation';
import { ThemeProvider } from 'styled-components';
import theme from './Utils/theme';
import { GlobalStyles } from './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Router>
        <Navigation
          links={[
            {id:1, name:"Home", exact: true, path:"/" },
            {id:2, name:"Budget", exact:false , path:"/budget" }
          ]
          }
        >
        </Navigation>
          <Switch>
            <Route exact path="/">Home</Route>
            <Route path="/budget">Budget</Route>
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
