import { Outlet } from "react-router-dom";
import HomeHeader from "./pages/Home/HomeHeader";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.container}>
      <HomeHeader />
      <Outlet />
    </div>
  );
}
