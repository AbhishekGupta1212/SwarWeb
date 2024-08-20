import React from 'react';
import styles from './Header.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Header = () => {
  const logos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2719b87237d6e90423ac66775623d07fecd9ee0282a782e400e2884a7607157f?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 1", className: styles.logo1 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d3b30c60e4e6dc008f1d2be5adbdfd73322fdb9f29a115c521de4f8551fb628?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 2", className: styles.logo2 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e7599a5c4295868c9bd5afdab96ce0c179d7072c0aaa24be85e4636205ef327?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 3", className: styles.logo3 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/36ba00045356ae3aa83dbf49f01a15d8acfcf54379b32d5a52e99d05cf9eb0d3?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 4", className: styles.logo4 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bbac70675d23bae20ba9e5e098cbe7304fca2d6f5ba49993075b46a5621d9dd?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 5", className: styles.logo5 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a5fff75043ce58b7bf4182498cede6dd38d1366090a639e95752b2478f5028d?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 6", className: styles.logo6 },
  { src: "https://s3-alpha-sig.figma.com/img/0772/486f/7c6627120952b3ab53ef215f21c16ab6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RVeBQjlBeqEKiVbSOrdleCRad-WQAA8FUZjRYWXUFUsP8sC90SFJzBL8dYVXihU2DhYnf6Mv5nWd7cwSLmnecsWCiMeCO1f6etC-DmLxvN6I-41v3rd0wAJRgFjKkQt21Ekdzv5phaPBGwFdeu3JYX75V-faae4Y2uHll45bwDLHBgQn~YZZT5~rcniPhschUXilaIz3XPg6xIdPwiuva90Mfu4AxIULGsKUE1K3sX4N7~mT4HkNzwHDsmikSiPTx1mjQQL9we7wncEiN-dsiT1LxnuPnseZF8JUqpK3V8AleOgPp6o9FBEgRd8Ieer4hEAOhjU~HN7qjSpqS0YNvQ__", alt: "Company logo 7", className: styles.logo7 },
  { src: "https://s3-alpha-sig.figma.com/img/55ff/252e/602bb7009cd55df980d28df5fcdfef05?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1r4KgWJBoG6YTXV7Nl-DTjNWEauoQVsZEcLmQypOzK8XnAL82avOUsYkHKYFcfjvpHQThSUCmDUyc5V4Q4yXcvOk9hsbSfwabSSJQUXeabPvpDytDB2xGcQpQqsarpaoY6~tuSp6yKvUP-GL63DsRCF8FSsDZHim9Cs9jhcFJhq48y9RFNO28ZolQ6V871koLXH-sPQZtptFjvXagtQyokmOpw08wFkfsKOuqLhW-Oa9q1LMLhU0uGskodOpdr8UGoVn6vT3YghhfFZbAOFVrt-G8iNwvCx7hUu2KRQEit4JbL68nj4cKGQ~EOVg3qzJh1ue6htA7Xnfwx4-KDWCg__", alt: "Company logo 8", className: styles.logo8 },
  { src: "https://s3-alpha-sig.figma.com/img/1002/b8a2/c95cc1cbe90c81b6d651870f8e181293?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X3tRcyS6J2i7v5fMa~VNDYyYAYIUqJXSrUSRmXahoqwtCChT1Ky7AUvjUnHPQUyXGIkNdJyrb0Ffl8d6MwHSG6CQwYfKfzYmR56gFLWCKjdJsCPoi1ZDWLEj8kuFgdxbklo8VgkQ~UjYeniVN3-H29WJD9~yNqlIP3QYktJqiAo8PosMvRJ47nl-h-KB9wEIkcvyZ8zi25RciBkL4VsaQCa4-H7nmyDCe943XJTn6b8r8WxaFwd7N9SJ~1tScrr4l4GbPwQv8ClQsotMpiSmpvZA~KCDBvces14Zy4TMmHW47H0vJbPW6TBji7MwMoL7aJPnLUl~lYZSUU8wudLpqA__", alt: "Company logo 9", className: styles.logo9 },
  // { src: "https://s3-alpha-sig.figma.com/img/54a6/47c0/5281406d0837c721bf0134791afe2ca1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgGbR4ed~3WBpm9Y8NX7kmNvQnHx-VPIbHyvFw7b2yyTVMwjtT9s-FcThjRW8lhQjO~pgxKN2mqhdTh99nDgnaliu57wz0eFs5uNp5i9QbvI4KD0ivDTYs5z7JR9YAZ9I~oUIoZUhjUzibo0VUaP2vWRrGCO5qZJ5uABixD-n48cB59o9eLZpSxki9kFJzX4B9xun~5pUBB7PErMqVQ2~CGoct65PugGhm9GP8LHfGH6pJKrMG5wD9bnFzTHwuuSgMG1psplsPPHhV8BF3QqD-lemWRWpf9COejYngJcQj9Sbnq7LVZuF4CDxlMLRfv0xp20Lj9Ex4S9TS~YTrqTkw___", alt: "Company logo 10", className: styles.logo10 },
  { src: "https://s3-alpha-sig.figma.com/img/3fb1/ee4e/fa9c5e169c9da7a9ae74110eabbb2125?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OxCdMkzp2kKtReinoLCEf7sYsm3ntlgRImgWFEUR0FX1x6xp5GwrnYguz242oLBkov7qU-L26IPnF0WfTAI0N-AfJLTVQNU9zP9GL0fydFRLk6KKRjTYkjV2jq2O7a0cu46Is0wz1qCVdM0zwAMFDO7cU~xLTivtIyTX4dCVAcnz0rY-8~tbdvhbvzUdqpCJtPbGC9oxNSXbjAZQWst0gBANrZnRHaYsQga4pXfNcuLBTbB3OJksyI8-hox5WkDLSVt6k4jZLZPMJHeX03gq-s8PSwZp6d6UYe~IWD~ifotepn~cNQvJtIykwvKfsp-870QesI9~Uzgx8ETk~2slkg__", alt: "Company logo 11", className: styles.logo11 },
  { src: "https://s3-alpha-sig.figma.com/img/b8f5/d250/8e620a260ea3bbcf05a8053f03842e13?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bOloQg8B2pXsGBihLf8aURR2~QVG1AXcGNTmVMXuWaWTq4ynfxH03jbEtqb9h-Fs15W4wuUNd5WSHLPDFurHYn5XXNKUtjinx3MoJOtEEQI4XmifbvmIzGgdx1DOpqpn~JAIEqdNJln5MBbwnLFFL5kuIi4b9MfFP7ot4r8-pu1eN4W-t2Sc8W3M03jFzFUdbYO704xCKcOwZPtRNJGAvzzXoTxIQ1lRqKIoIYg3NQ2kGwZFxoQ02-xL0Y-nwTP5yc6Cqv0zqc0CPnI~QN0dt78UwyQ~jAB1osNunTAw-nLoy6Nak~bEc6w~flYzUmF2~C9gLmWKpaNpFMD4yzu9wg__", alt: "Company logo 12", className: styles.logo12 },
  { src: "https://s3-alpha-sig.figma.com/img/54c0/0243/a553a3ba5d9d8abd79f3d73a4d00506b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IEqWi~OJ4Li2AQSwx-o7tQuo87CuvbtGTOvWEOGKaB855TLohpklTkhs2makLXRiljMdaTdNr3k0kC1IeJSDi6BcDuoDf42oc5rbaZSI4UuzLL9YcCvWYOptTai9ACIHW2gFqUU4-NkjUVKIXXsjS-PIyeAgOU67HSpPJSxEt2qdhlBVXfgUlji7B54YRpz01rsDnwubl06hf0gVzgiX0EZ6pkQLG19Hd4hBuhaPtibfm0pnuCM5jzt2ABsABnej9Zr-Z7Fs5xZNmHrjyX2xYUcwIJ9wd9GtD1eSMbO6dZbRiRfbvC0Z1sJkVsoef3GW~VE~BYVAw7kAKFWcA-GI7w__", alt: "Company logo 13", className: styles.logo13 },
  { src: "https://s3-alpha-sig.figma.com/img/681f/d1d3/f0ddae7b1ce8dc944c13239e89a92d5e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqeWUAk1VLlw7tRVofGGTdrhaBKeEtVgCvchiRZT1CtULJdlBSqMqPYHRlhfpgLR421MfJnnlNsVYM8KFxLsEPIYBzNVFeNR-TrzujSukjDCXVxGJcOSFl0pliJP1mfmZl16meOh5tbAmW6L3Te1WvcouNgjaViYxMAYY3xKl1wtax8PH1WJpCAxx54oNfusaNRMEvPUKqVGYy0TEfJJnj2OwWxamumzZ1DAVSfQK6Rh1gWBJwTqLinJeq832m8rbgB5T0OnbBWK20yyhSfVqvwB2iJkKFo66GcDDkIJhuVhRPv~nUe7uRQgqhlpbx007Lb4E9l2sCbECAKLvMlA8Q__", alt: "Company logo 14", className: styles.logo14 },
  ];

  return (
 <Carousel
additionalTransfrom={0}
arrows={false}
autoPlay
autoPlaySpeed={500}
centerMode={false}
containerClass="container-with-dots"
customTransition="all 1s linear"
dotListClass=""
draggable
focusOnSelect={false}
infinite
itemClass=""
className={styles.logoContainer}
keyBoardControl
minimumTouchDrag={80}
pauseOnHover
renderArrowsWhenDisabled={false}
renderButtonGroupOutside={false}
renderDotsOutside={false}

responsive={{
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 2,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 2,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 50
  }
}}
rewind={false}
rewindWithAnimation={false}
rtl={false}
shouldResetAutoplay
showDots={false}
sliderClass=""

slidesToSlide={2}
swipeable
transitionDuration={1000}
>
  {logos.map((item, index) => (
<div  key={index} className={styles.logoWrapper}>
<img
      src={item.src}
      className={styles[`item${index + 1}`]}
    />
</div>
  ))}
</Carousel>



  );
};

export default Header;
