import React from 'react';
import Product from './Product';
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Generica Home"/>

        <div className="home__row">
          <Product 
            id='100' key={100}
            title='
            Apple iPad (10.2inch, Wi-Fi, 128GB) - Gold (Latest Model)' 
            price={399.99} 
            image={'https://images-na.ssl-images-amazon.com/images/I/61NhHYq8AnL._AC_SL1500_.jpg'}
            rating={5}
          />
          <Product 
            id='101' key={101}
            title='
            AMD Ryzen 5 3600X 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Spire Cooler' 
            price={202.09} 
            image={'https://images-na.ssl-images-amazon.com/images/I/616i5Il16qL._AC_SL1000_.jpg'}
            rating={5}
          />
        </div>
        
        <div className="home__row">
          <Product 
            id='102' key={102}
            title='Apple AirPods with Charging Case (Wired)' 
            price={159.00} 
            image={'https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg'}
            rating={5}
          />
          <Product 
            id='103' key={103}
            title='NZXT H510 - CA-H510B-W1 - Compact ATX Mid-Tower PC Gaming Case' 
            price={69.94} 
            image={'https://images-na.ssl-images-amazon.com/images/I/71QSKpbzlQL._AC_SL1500_.jpg'}
            rating={5}
          />
          <Product 
            id='104' key={104}
            title='Gigabyte GV-N1030OC-2GI Nvidia GeForce GT 1030 OC 2G Graphics Card' 
            price={88.99} 
            image={'https://images-na.ssl-images-amazon.com/images/I/919lkVdI%2BbL._AC_SL1500_.jpg'}
            rating={5}
          />
        </div>
        
        <div className="home__row">
          <Product 
            id='105' key={105}
            title='Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)' 
            price={1200.99} 
            image={'https://images-na.ssl-images-amazon.com/images/I/61Hh-0F7AbL._AC_SL1000_.jpg'}
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
