import React from 'react'
import Image from 'next/image';
import Header from "../../components/Header";
import style from './index.module.css';
import userDefaultPic from '../../../public/userDefaultPic.png'
import instagramSolidPic from '../../../public/instagram-solid.png';
import telegramSolidPic from '../../../public/telegram-solid.png';
import twitterSolidPic from '../../../public/twitter-solid.png';
import bitLogo from '../../../public/bit-logo.png';
import ethLogo from '../../../public/eth-logo.png';
import usdtLogo from '../../../public/usdt-logo.png';
import rippleLogo from '../../../public/ripple-logo.png';
import moreBtn from '../../../public/more-btn.png';

export default function Index() {
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
  return (
    <div>
      <Header/>
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
          <span>Otherdeed is the key to claiming land in Otherside. Each have a unique blend of environment and sediment — some with resources, some home to powerful artifacts. And on a very few, a Koda roams.</span>
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
            <div>共持有12种token，共价值 $46,764.54</div>
            <div>其中持有最多的是Ethereum 价值$56,345.43</div>
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
          <div className={style.showMoreWrap}>
            <Image width={24} height={24} src={moreBtn} alt="moreBtn" />
            <div className={style.showMoreContent}>show more</div>
          </div>
        </div>
      </div>
    </div>
  )
}
