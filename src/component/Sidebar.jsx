import React from 'react'
import Copyrightmessage from './Copyrightmessage'
import Profile from './Profile'
import Navigation from './Navigation'

const Sidebar = () => {
  return (
    <div className='w-1/5 bg-slate-300  p-7 items-center justify-between text-black h-screen '>

<Profile  />
<Navigation />

<Copyrightmessage />





        
    </div>
  )
}

export default Sidebar