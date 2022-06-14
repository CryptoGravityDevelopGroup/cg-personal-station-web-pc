import React from 'react'
import style from './index.module.css';
import timePic from '../../../public/time-pic.png';
import Image from 'next/image';

export default function index() {
  return (
    <div className={style.initUserSteps}>
      <div className={style.steps}>
        <Image src={timePic} alt="timePic" />
        <span className={style.stepsName}>Cannect wallet</span>
        <span className={style.stepsLine}></span>
        <Image src={timePic} alt="timePic" />
        <span className={style.stepsName}>profile</span>
        <span className={style.stepsLine}></span>
        <Image src={timePic} alt="timePic" />
        <span className={style.stepsName}>Q&A</span>
      </div>
    </div>
  )
}
