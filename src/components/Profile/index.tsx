import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import "antd/dist/antd.css";
import styles from './index.module.css';
import Image from 'next/image';
import twitterPic from '../../../public/twitter.png';
import telegramPic from '../../../public/telegram.png';
import instagramPic from '../../../public/instagram.png';
import defaultUserPic from '../../../public/default_user.png';

export default function index() {
  const { TextArea } = Input;
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <Row className={styles.userIamgeLine}>
          <Col span={5} className={styles.userImage}>
            <Image src={defaultUserPic} alt={'defaultUserPic'}/>
          </Col>
          <Col span={19} className={styles.userImageUploadBtn}>
            <Button type="primary" ghost size='large' shape='round'>
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
  )
}
