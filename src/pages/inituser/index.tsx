import React from 'react'
import Header from "../../components/Header";
import ConnectWallet from "../../components/ConnectWallet";
import InitUserSteps from "../../components/InitUserSteps";
import style from './index.module.css';
export default function InitUser() {
  return (
    <div className={style.inituser}>
      <Header/>
      <InitUserSteps/>
      <ConnectWallet/>
    </div>
  )
}
