import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="text-red-600 text-center font-bold">Please login</div>;

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-2 text-senior">Welcome {user.username}</h1>
      <h2 className="text-xl text-senior">Your Password is {user.password}</h2>
    </div>
  );
}

export default Profile;
