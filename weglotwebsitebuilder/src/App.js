// css
import './App.css';
// pages
import LandingPage from './Pages/LandingPage';
import PurchasesPage from "./Pages/PurchasesPage"
// hooks
import { useDetectDownArrow } from './Components/hooks/useDetectDownArrow';
function App() {
  const res = useDetectDownArrow();
  return (
    <div>
      <LandingPage />
      {res > 11 && <div>
        <PurchasesPage />
      </div>
      }
    </div>
  );
}

export default App;
