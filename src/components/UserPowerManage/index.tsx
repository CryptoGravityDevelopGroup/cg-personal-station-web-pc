import React, { useState } from 'react';
import Image from 'next/image';
import upmBtnPic from '../../../public/upm-btn.png';
import logoutPic from '../../../public/logout.png';
import questionPic from '../../../public/question.png';
import userProfilePic from '../../../public/user-profile.png';

import styles from './index.module.css';
export default function Index() {
  const [menuListStatus, setMenuListStatus] = useState(false);
  return (
    <div className={styles.warp}>
      <Image src={upmBtnPic} alt="upmBtnPic" onClick={() => {
        setMenuListStatus(!menuListStatus);
      }} />
      {
        menuListStatus && 
        <div className={styles.menuList}>
          <div className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <Image src={userProfilePic}  alt="userProfilePic"/>
            </div>
            <span className={styles.itemName}>编辑个人资料</span>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <Image src={questionPic}  alt="questionPic"/>
            </div>
            <span className={styles.itemName}>编辑 Q&A</span>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <Image src={logoutPic}  alt="logoutPic"/>
            </div>
            <span className={styles.itemName}>退出</span>
          </div>
        </div>
      }
    </div>
  )
}
