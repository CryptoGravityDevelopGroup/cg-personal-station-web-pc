import React from 'react';
import Image from 'next/image';
import Header from "../../components/Header";
import style from './index.module.css';
import { useRouter } from 'next/router';
import startPic from '../../../public/startPic.png';
import { connectWallte } from '../../utils/tool';
import { login } from '../../api/user';

const Main = function () {
  const router = useRouter();
  const handleStartClick = () => {
    connectWallte().then(() => {
      login({
        "ethAddress": window.ethereum.selectedAddress,
        "message": 'asd', // ???
        "signature": 'asd', // ???
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
    });
  }
  return (
    <div className={style.main}>
      <Header upmStatus={true} />
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