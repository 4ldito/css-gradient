import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import style from "./App.module.css";

export function App() {

  return (
    <div className={style.container}>
      <Sidebar />
      <Main />
    </div>
  )
}
