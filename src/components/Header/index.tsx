import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image'
import logoPic from '../../../public/logo.png';

export default function Header() {
  return (
    <div className={styles.headerWrap}>
      <div className={styles.content}>
        <Image className={styles.logoImage} src={logoPic} alt="logo" />
      </div>
    </div>
  )
}
