import React from 'react';
import Image from 'next/image';
import Header from "../../components/Header";
import style from './index.module.css';
import { useRouter } from 'next/router';
import startPic from '../../../public/startPic.png'

const Main = function () {
  const router = useRouter();
  return (
    <div className={style.main}>
      <Header upmStatus={true} />
      <div className={style.content}>
        <div className={style.leftModule}>
          <div className={style.title}>CryptoGravity</div>
          <div className={style.subTitle}>Building the next-generation intelligent <br/>application cloud service platform</div>
          <div className={style.startBtn} onClick={() => {
            router.push('/inituser')
          }}>
            <span style={{marginRight: '7.8px'}}>Start</span>
            <Image src={startPic} alt="startPic"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;