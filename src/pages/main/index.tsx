import React from 'react';
import Header from "../../components/Header";
import style from './index.module.css';
import { useRouter } from 'next/router'

const Main = function () {
  const router = useRouter()
  return (
    <div className={style.main}>
      <Header/>
      <div className={style.content}>
        <div className={style.leftModule}>
          <div className={style.title}>CryptoGravity</div>
          <div className={style.subTitle}>Building the next-generation intelligent <br/>application cloud service platform</div>
          <div className={style.startBtn} onClick={() => {
            router.push('/inituser')
          }}>
            <span>Start</span>
            <span>图标</span>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;