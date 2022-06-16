import React from 'react'
import Header from "../../components/Header";
import ConnectWallet from "../../components/ConnectWallet";
import InitUserSteps from "../../components/InitUserSteps";
import Profile from "../../components/Profile";
import QuestionAndAnswer from "../../components/QuestionAndAnswer";
import ProfileDown from "../../components/ProfileDown";
import style from './index.module.css';
export default function InitUser() {
  return (
    <div className={style.inituser}>
      <Header/>
      <InitUserSteps/>
      {/* 连接钱包 */}
      {/* <ConnectWallet/> */}

      {/* 个人简介 */}
      {/* <Profile/> */}

      {/* Q&A */}
      {/* <QuestionAndAnswer/> */}

      {/* 填写完成 */}
      <ProfileDown/>
    </div>
  )
}
