import React from 'react';

const Profile = ({ user }) => (
  <div>
    <h2>Hi {user.first_name} {user.last_name}!</h2>
  </div>
);

export default Profile;