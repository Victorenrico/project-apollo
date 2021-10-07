import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';

import { GlobalStyle, colors } from './global/styles/theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
