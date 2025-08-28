import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>Mis últimos trabajos</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => (
                <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer" className="mywork-card">
                    <div className="mywork-img-wrapper">
                        <img src={work.w_img} alt={work.w_name + ' - imagen del proyecto'} loading="lazy" decoding="async" />
                    </div>
                    <div className="mywork-info">
                        <h3 className="mywork-title-name">{work.w_name}</h3>
                        <p className="mywork-desc">{work.w_desc}</p>
                    </div>
                </a>
            ))}
        </div>
        <div className="mywork-showmore">
            <a href="https://github.com/Julian-Enable" target="_blank" rel="noopener noreferrer" className="showmore-link">
                <p>Ver más</p>
                <img src={arrow_icon} alt="Ver más" />
            </a>
        </div>
    </div>
  )
}

export default MyWork;
