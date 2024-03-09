import { FC } from 'react';
import { useParams } from 'react-router-dom';

const Profile: FC = () => {
  const { email } = useParams<{ email: string }>();

  return (
    <div>
      <h1>Hello!!!</h1>
      <p>Login successfully: {email}</p>
    </div>
  );
}

export default Profile;