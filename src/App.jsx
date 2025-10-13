
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/DaisyNav/DaisyNav'
import NavBar from './component/Navbar/NavBar'
import PricingOption from './component/PricingOption/pricingOption'
const pricingPromise=fetch('PricingOption.json').then(res=>res.json());

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
      </main>
    </>
  )
}

export default App
