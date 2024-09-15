import React from 'react';
import HamburgerDrawer from './HamburgerDrawer';

const Navinshorts = ({setCategory}) => {
  return (
    <div className='h-[71px] shadow-4xl flex items-center sticky top-0 left-0 right-0 bg-slate-200'>
      <div className='flex-[0.48]'>
        <HamburgerDrawer setCategory={setCategory}> </HamburgerDrawer>
      </div>
      
      <img 
        style={{cursor: "pointer"}}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
        alt='logo'
        height='80%'
        width='10%'
      />

    </div>
  )
}

export default Navinshorts;