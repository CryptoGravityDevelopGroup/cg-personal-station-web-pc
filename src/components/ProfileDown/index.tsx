import React from 'react'
import Image from 'next/image';
import style from './index.module.css';
import { useRouter } from 'next/router'
import successPic from '../../../public/successPic.png';
export default function Index() {
  const router = useRouter();
  return (
    <div className={style.content}>
        <div className={style.successPicWrap}>
          <Image src={successPic} alt='successPic' />
        </div>
        <div className={style.title}>搭建完成</div>
        <div className={style.tips}>这是提示这是提示这是提示这是提示这是提示这是提示</div>
        <div className={'button'} onClick={() => {
          router.push('/');
        }}>进入主页</div>
    </div>
  )
}
