import { useAuth } from "../context/useAuth";

export type Page = "login" | "register" | "profile";

type NavbarProps = {
  page: Page;
  setPage: (page: Page) => void;
};

function Navbar({ page, setPage }: NavbarProps) {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    setPage("login");
  }

  function getClass(name: Page) {
    if (page === name) {
      return "link active";
    }
    return "link";
  }

  return (
    <nav className="navbar">
      <div className="brand">Account Portal</div>

      {user ? (
        <div className="nav-links">
          <button
            className={getClass("profile")}
            onClick={() => setPage("profile")}
          >
            Profile
          </button>
          <span className="user-name">{user.name}</span>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="nav-links">
          <button
            className={getClass("login")}
            onClick={() => setPage("login")}
          >
            Login
          </button>
          <button
            className={getClass("register")}
            onClick={() => setPage("register")}
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
