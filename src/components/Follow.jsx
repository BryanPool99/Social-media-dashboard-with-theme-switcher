import React from 'react';
import '../css/Follow.css'
function Follow({ imgSM,user,numF,text,imgArrow,newF,isDark } ) {
    return (
      <div className={isDark ? 'container-follow dark' :'container-follow'}>
        <div className={isDark ? 'social-media dark':'social-media'}>
            <img 
                className='icon-social-media'
                src={require(`../img/icon-${imgSM}.svg`)}
                alt={imgSM}
            />
            <p>{user}</p>
        </div>
        <div className={isDark ? 'number dark': 'number'}>
            <h2>{numF}</h2>
            <p className={isDark ? 'dark': ''}>{text}</p>
        </div>
        <div className='newFollow'>
            <img 
            className='icon-arrow'
            src={require(`../img/icon-${imgArrow}.svg`)}
            alt={imgArrow}
            />
            <p>{newF}</p>
        </div>
      </div>
    );
  }
  
  export default Follow;