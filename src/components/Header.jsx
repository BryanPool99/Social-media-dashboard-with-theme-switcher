import React from 'react';
import '../css/Header.css'
function Header({ title,description,mode,isDark,changeTheme }) {
    return (
      <div className={isDark ? 'container-header dark' :'container-header'}>
       <div className='info'>
        <div className={isDark ? 'title dark':'title'}>
            <h1>{title}</h1>
        </div>
        <div className={isDark ? 'description dark':'description'}>
            <p>{description}</p>
        </div>
       </div>
       <hr/>
       <div className='container-theme-switch'>
            <p className={isDark ? 'dark' : ''}>{mode}</p>
            <div 
                className={isDark ? 'button-switch dark' : 'button-switch'}
                onClick={changeTheme}>
                <div className={isDark ? 'toogle dark' : 'toogle'}></div>
            </div>
       </div>
      </div>
    );
  }
export default Header;