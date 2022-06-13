import React from 'react'
import style from './index.module.css';

export default function index() {
  return (
    <div className={style.initUserSteps}>
      <div className={style.steps}>
        <span className={style.stepsLogo}>图片</span>
        <span className={style.stepsName}>Cannect wallet</span>
        <span className={style.stepsLine}></span>
        <span className={style.stepsLogo}>图片</span>
        <span className={style.stepsName}>profile</span>
        <span className={style.stepsLine}></span>
        <span className={style.stepsLogo}>图片</span>
        <span className={style.stepsName}>Q&A</span>
      </div>
    </div>
  )
}
