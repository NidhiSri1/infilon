import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from './module/setUp/customeTheme';

function App() {
  return (
   <>
   <ThemeProvider>

    <LandingPage></LandingPage>
   </ThemeProvider>
   </>
  );
}

export default App;
