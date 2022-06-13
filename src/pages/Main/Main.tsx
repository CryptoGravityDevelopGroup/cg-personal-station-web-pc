import React from 'react';
import Header from "../../components/Header";
import style from './Main.module.css';

const Main = function () {
  return (
    <div className={style.main}>
      <Header/>
      <div className={style.content}>
        <div className={style.leftModule}>
          <div className={style.title}>CryptoGravity</div>
          <div className={style.subTitle}>Building the next-generation intelligent <br/>application cloud service platform</div>
          <div className={style.startBtn}>
            <span>Start</span>
            <span>?</span>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;