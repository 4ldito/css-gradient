import { useState } from 'preact/hooks';

import Button from "../Button/Button"
import style from "./Sidebar.module.css"

const Sidebar = () => {
  const [gradientStyle, setGradientStyle] = useState()
  const handleStyleClick = (value) => {
    console.log(value);
  };

  return (
    <aside className={style.container}>
      <h1>CSS Gradient</h1>
      <section className={style.styleContainer}>
        <p>Style</p>
        <div className={style.styleButtonsContainer}>
          <Button onClick={handleStyleClick} value="linear">Linear</Button>
          <Button onClick={handleStyleClick} value="radial">Radial</Button>
        </div>
      </section>

      <section className={style.styleContainer}>
        <p>Color</p>
        <div className={style.styleButtonsContainer}>
          <Button onClick={handleStyleClick} value="color1">Color1</Button>
          <Button onClick={handleStyleClick} value="color2">Color2</Button>
        </div>
      </section>

      <section className={style.styleContainer}>
        <p>Angle</p>
        <div className={style.styleButtonsContainer}>
          <Button onClick={handleStyleClick} value="linear">DiagonalIzq</Button>
          <Button onClick={handleStyleClick} value="radial">Arriba</Button>
          <Button onClick={handleStyleClick} value="radial">DiagonalDer</Button>
        </div>

        <div className={style.styleButtonsContainer}>
          <Button onClick={handleStyleClick} value="linear">Izquierda</Button>
          <Button onClick={handleStyleClick} value="linear">Medio</Button>
          <Button onClick={handleStyleClick} value="radial">Derecha</Button>
        </div>

        <div className={style.styleButtonsContainer}>
          <Button onClick={handleStyleClick} value="linear">DiagonalIzq</Button>
          <Button onClick={handleStyleClick} value="radial">Arriba</Button>
          <Button onClick={handleStyleClick} value="radial">DiagonalDer</Button>
        </div>

        <div className={style.styleButtonsContainer}>
          <p>Angle:</p>
          <Button onClick={handleStyleClick} value="radial">Custom</Button>
        </div>
      </section>

      <section className={style.styleContainer}>
        <p>Code</p>
        <Button onClick={handleStyleClick} value="linear">Get CSS Code</Button>
        <Button onClick={handleStyleClick} value="radial">Get Share Link</Button>
      </section>
    </aside>
  )
}

export default Sidebar