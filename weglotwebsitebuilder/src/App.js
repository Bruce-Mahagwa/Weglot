// css
import './App.css';
// pages
import LandingPage from './Pages/LandingPage';
import PurchasesPage from "./Pages/PurchasesPage"
import MultiLingualPage from './Pages/MultiLingualPage';
import WeglotIntegrationPage from './Pages/WeglotIntegrationPage';
import LanguageSwitcherPage from './Pages/LanguageSwitcherPage';
import LeafPage from "./Pages/LeafPage";
import Navigation from './Components/Navigation';
function App() {
  return (
    <div className = "top_container relative">
      <Navigation />
      <LandingPage />
      <PurchasesPage />        
      <MultiLingualPage />
      <WeglotIntegrationPage /> 
      <LanguageSwitcherPage />
      <LeafPage />
    </div>
  );
}

export default App;
