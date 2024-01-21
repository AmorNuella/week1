import React from 'react'
import profile from '../assets/profile.jpg'

const Profile = () => {
  return (
    <div>
        <div className="flex flex-col items-center mt-8">
      <img
        src={profile}
        alt="Profile"
        className="w-20 h-20 rounded-full mb-2 object-cover"
      />
      <p className="text-black text-xl font-semibold">Nuella Codes</p>
      <p className=' text-xs'> <span className=' text-blue-600'>UI/UX/DESIGNER</span> IN GHANA</p>
    </div>
    </div>
  )
}

export default Profile