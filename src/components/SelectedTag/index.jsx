import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../Modal';
import styles from './index.module.css';
import addTagPic from '../../../public/add-tag.png';
import deleteTagPic from '../../../public/delete-tag.png';
export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const newTagList = ['Boowen','Boowen','Boowen','Boowen','Boowen','Boowen','Boowen','Boowen','Boowen','Boowen','Boowen','Boowen','Boowen','Boowen'];
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.tagContent}>
          <div className={styles.tagItem}>
            boy
          </div>
          <div className={styles.tagItem}>
            car
          </div>
        </div>
        <Image className={styles.addTagBtn} src={addTagPic} alt='tagAddPic' onClick={() => {
          setIsModalVisible(true);
        }} />
      </div>
      <Modal visible={isModalVisible} title='tag' onOk={() => {
        setIsModalVisible(false);
      }}>
        <div className={ styles.modalContent }>
          <div className={ styles.tagAreaWrap }>
            <div className={ styles.tagAreaInputArea}>
              {
                newTagList.map((item, index) => {
                  return <div className={ styles.newTagItem } key={index}>
                    {item} <Image className={styles.deleteTagBtn} src={deleteTagPic} alt="deleteTagPic"/>
                  </div>
                })
              }
              <input className={styles.addTagInput} type="text" placeholder='多个标签请用回车分隔' />
            </div>
            <div className={styles.newTagNum}>
              <span>{newTagList.length}/3</span>
            </div>
            <div></div>
          </div>
        </div>
      </Modal>
    </>
  )
}
