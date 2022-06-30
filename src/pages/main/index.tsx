import React, { useState } from 'react';
import Image from 'next/image';
import Header from "../../components/Header";
import style from './index.module.css';
import { useRouter } from 'next/router';
import startPic from '../../../public/startPic.png';
import { connectWallte, handleSignMessage } from '../../utils/tool';
import { login, registerUser, getStatus } from '../../api/user';

const Main = function () {
  const router = useRouter();
  const [upmStatus, setUpmStatus] = useState(false)
  const userLogin = (ethNonce, signature) => {
    login({
      "ethAddress": window.ethereum.selectedAddress,
      "message": `I am signing my one-time nonce: ${ethNonce}`, 
      "signature": signature, 
    }).then((res) => {
      console.log(res);
      const {
        success
      } = res.data;
      console.log('success', success);
      // 没有注册
      if(success == false) {
        router.push('/inituser');
      }
      if(success == true) {
        router.push('/profile');
      }
    })
  }
  const handleStartClick = () => {
    let ethNonce = null, ethAddress = null;
    connectWallte().then(async () => {
      // 判断是不是已经注册过了
      await registerUser({ email: "unknow", nickname: "unknow", ethAddress: window.ethereum.selectedAddress }).then((res) => {
        console.log('registerUse-res', res);
        const { data, success } = res.data;
        if(success) {
          ethNonce = data.ethNonce;
          ethAddress = data.ethAddress;
          localStorage.setItem('ethNonce', ethNonce);
          localStorage.setItem('ethAddress', ethAddress);
        }
      })
      // 没有注册
      if(ethNonce == null) {
        router.push('/inituser');
      } else { // 已经注册
        handleSignMessage(ethAddress, ethNonce).then((obj) => {
          console.log('ethAddress', obj.ethAddress);
          console.log('signature', obj.signature);
          userLogin(ethNonce, obj.signature);
        })
      }
    });
  }
  return (
    <div className={style.main}>
      <Header upmStatus={upmStatus} />
      <div className={style.content}>
        <div className={style.leftModule}>
          <div className={style.title}>CryptoGravity</div>
          <div className={style.subTitle}>Building the next-generation intelligent <br/>application cloud service platform</div>
          <div className={style.startBtn} onClick={() => {
            handleStartClick()
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