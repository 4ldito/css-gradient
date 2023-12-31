import style from "./Button.module.css";

const Button = ({ onClick, value, children }) => {
  return (
    <button className={style.btn} value={value} onClick={() => onClick(value)}>{children}</button>
  )
}

export default Button