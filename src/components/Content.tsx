import { useState } from "react";
import Navbar from "./Navbar";
import type { Page } from "./Navbar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Profile from "./Profile";
import { useAuth } from "../context/useAuth";

function Content() {
  const { user } = useAuth();

  const [page, setPage] = useState<Page>(user ? "profile" : "login");

  let currentPage = page;
  if (page === "profile" && user === null) {
    currentPage = "login";
  }

  return (
    <div>
      <Navbar page={currentPage} setPage={setPage} />
      <main>
        {currentPage === "login" && (
          <LoginForm goToProfile={() => setPage("profile")} />
        )}
        {currentPage === "register" && <RegisterForm />}
        {currentPage === "profile" && <Profile />}
      </main>
    </div>
  );
}

export default Content;
