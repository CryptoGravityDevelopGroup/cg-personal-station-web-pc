/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import Modal from '../Modal';
import tickPic from '../../../public/tick.png';

export default function Index(props) {
  const { headerPicArr, isModalVisible, handleOk } = props;
  const [headerPicIndex, setHeaderPicIndex] = useState(null);
  const handleHeaderPicClick = (index) => {
    setHeaderPicIndex(index);
  };
  return (
    <>
      <Modal visible={isModalVisible} title='请选择头像' onOk={() => {
        handleOk(headerPicIndex);
      }}>
        <div className={styles.headerPicWrap}>
          {
            headerPicArr.map((item, index) => {
              return (
                <div key={index} className={styles.headerPicItem} onClick={() => {
                  handleHeaderPicClick(index);
                }}>
                  <img className={styles.headerPicImg} layout="fill" src={`${item.img}`} alt='headerPic' />
                  {
                    index == headerPicIndex && <div className={styles.tickWrap}>
                      <Image src={tickPic} alt='tickPic'/>
                    </div>
                  }
                </div>
              )
            })
          }
        </div>
      </Modal>
    </>
  )
}
