import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from "../../components/Header";
import style from './index.module.css';
import { getUserInfo } from '../../api/user';
import userDefaultPic from '../../../public/userDefaultPic.png'
import instagramSolidPic from '../../../public/instagram-solid.png';
import telegramSolidPic from '../../../public/telegram-solid.png';
import twitterSolidPic from '../../../public/twitter-solid.png';
import bitLogo from '../../../public/bit-logo.png';
import ethLogo from '../../../public/eth-logo.png';
import usdtLogo from '../../../public/usdt-logo.png';
import rippleLogo from '../../../public/ripple-logo.png';
import moreBtn from '../../../public/more-btn.png';
import demo1Pic from '../../../public/demo-1.png';
import demo2Pic from '../../../public/demo-2.png';
import demo3Pic from '../../../public/demo-3.png';
import demo4Pic from '../../../public/demo-4.png';
import demo5Pic from '../../../public/demo-5.png';
import demo6Pic from '../../../public/demo-6.png';
import arrowUpPic from '../../../public/arrow-up.png';
import arrowDownPic from '../../../public/arrow-down.png';

export default function Index() {
  const router = useRouter();
  const [QAList, setQAList] = useState([
    {
      status: false,
      question: 'What is graphic design?',
      answer: "To make your first listing,Design is all around us. It's more than making things pretty. Learn more about what design is and the role it plays in our world today.Design is all around us. It's more than making things pretty. Learn more about what design is and the role it plays in our world today."
    },{
      status: false,
      question: 'Accessibility and inclusion',
      answer: "To make your first listing,Design is all around us. It's more than making things pretty. Learn more about what design is and the role it plays in our world today.Design is all around us. It's more than making things pretty. Learn more about what design is and the role it plays in our world today."
    },{
      status: false,
      question: 'How to connect wallet',
      answer: "To make your first listing,Design is all around us. It's more than making things pretty. Learn more about what design is and the role it plays in our world today.Design is all around us. It's more than making things pretty. Learn more about what design is and the role it plays in our world today."
    }
  ]);
  const tokenList = [
    {
      tokenLogo: ethLogo,
      tokenName: 'Ethereum',
      tokenNum: '65.35',
      tokenPrice:'$85,814.75'
    },{
      tokenLogo: bitLogo,
      tokenName: 'Bitcoin',
      tokenNum: '40.08',
      tokenPrice:'$59,080.46'
    },{
      tokenLogo: usdtLogo,
      tokenName: 'Ethereum',
      tokenNum: '65.35',
      tokenPrice:'$30,670.40'
    },{
      tokenLogo: rippleLogo,
      tokenName: 'Ethereum',
      tokenNum: '65.35',
      tokenPrice:'$25,524.54'
    }
  ];
  const headerPicArr = [
    {
      img:demo1Pic,
      title: 'Community x Community x Community x',
      price: '2.45'
    },{
      img:demo2Pic,
      title: 'Community x Community x Community x',
      price: '2.45'
    },{
      img:demo3Pic,
      title: 'Community x Community x Community x',
      price: '2.45'
    },{
      img:demo4Pic,
      title: 'Community x Community x Community x',
      price: '2.45'
    },{
      img:demo5Pic,
      title: 'Community x Community x Community x',
      price: '2.45'
    },{
      img:demo6Pic,
      title: 'Community x Community x Community x',
      price: '2.45'
    }
  ]
  const handleQuestionClick = (index) =>{
    QAList[index].status = !QAList[index].status;
    setQAList([...QAList]);
  }
  useEffect(() => {
    getUserInfo({
      "ethAddress":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      "tokenType":"nft"
    }).then((res) => {
      console.log('res', res);
    })
  }, []);
  return (
    <div>
      <Header upmStatus={true} />
      <div className={style.profileWrap}>
        <div className={style.userHeadPic}>
          <Image src={userDefaultPic} alt='userDefaultPic' />
        </div>
        <div className={style.userName}>
          leo zeng
        </div>
        <div className={style.tagWrap}>
          <div className={style.tagItem}>
            Reporter
          </div>
          <div className={style.tagItem}>
            Blogger
          </div>
          <div className={style.tagItem}>
            Server
          </div>
        </div>
        <div className={style.introduce}>
          <span>Otherdeed is the key to claiming land in Otherside. Each have a unique blend of environment and sediment ??? some with resources, some home to powerful artifacts. And on a very few, a Koda roams.</span>
        </div>
        <div className={style.leftSliderList}>
            <div className={style.leftSliderItem}>
              <Image width={20} height={20} src={instagramSolidPic} alt="instagramSolidPic" />
            </div>
            <div className={style.leftSliderItem}>
              <Image width={20} height={20} src={telegramSolidPic} alt="telegramSolidPic" />
            </div>
            <div className={style.leftSliderItem}>
              <Image width={20} height={20} src={twitterSolidPic} alt="twitterSolidPic" />
            </div>
          </div>
      </div>
      <div className={style.tokenWrap}>
        <div className={style.tokenDescribe}>
          <div className={style.profileTitle}>
            Token
          </div>
          <div className={style.describeContent}>
            <div>?????????12???token???????????? $46,764.54</div>
            <div>????????????????????????Ethereum ??????$56,345.43</div>
          </div>
        </div>
        <div className={style.tokenList}>
          {
            tokenList.map((item, index) => {
              return (
                <div className={style.tokenItem} key={index}>
                  <div className={style.tokenLogo}>
                    <Image src={item.tokenLogo} alt='tokenLogo' />
                  </div>
                  <div className={style.tokenInfo}>
                    <div className={style.tokenName}>{item.tokenName}</div>
                    <div className={style.tokenNum}>{item.tokenNum}</div>
                    <div className={style.tokenPrice}>{item.tokenPrice}</div>
                  </div>
                </div>
              )
            })
          }
          <div className={style.showMoreWrap}  onClick={() => {
            router.push('/tokenDetail');
          }}>
            <Image width={24} height={24} src={moreBtn} alt="moreBtn" />
            <div className={style.showMoreContent}>show more</div>
          </div>
        </div>
      </div>
      <div className={style.nftWrap}>
        <div className={style.nftDescribe}>
          <div className={style.nftPlateTitle}>
            NFT
          </div>
          <div className={style.nftDescribeContent}>
            <div>?????????120???NFT????????????24???????????????</div>
            <div>??????2021???10???31??????????????????nft?????????NFT????????????24eth?????????xx???xx???xx?????????nft???????????????????????????</div>
          </div>
          <div className={style.nftShowMore} onClick={() => {
            router.push('/nftDetail');
          }}>
            <div className={style.showMoreContent}>show more</div>
            <Image width={18} height={18} src={moreBtn} alt="moreBtn" />
          </div>
        </div>
        <div className={style.nftList}>
          {
            headerPicArr.map((item,index) => {
              return (
                <div className={style.nftItem} key={index}>
                  <div className={style.nftImage}>
                    <Image src={item.img} alt="NFTImage"/>
                  </div>
                  <div className={style.nftInfo}>
                    <div className={style.nftTitle}>{item.title}</div>
                    <div className={style.nftPrice}>{item.price} ETH</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={style.QAWrap}>
        <div className={style.QADescribe}>
          <div className={style.QATitle}>
            Q&A
          </div>
        </div>
        <div className={style.QAList}>
          {
            QAList.map((item, index) => {
              return (
                <div className={style.QAItem} key={index}>
                  <div className={style.question}>
                    <div>{item.question}</div>
                    {
                      item.status ? (
                        <div className={style.arrow} onClick={() => {
                          handleQuestionClick(index);
                        }}>
                          <Image src={arrowUpPic} alt='arrowUpPic'/>
                        </div>
                      ) : (
                        <div className={style.arrow} onClick={() => {
                          handleQuestionClick(index);
                        }}>
                          <Image src={arrowDownPic} alt='arrowDownPic'/>
                        </div>
                      )
                    }
                  </div>
                  {
                    item.status ? (
                      <div className={style.answer}>{item.answer}</div>
                    ) : ''
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
