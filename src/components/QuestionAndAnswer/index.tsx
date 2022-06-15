import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Input } from 'antd';
import Image from 'next/image';
import style from './index.module.css';
import deleteBtnPic from '../../../public/delete-btn.png'
import addBtnPic from '../../../public/add-btn.png'

export default function Index() {
  const { TextArea } = Input;
  const [questionList, setQuestionList] = useState([{
    question:'',
    answer:''
  }]);
  const deleteQuestion = (index) => {
    questionList.splice(index,1);
    setQuestionList([...questionList]);
  }
  const addQuestion = () => {
    console.log('addQuestion');
    questionList.push({
      question:'',
      answer:''
    })
    setQuestionList([...questionList]);
  }
  return (
    <>
      {
        questionList.map((item, index) => {
          return (
            <div key={index} className={style.qaItem}>
              <div className={style.deletBtn} onClick={() => {
                deleteQuestion();
              }}>
                <Image src={deleteBtnPic} alt='deleteBtnPic'/>
              </div>
              <div className={style.title}>
                question 1
              </div>
              <Input style={{marginBottom: '24px',}} />
              <div className={style.title}>
                answer
              </div>
              <TextArea placeholder="Enter your Answer" autoSize={{ minRows: 4, maxRows: 4 }} />
            </div>
          )
        })
      }
      <div className={style.addQuestion} onClick={() => {
          addQuestion()
        }}>
        <div className={style.addBtnPic}>
          <Image src={addBtnPic} alt='addBtnPic'/>
        </div>
        <span className={style.addContent}>add</span>
      </div>
    </>
  )
}
