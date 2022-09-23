import './App.css';
import Follow from './components/Follow';
import Header from './components/Header';
import View from './components/View';
import React, { useState } from 'react';
function App() {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className={!isActive ?'main-container dark':'main-container'}>
      <Header
      title='Social Media Dashboard'
      description='Total Followers: 23,004'
      mode='Dark Mode'
      isDark={!isActive}
      changeTheme={handleToggle}
      />
      <section className='section-follow'>
        <Follow
          isDark={!isActive}
          user='@nathanf'
          imgSM='facebook'
          numF='1987'
          text='Followers'
          imgArrow='up'
          newF='12 Today'
        />
        <Follow
        isDark={!isActive}
          user='@nathanf'
          imgSM='twitter'
          numF='1044'
          text='Followers'
          imgArrow='up'
          newF='99 Today'
        />
        <Follow
        isDark={!isActive}
          user='@realnathanf'
          imgSM='instagram'
          numF='11k'
          text='Followers'
          imgArrow='up'
          newF='1099 Today'
        />
        <Follow
        isDark={!isActive}
          user='Nathan F.'
          imgSM='youtube'
          numF='8239'
          text='Subscribers'
          imgArrow='down'
          newF='12 Today'
        />
      </section>
      <div  className={!isActive ? 'Text-view dark':'Text-view'}>
        <h2>Overview - Today</h2>
      </div>
      <section className='section-view'>
        <View
          isDark={!isActive}
          text='Page Views'
          number='87'
          imgSM='facebook'
          imgArrow='up'
          percent='3%'
        />
        <View
          isDark={!isActive}
          text='Likes'
          number='52'
          imgSM='facebook'
          imgArrow='down'
          percent='2%'
        />
        <View
          isDark={!isActive}
          text='Likes'
          number='5462'
          imgSM='instagram'
          imgArrow='up'
          percent='2257%'
        />
        <View
          isDark={!isActive}
          text='Profile Views'
          number='52k'
          imgSM='instagram'
          imgArrow='up'
          percent='1375%'
        />
        <View
          isDark={!isActive}
          text='Retweets'
          number='117'
          imgSM='twitter'
          imgArrow='up'
          percent='303%'
        />
        <View
          isDark={!isActive}
          text='Likes'
          number='507'
          imgSM='twitter'
          imgArrow='up'
          percent='553%'
        />
        <View
          isDark={!isActive}
          text='Likes'
          number='107'
          imgSM='youtube'
          imgArrow='down'
          percent='19%'
        />
        <View
          isDark={!isActive}
          text='Total Views'
          number='1407'
          imgSM='youtube'
          imgArrow='down'
          percent='12%'
        />
      </section>
    </div>
  );
}

export default App;
