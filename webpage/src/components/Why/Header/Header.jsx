import React from 'react';
import styles from './Header.module.css';
import logo1 from '../../Images/logo1.png'
import logo2 from '../../Images/logo2.png'
import logo3 from '../../Images/logo3.png'
import logo4 from '../../Images/logo4.png'
import logo5 from '../../Images/logo5.png'
import logo6 from '../../Images/logo6.png'


const Header = () => {
const logos=[
{src:logo1 ,alt:'logo1' ,className:styles.logo1},
{src:logo2 ,alt:'logo2',className:styles.logo2},
{src:logo3 ,alt:'logo3',className:styles.logo3},
{src:logo4 ,alt:'logo4',className:styles.logo4},
{src:logo5 ,alt:'logo5',className:styles.logo5},
{src:logo6 ,alt:'logo6',className:styles.logo6},
]

  return (
    <>
        <h1>OUR COMMUNITY MEMBERS COME FROM</h1>
<div className={styles.logoContainer}> 

 {logos.map((item, index) => (
<div  key={index} className={styles.logoWrapper}>
<img
      src={item.src}
      className={`${styles.item} ${item.className}`}
      alt={index}
    />
</div>
  ))}
</div>
    </>

  );
};

export default Header;
