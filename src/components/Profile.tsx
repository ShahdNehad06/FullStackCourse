import { useAuth } from "../context/useAuth";

function Profile() {
  const { user } = useAuth();

  if (user === null) {
    return null;
  }

  return (
    <div className="card">
      <h2>My Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

export default Profile;
