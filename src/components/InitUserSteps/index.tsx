import React from 'react'
import style from './index.module.css';
import timePic from '../../../public/time-pic.png';
import Image from 'next/image';

export default function index(props) {
  console.log('props',props);
  const { curstep } = props;
  return (
    <div className={style.initUserSteps}>
      <div className={style.steps}>
        <Image src={timePic} alt="timePic" />
        <span className={[style.stepsName, curstep > 1 ? style.stepsComplete : ''].join(' ')}>Cannect wallet</span>
        <span className={style.stepsLine}></span>
        <Image src={timePic} alt="timePic" />
        <span className={[style.stepsName, curstep > 2 ? style.stepsComplete : ''].join(' ')}>profile</span>
        <span className={style.stepsLine}></span>
        <Image src={timePic} alt="timePic" />
        <span className={[style.stepsName, curstep > 3 ? style.stepsComplete : ''].join(' ')}>Q&A</span>
      </div>
    </div>
  )
}
