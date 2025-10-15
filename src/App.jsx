
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/DaisyNav/DaisyNav'
import NavBar from './component/Navbar/NavBar'
import PricingOption from './component/PricingOption/pricingOption'
import { LineChart } from 'recharts'
import LineCharts from './component/LineChart/LineCharts'
import axios from 'axios'
import MarksChart from './component/MarksChart/MarksChart'
const pricingPromise=fetch('PricingOption.json').then(res=>res.json());
const marksPromise=axios.get('MarksChart.json');
function App() {
 

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOption pricingPromise={pricingPromise}> </PricingOption>
        </Suspense>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        <LineCharts></LineCharts>
      </main>
    </>
  )
}

export default App
