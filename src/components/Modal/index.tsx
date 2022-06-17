import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import styles from './index.module.css';
import closePic from '../../../public/close.png';

export default function Index(props) {
  const { visible, children, onOk, title } = props;
  
  const handleOk = () => {
    onOk && onOk();
  };
  const modalTemplate =  (
    <>
      {
        visible && (
          <>
            <div className={styles.modal}>
              <div className={styles.modalTitleWrap}>
                <span className={styles.title}>{title}</span>
                <Image className={styles.modalClose} src={closePic} alt="close" onClick={() => {
                  handleOk();
                }} />
              </div>
              <div className={styles.modalContent}>
                {children}
              </div>
              <div className={styles.modalBottom}>
                <div className={'button'} onClick={() => {
                  handleOk();
                }}>Ok</div>
              </div>
            </div>
            <div className={styles.modalMask} onClick={() => {
              handleOk();
            }}></div>
          </>
        )
      }
    </>
  )

  return ReactDOM.createPortal(modalTemplate, document.getElementsByTagName('body')[0]);
}
