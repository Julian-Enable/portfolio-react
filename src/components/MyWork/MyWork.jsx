import { useState, useRef, useEffect } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../data/myworkData';
import arrow_icon from '../../assets/arrow_icon.svg';
import CardSwap, { Card } from '../CardSwap/CardSwap';

const VIEWPORT_MOBILE_BREAKPOINT = 640;
const VIEWPORT_TABLET_BREAKPOINT = 768;
const DEFAULT_VIEWPORT_WIDTH = 1200;
const MOBILE_WIDTH_PADDING = 56;
const MOBILE_MIN_WIDTH = 250;
const MOBILE_MAX_WIDTH = 340;
const TABLET_WIDTH_PADDING = 120;
const TABLET_MIN_WIDTH = 320;
const TABLET_MAX_WIDTH = 420;
const DESKTOP_CARD_WIDTH = 500;
const DESKTOP_CARD_HEIGHT = 400;
const DESKTOP_CARD_DISTANCE = 40;
const DESKTOP_VERTICAL_DISTANCE = 50;
const DESKTOP_SKEW_AMOUNT = 6;
const MOBILE_CARD_HEIGHT_RATIO = 0.63;
const TABLET_CARD_HEIGHT_RATIO = 0.62;
const MOBILE_CARD_DISTANCE = 10;
const MOBILE_VERTICAL_DISTANCE = 14;
const MOBILE_SKEW_AMOUNT = 3;
const TABLET_CARD_DISTANCE = 15;
const TABLET_VERTICAL_DISTANCE = 18;
const TABLET_SKEW_AMOUNT = 4;

const MyWork = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(DEFAULT_VIEWPORT_WIDTH);
    const isPausedRef = useRef(false);

    // Detectar viewport para ajustar CardSwap
    useEffect(() => {
        const checkViewport = () => {
            const width = window.innerWidth;
            setViewportWidth(width);
            setIsMobile(width <= VIEWPORT_MOBILE_BREAKPOINT);
            setIsTablet(width > VIEWPORT_MOBILE_BREAKPOINT && width <= VIEWPORT_TABLET_BREAKPOINT);
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
    const mobileWidth = Math.min(Math.max(viewportWidth - MOBILE_WIDTH_PADDING, MOBILE_MIN_WIDTH), MOBILE_MAX_WIDTH);
    const tabletWidth = Math.min(Math.max(viewportWidth - TABLET_WIDTH_PADDING, TABLET_MIN_WIDTH), TABLET_MAX_WIDTH);

    const cardConfig = isMobile
        ? {
            width: mobileWidth,
            height: Math.round(mobileWidth * MOBILE_CARD_HEIGHT_RATIO),
            cardDistance: MOBILE_CARD_DISTANCE,
            verticalDistance: MOBILE_VERTICAL_DISTANCE,
            skewAmount: MOBILE_SKEW_AMOUNT
        }
        : isTablet
            ? {
                width: tabletWidth,
                height: Math.round(tabletWidth * TABLET_CARD_HEIGHT_RATIO),
                cardDistance: TABLET_CARD_DISTANCE,
                verticalDistance: TABLET_VERTICAL_DISTANCE,
                skewAmount: TABLET_SKEW_AMOUNT
            }
            : {
                width: DESKTOP_CARD_WIDTH,
                height: DESKTOP_CARD_HEIGHT,
                cardDistance: DESKTOP_CARD_DISTANCE,
                verticalDistance: DESKTOP_VERTICAL_DISTANCE,
                skewAmount: DESKTOP_SKEW_AMOUNT
            };

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
                                            decoding="async"
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
