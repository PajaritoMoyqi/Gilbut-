import { useParams } from 'react-router-dom';

const data = {
  hans: {
    name: 'Pulloisky',
    description: 'developer who loves to use React.js'
  },
  crazyHorse: {
    name: 'Umtakuwa',
    description: 'developer who loves to use Vue.js'
  },
}

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>User Profile</h1>
      {
        profile ? (
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </div>
        ) : (
          <p>User not exists.</p>
        )
      }
    </div>
  )
}

export default Profile;