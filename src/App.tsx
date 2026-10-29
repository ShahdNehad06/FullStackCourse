import "./App.css";
import { AuthProvider } from "./context/AuthProvider";
import Content from "./components/Content";

function App() {
  return (
    <AuthProvider>
      <Content />
    </AuthProvider>
  );
}

export default App;
