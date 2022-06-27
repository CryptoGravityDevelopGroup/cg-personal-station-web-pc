import React, { useEffect, useState } from 'react'
import Header from "../../components/Header";
import ConnectWallet from "../../components/ConnectWallet";
import InitUserSteps from "../../components/InitUserSteps";
import Profile from "../../components/Profile";
import QuestionAndAnswer from "../../components/QuestionAndAnswer";
import ProfileDown from "../../components/ProfileDown";
import style from './index.module.css';
import { registerUser } from '../../api/user';
export default function InitUser() {
  const [curstep, setCurstep] = useState(1);
  const [userInfo, setuserInfo] = useState({});
  const handleRegisterUser = () => {
    registerUser(userInfo).then(() => {
      setCurstep(4);
    })
  }
  return (
    <div className={style.inituser}>
      <Header upmStatus={true} />
      <InitUserSteps curstep={curstep} />
      {/* 连接钱包 */}
      {
        curstep == 1 && <ConnectWallet onNext={() => {
          setCurstep(2);
        }}/>
      }

      {/* 个人简介 */}
      {
        curstep == 2 && <Profile onNext={(obj) => {
          console.log('ProfileObj', obj);
          setuserInfo({...obj});
          setCurstep(3);
        }}/>
      }

      {/* Q&A */}
      {
        curstep == 3 && <QuestionAndAnswer onNext={(obj) => {
          console.log('Q&A', obj);
          setuserInfo({ ...userInfo, ...obj });
          handleRegisterUser();
        }}/>
      }

      {/* 填写完成 */}
      {
        curstep == 4 && <ProfileDown/>
      }
    </div>
  )
}
