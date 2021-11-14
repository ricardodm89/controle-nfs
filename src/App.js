import Routes from './routes/routes'
import GlobalStyle from './styles/globalStyle'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
