import AdminPage from "./AdminPage";
import TransformPage from "./transform"

export default function App() {
  const path = window.location.pathname;

  if (path === "/admin") {
    return <AdminPage />;
  }

  return <TransformPage />;
}
