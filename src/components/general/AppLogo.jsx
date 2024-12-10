import Image from 'next/image'
import React from 'react'


function AppLogo({appLogo}) {
  return (
    <div>

        <Image src={appLogo} alt="logo"  className='max-w-24 md:max-w-32' priority />
      
    </div>
  )
}

export default AppLogo
