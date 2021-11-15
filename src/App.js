import Routes from './routes/routes'
import GlobalStyle from './styles/globalStyle'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <Routes />
    </Router>
  );
}

export default App;
