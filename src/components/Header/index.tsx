import React from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import Image from 'next/image'
import logoPic from '../../../public/logo.png';

export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.headerWrap}>
      <div className={styles.content}>
        <Image className={styles.logoImage} src={logoPic} alt="logo" onClick={() => {
          router.push('/');
        }} />
      </div>
    </div>
  )
}
