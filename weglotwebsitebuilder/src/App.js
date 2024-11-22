// css
import './App.css';
// pages
import LandingPage from './Pages/LandingPage';
import PurchasesPage from "./Pages/PurchasesPage"
// dependencies
import {useState} from "react";
function App() {
  const [leaveFirstPage, setLeaveFirstPage] = useState(false); 
  return (
    <div>
      <LandingPage setLeaveFirstPage = {setLeaveFirstPage} />
      {/* {leaveFirstPage && <div>
        <PurchasesPage />
        <PurchasesPage />
        <PurchasesPage />
        <PurchasesPage />
        <PurchasesPage />
        <PurchasesPage />
      </div>
      } */}
    </div>
  );
}

export default App;
