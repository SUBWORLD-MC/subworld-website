import React, { useState, useEffect } from 'react';

const Header = () => {

    const [activeTab, setActiveTab] = useState('home');

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        const headerFixed = document.querySelector('.header-fixed');
        const trigger = document.querySelector('.triger');
        const header = document.querySelector('.header');
        const lineHeader = document.querySelector('.lineHeader');
        const line1 = document.querySelectorAll('.line1');
    
        const checkPosition = () => {
            if (headerFixed && trigger && header) {
                const checkHeader = headerFixed.getBoundingClientRect();
                const checkTrigger = trigger.getBoundingClientRect();
    
                if (checkHeader.top > checkTrigger.bottom) {
                    header.classList.add('animated');
                    lineHeader.classList.add('animated');
                } else {
                    header.classList.remove('animated');
                    lineHeader.classList.remove('animated');
                }
            }
        };
    
        const handleScroll = () => {
            requestAnimationFrame(checkPosition);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div>
            <div className="container-header">
                <div className="header-fixed">
                    <div className="header">
                        <div className="logo-or-nav">
                            <p className="logo">SUBWORLD</p>
                            <div className="nav">
                                <div
                                    className={`nav-main ${activeTab === 'home' ? 'active' : ''}`}
                                    onClick={() => handleClick('home')}
                                >
                                    <svg
                                        width="18"
                                        height="20"
                                        viewBox="0 0 18 20"
                                        fill="none"
                                        className="icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 9.75773C1 8.23489 1 7.47348 1.31367 6.80419C1.62734 6.13489 2.21642 5.63937 3.39457 4.64832L4.53743 3.68697C6.66694 1.89566 7.73169 1 9 1C10.2683 1 11.3331 1.89566 13.4626 3.68697L14.6054 4.64832C15.7836 5.63937 16.3727 6.13489 16.6863 6.80419C17 7.47348 17 8.23489 17 9.75773V14.5137C17 16.6285 17 17.686 16.3305 18.343C15.6611 19 14.5836 19 12.4286 19H5.57143C3.41644 19 2.33894 19 1.66947 18.343C1 17.686 1 16.6285 1 14.5137V9.75773Z"
                                            className={`${activeTab === 'home' ? 'active-icon' : ''}`}
                                            stroke={activeTab === 'home' ? '#27BC8F' : '#ADADAD'}
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M12.2 19V13.2C12.2 12.6477 11.7523 12.2 11.2 12.2H6.80005C6.24776 12.2 5.80005 12.6477 5.80005 13.2V19"
                                            className=""
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke={activeTab === 'home' ? '#27BC8F' : '#ADADAD'}
                                        />
                                    </svg>
                                    <a className={activeTab === 'home' ? 'nav-activ' : ''}>Главная</a>
                                    <div className={`line1 ${activeTab === 'home' ? 'active' : ''}`}></div>
                                </div>

                                <div
                                    className={`nav-main ${activeTab === 'donate' ? 'active' : ''}`}
                                    onClick={() => handleClick('donate')}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            className={activeTab === 'donate' ? 'active' : ''}
                                            d="M12.5 18.9998V13.9998C12.5 13.4475 12.0523 12.9998 11.5 12.9998H8.5C7.94772 12.9998 7.5 13.4475 7.5 13.9998V18.9998"
                                            stroke={activeTab === 'donate' ? '#27BC8F' : '#ADADAD'}
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            className={activeTab === 'donate' ? 'active' : ''}
                                            d="M3 9V15C3 16.8856 3 17.8284 3.58579 18.4142C4.17157 19 5.11438 19 7 19H13C14.8856 19 15.8284 19 16.4142 18.4142C17 17.8284 17 16.8856 17 15V9"
                                            stroke={activeTab === 'donate' ? '#27BC8F' : '#ADADAD'}
                                            strokeWidth="2"
                                        />
                                        <path
                                            className={activeTab === 'donate' ? 'active' : ''}
                                            d="M2.62127 2.51493C2.80316 1.78737 2.8941 1.42359 3.16536 1.21179C3.43663 1 3.8116 1 4.56155 1H15.4384C16.1884 1 16.5634 1 16.8346 1.21179C17.1059 1.42359 17.1968 1.78737 17.3787 2.51493L18.5823 7.32938C18.6792 7.71675 18.7276 7.91044 18.7169 8.06776C18.6892 8.47569 18.416 8.82566 18.0269 8.95148C17.8769 9 17.6726 9 17.2641 9V9C16.7309 9 16.4644 9 16.2405 8.94784C15.6133 8.80172 15.0948 8.3625 14.8475 7.76781C14.7593 7.55555 14.7164 7.29856 14.6308 6.78457V6.78457C14.6068 6.64076 14.5948 6.56886 14.5812 6.54994C14.5413 6.49439 14.4587 6.49439 14.4188 6.54994C14.4052 6.56886 14.3932 6.64076 14.3692 6.78457L14.2877 7.27381C14.2791 7.32568 14.2747 7.35161 14.2704 7.37433C14.0939 8.30051 13.2946 8.97766 12.352 8.99947C12.3289 9 12.3026 9 12.25 9V9C12.1974 9 12.1711 9 12.148 8.99947C11.2054 8.97766 10.4061 8.30051 10.2296 7.37433C10.2253 7.35161 10.2209 7.32568 10.2123 7.27381L10.1308 6.78457C10.1068 6.64076 10.0948 6.56886 10.0812 6.54994C10.0413 6.49439 9.95868 6.49439 9.91878 6.54994C9.90519 6.56886 9.89321 6.64076 9.86924 6.78457L9.7877 7.27381C9.77905 7.32568 9.77473 7.35161 9.77044 7.37433C9.59394 8.30051 8.79464 8.97766 7.85204 8.99947C7.82894 9 7.80261 9 7.75 9V9C7.69739 9 7.67105 9 7.648 8.99947C6.70538 8.97766 5.90606 8.30051 5.72959 7.37433C5.7253 7.35161 5.72091 7.32568 5.71227 7.27381L5.63075 6.78457C5.60676 6.64076 5.59477 6.56886 5.58117 6.54994C5.54126 6.49439 5.45865 6.49439 5.41874 6.54994C5.40515 6.56886 5.39317 6.64076 5.36919 6.78457V6.78457C5.28351 7.29856 5.24068 7.55555 5.15243 7.76781C4.90518 8.3625 4.38669 8.80172 3.75945 8.94784C3.53557 9 3.269 9 2.73586 9V9C2.32732 9 2.12304 9 1.97301 8.95148C1.584 8.82566 1.31075 8.47569 1.28304 8.06776C1.27236 7.91044 1.32078 7.71675 1.41762 7.32938L2.62127 2.51493Z"
                                            stroke={activeTab === 'donate' ? '#27BC8F' : '#ADADAD'}
                                            strokeWidth="2"
                                        />
                                    </svg>
                                    <a className={activeTab === 'donate' ? 'nav-activ' : ''}>Донат</a>
                                    <div className={`line1 ${activeTab === 'donate' ? 'active' : ''}`}></div>
                                </div>

                                <div
                                    className={`nav-main ${activeTab === 'servers' ? 'active' : ''}`}
                                    onClick={() => handleClick('servers')}
                                >
                                    <svg
                                        width="18"
                                        height="20"
                                        viewBox="0 0 18 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            className={activeTab === 'servers' ? 'active' : ''}
                                            d="M17 10V15C17 16.8856 17 17.8284 16.4142 18.4142C15.8284 19 14.8856 19 13 19H3.5C2.11929 19 1 17.8807 1 16.5V16.5C1 15.1193 2.11929 14 3.5 14H13C14.8856 14 15.8284 14 16.4142 13.4142C17 12.8284 17 11.8856 17 10V5C17 3.11438 17 2.17157 16.4142 1.58579C15.8284 1 14.8856 1 13 1H5C3.11438 1 2.17157 1 1.58579 1.58579C1 2.17157 1 3.11438 1 5V16.5"
                                            stroke={activeTab === 'servers' ? '#27BC8F' : '#ADADAD'}
                                            strokeWidth="2"
                                        />
                                        <path
                                            className={activeTab === 'servers' ? 'active' : ''}
                                            d="M6 8L7.29289 9.29289C7.68342 9.68342 8.31658 9.68342 8.70711 9.29289L12 6"
                                            stroke={activeTab === 'servers' ? '#27BC8F' : '#ADADAD'}
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <a className={activeTab === 'servers' ? 'nav-activ' : ''}>Сервера</a>
                                    <div className={`line1 ${activeTab === 'servers' ? 'active' : ''}`}></div>
                                </div>
                            </div>
                        </div>

                        <div className="login-btn">
                            <button>
                                <div>
                                    <img src="/svg/login.svg" alt="" />Войти
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='lineHeader'></div>
                </div>
            </div>
        </div>
    );
};


export default Header;
