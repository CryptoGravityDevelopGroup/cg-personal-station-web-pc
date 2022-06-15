import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Row, Col, Modal } from 'antd';
import "antd/dist/antd.css";
import styles from './index.module.css';
import Image from 'next/image';
import twitterPic from '../../../public/twitter.png';
import telegramPic from '../../../public/telegram.png';
import instagramPic from '../../../public/instagram.png';
import defaultUserPic from '../../../public/default_user.png';
import closePic from '../../../public/close.png';
import tickPic from '../../../public/tick.png';

import demo1Pic from '../../../public/demo-1.png';
import demo2Pic from '../../../public/demo-2.png';
import demo3Pic from '../../../public/demo-3.png';
import demo4Pic from '../../../public/demo-4.png';
import demo5Pic from '../../../public/demo-5.png';
import demo6Pic from '../../../public/demo-6.png';
import demo7Pic from '../../../public/demo-7.png';

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [headerPicIndex, setHeaderPicIndex] = useState(null);
  const headerPicArr = [
    {
      img:demo1Pic
    },{
      img:demo2Pic
    },{
      img:demo3Pic
    },{
      img:demo4Pic
    },{
      img:demo5Pic
    },{
      img:demo6Pic
    },{
      img:demo7Pic
    },{
      img:demo7Pic
    },{
      img:demo7Pic
    }
  ]
  const { TextArea } = Input;
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleHeaderPicClick = (index) => {
    setHeaderPicIndex(index);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <Row className={styles.userIamgeLine}>
            <Col span={5} className={styles.userImage}>
              <Image src={defaultUserPic} alt={'defaultUserPic'}/>
            </Col>
            <Col span={19} className={styles.userImageUploadBtn}>
              <Button type="primary" ghost size='large' shape='round' onClick={() => {
                showModal();
              }}>
                修改头像
              </Button>
            </Col>
          </Row>
          <Form
            name="useInfo"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign="left"
            size="large"
          >
            <Form.Item
              label="name"
              name="name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="tag"
              name="tag"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="about me"
              name="about me"
            >
              <TextArea placeholder="Enter your Info" autoSize={{ minRows: 4, maxRows: 4 }} />
            </Form.Item>
            <Form.Item
              label="Instagram"
              name="Instagram"
            >
              <Input placeholder="Enter your Instagram id" suffix={<Image src={instagramPic} alt="instagramPic"/>}/>
            </Form.Item>
            <Form.Item
              label="Instagram"
              name="Instagram"
            >
              <Input placeholder="Enter your Twitter id" suffix={<Image src={twitterPic} alt="twitterPic"/>}/>
            </Form.Item>
            <Form.Item
              label="Telegram"
              name="Telegram"
            >
              <Input placeholder="Enter your telegram id" suffix={<Image src={telegramPic} alt="telegramPic"/>} />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className={styles.modal}>
        <div className={styles.modalTitleWrap}>
          <span className={styles.title}>请选择头像</span>
          <Image className={styles.modalClose} src={closePic} alt="close" />
        </div>
        <div className={styles.modalContent}>
          <div className={styles.headerPicWrap}>
            {
              headerPicArr.map((item, index) => {
                return (
                  <div key={index} className={styles.headerPicItem} onClick={() => {
                    handleHeaderPicClick(index);
                  }}>
                    {/* <Image src={item.img} alt='headerPic' /> */}
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
        </div>
      </div>
      <div className={styles.modalMask}></div>
    </>
  )
}
