import { Outlet } from "react-router-dom";
import Header from "./pages/Header/Header";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
}
