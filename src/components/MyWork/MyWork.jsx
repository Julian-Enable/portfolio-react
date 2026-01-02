import { useState, useRef, useEffect } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import CardSwap, { Card } from '../CardSwap/CardSwap';

const MyWork = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const isPausedRef = useRef(false);

    // Detectar viewport para ajustar CardSwap
    useEffect(() => {
        const checkViewport = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 640);
            setIsTablet(width > 640 && width <= 768);
        };

        checkViewport();
        window.addEventListener('resize', checkViewport);
        return () => window.removeEventListener('resize', checkViewport);
    }, []);

    const handleCardChange = (newIndex) => {
        if (!isPausedRef.current) {
            setActiveIndex(newIndex);
        }
    };

    const handlePause = () => {
        isPausedRef.current = true;
    };

    const handleResume = () => {
        isPausedRef.current = false;
    };

    // Dimensiones responsive del CardSwap
    const cardConfig = isMobile
        ? { width: 350, height: 220, cardDistance: 10, verticalDistance: 14, skewAmount: 3 }
        : isTablet
            ? { width: 420, height: 260, cardDistance: 15, verticalDistance: 18, skewAmount: 4 }
            : { width: 500, height: 400, cardDistance: 40, verticalDistance: 50, skewAmount: 6 };

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>Mis últimos trabajos</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
                <div className="mywork-content-wrapper">
                    {/* Descripción a la izquierda */}
                    <div className="project-description">
                        <div className="description-content" key={activeIndex}>
                            <h2>{mywork_data[activeIndex].w_name}</h2>
                            <p>{mywork_data[activeIndex].w_desc}</p>
                            <a
                                href={mywork_data[activeIndex].w_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Ver proyecto →
                            </a>
                        </div>
                    </div>

                    {/* Cards a la derecha */}
                    <div className="mywork-cardswap-wrapper">
                        <CardSwap
                            width={cardConfig.width}
                            height={cardConfig.height}
                            cardDistance={cardConfig.cardDistance}
                            verticalDistance={cardConfig.verticalDistance}
                            delay={2500}
                            pauseOnHover={true}
                            easing="elastic"
                            skewAmount={cardConfig.skewAmount}
                            onCardChange={handleCardChange}
                            onPause={handlePause}
                            onResume={handleResume}
                        >
                            {mywork_data.map((work, index) => (
                                <Card key={index}>
                                    <div className="project-card-content">
                                        <img
                                            src={work.w_img}
                                            alt={work.w_name}
                                            loading="lazy"
                                        />
                                    </div>
                                </Card>
                            ))}
                        </CardSwap>
                    </div>
                </div>
            </div>

            <div className="mywork-showmore">
                <a href="https://github.com/Julian-Enable" target="_blank" rel="noopener noreferrer" className="showmore-link">
                    <p>Ver todos en GitHub</p>
                    <img src={arrow_icon} alt="Ver más" />
                </a>
            </div>
        </div>
    )
}

export default MyWork;
