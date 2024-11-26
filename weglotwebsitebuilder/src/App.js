// css
import './App.css';
// pages
import LandingPage from './Pages/LandingPage';
import PurchasesPage from "./Pages/PurchasesPage"
import MultiLingualPage from './Pages/MultiLingualPage';
function App() {
  return (
    <div>
      <LandingPage />
      <div>
        <PurchasesPage />        
        <MultiLingualPage />
      </div>
    </div>
  );
}

export default App;
