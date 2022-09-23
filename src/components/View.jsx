import React from 'react';
import '../css/View.css'
function View({ text,number,imgSM,imgArrow,percent,isDark }) {
    return (
      <div className={isDark ? 'container-view dark' : 'container-view'}>
        <div className='info-number'>
            <p className={isDark ? 'dark': ''}>{text}</p>
            <h3 className={isDark ? 'dark': ''}>{number}</h3>
        </div>
        <div className='img-percent'>
            <img 
                className='icon-social-media'
                src={require(`../img/icon-${imgSM}.svg`)}
                alt={imgSM}
            />
            <div className='percent'>
                <img 
                    className='icon-arrow'
                    src={require(`../img/icon-${imgArrow}.svg`)}
                    alt={imgArrow}
                />
                <p>{percent}</p>
            </div>
        </div>
      </div>
    );
  }
export default View;