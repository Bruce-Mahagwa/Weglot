// css
import './App.css';
// pages
import LandingPage from './Pages/LandingPage';
import PurchasesPage from "./Pages/PurchasesPage"
function App() {
  return (
    <div>
      <LandingPage />
      <div>
        <PurchasesPage />
        <PurchasesPage />
        <PurchasesPage />
        <PurchasesPage />
    </div>
    </div>
  );
}

export default App;
