import React, { useState } from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import SelectedHead from '../SeleteHead';
import SelectedTag from '../SelectedTag';

import "antd/dist/antd.css";
import styles from './index.module.css';
import Image from 'next/image';
import twitterPic from '../../../public/twitter.png';
import telegramPic from '../../../public/telegram.png';
import instagramPic from '../../../public/instagram.png';
import defaultUserPic from '../../../public/default_user.png';

import demo1Pic from '../../../public/demo-1.png';
import demo2Pic from '../../../public/demo-2.png';
import demo3Pic from '../../../public/demo-3.png';
import demo4Pic from '../../../public/demo-4.png';
import demo5Pic from '../../../public/demo-5.png';
import demo6Pic from '../../../public/demo-6.png';
import demo7Pic from '../../../public/demo-7.png';

export default function Index(props) {
  const { onNext } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userPicIndex, setUserPicIndex] = useState(null);
  const [formdata, setFormdata] = useState({})
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
    }
  ]
  const { TextArea } = Input;
  const handleHeadImgChange = (imgIndex) => {
    setIsModalVisible(false);
    setUserPicIndex(imgIndex);
    setFormdata({...formdata, ...{ avatar:  headerPicArr[imgIndex].img}});
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <Row className={styles.userIamgeLine}>
            <Col span={5} className={styles.userImage}>
              <div className={styles.userImageWarp}>
                <Image src={userPicIndex == null ? defaultUserPic : headerPicArr[userPicIndex].img} alt={'defaultUserPic'}/>
              </div>
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
            autoComplete="off"
            labelAlign="left"
            size="large"
          >
            <Form.Item
              label="name"
              name="name"
            >
              <Input placeholder='Enter your name' onChange={ (event) => {
                setFormdata({...formdata, ...{ nickname: event.target.value }});
              }} />
            </Form.Item>
            <Form.Item
              label="tag"
              name="tag"
            >
              {/* 选择tag */}
              <div style={{height: '40.1px'}}>
                <SelectedTag onTagChange={(tagsVal) => {
                  setFormdata({...formdata, ...{ tags: tagsVal }});
                }}/>
              </div>
            </Form.Item>
            <Form.Item
              label="about me"
              name="about me"
            >
              <TextArea placeholder="Enter your Info" autoSize={{ minRows: 4, maxRows: 4 }} onChange={(event) => {
                setFormdata({...formdata, ...{ brief: event.target.value }});
              }} />
            </Form.Item>
            <Form.Item
              label="Instagram"
              name="Instagram"
            >
              <Input placeholder="Enter your Instagram id" onChange={(event) => {
                setFormdata({...formdata, ...{ instagramId: event.target.value }});
              }} suffix={<Image src={instagramPic} alt="instagramPic"/>}/>
            </Form.Item>
            <Form.Item
              label="Twitter"
              name="Twitter"
            >
              <Input placeholder="Enter your Twitter id" onChange={(event) => {
                setFormdata({...formdata, ...{ twitterId: event.target.value }});
              }} suffix={<Image src={twitterPic} alt="twitterPic"/>}/>
            </Form.Item>
            <Form.Item
              label="Telegram"
              name="Telegram"
            >
              <Input placeholder="Enter your telegram id" onChange={(event) => {
                setFormdata({...formdata, ...{ telegramId: event.target.value }});
              }} suffix={<Image src={telegramPic} alt="telegramPic"/>} />
            </Form.Item>
          </Form>
          <div className={styles.fromBottom}>
            <div className={'button'} onClick={() => {
              console.log('formdata', formdata);
              onNext();
            }}>Next</div>
          </div>
        </div>
      </div>
      {/* 选择头像 */}
      <SelectedHead headerPicArr={headerPicArr} isModalVisible={isModalVisible} handleOk={handleHeadImgChange}/>
    </>
  )
}
