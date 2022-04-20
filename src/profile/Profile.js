import React from 'react'
import PropTypes from "prop-types";
const Profile = ({user,children,funct}) => {

  return (
    <div>
      <h1>{user.fullName}</h1>
      <h2>{user.bioProfil}</h2>
      <h3>{user.profession}</h3>
      <button onClick={()=> funct(user.fullName)} >submit</button>
      {children}
    </div>
  )
}
Profile.defaultProps ={
 funct : (x)=>alert(x)
}
Profile.propTypes = {
  user: PropTypes.object,
}

export default Profile
