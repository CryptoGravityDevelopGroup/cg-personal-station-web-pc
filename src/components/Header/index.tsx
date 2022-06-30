import React from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import Image from 'next/image'
import logoPic from '../../../public/logo.png';
import UserPowerManage from '../UserPowerManage';
import goBackIcon from '../../../public/curved-arrow-right.png';

export default function Header(props) {
  const { upmStatus, goHomeBtnStatus } = props; 
  const router = useRouter();
  const goHome = () => {
    router.push('/profile');
  }
  return (
    <div className={styles.headerWrap}>
      <div className={styles.content}>
        <Image className={styles.logoImage} src={logoPic} alt="logo" onClick={() => {
          goHome()
        }} />
        <div className={styles.headeLeft}>
          { upmStatus && <UserPowerManage/> } 
          {
            goHomeBtnStatus ? (
              <div className={styles.goHomeBtn} onClick={() => {
                goHome()
              }}>
                <div className={styles.goBackIcon}>
                  <Image src={goBackIcon} alt="goBackIcon" />
                </div>
                <div className={styles.goBackContent}>返回主页</div>
              </div>
            ) : ''
          }
        </div>
      </div>
    </div>
  )
}
