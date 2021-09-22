import React from 'react';
import "./Header.scss"
import "../../styles/global.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header--nav--container">

                <div className="svg-button-container header--prev--url--container svg--icon--wrapper">
                    <button className="svg-button">
                        <div className="svg-container more-dash-icon-wrapper ">
                            <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.55891 2.29492L2.35303 9.63234L8.95492 16.7067" stroke="#3E3C3C" stroke-opacity="0.77" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </button>
                </div>

                <div className="header--link--location">
                    Me and You 2021 / Home
                </div>

                <div className="header--nav">
                    <div className="header--li">
                        <a href="" className="header--link header--notification--link">-                            
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 10.0512C24 10.5559 23.6026 10.9649 23.1124 10.9649C22.6222 10.9649 22.2249 10.5559 22.2249 10.0512C22.2249 7.51759 21.4084 5.47728 20.0441 4.07264C18.6797 2.66801 16.6978 1.82749 14.2368 1.82749C13.7466 1.82749 13.3493 1.41841 13.3493 0.913744C13.3493 0.409077 13.7466 0 14.2368 0C17.1012 0 19.5572 0.986971 21.2992 2.78044C23.0413 4.57391 24 7.10232 24 10.0512Z" fill="#78849E"/>
                                <path d="M19.5622 10.9649C20.0524 10.9649 20.4498 10.5559 20.4498 10.0512C20.4498 6.34841 17.8335 3.65498 14.2368 3.65498C13.7466 3.65498 13.3493 4.06405 13.3493 4.56872C13.3493 5.07339 13.7466 5.48247 14.2368 5.48247C16.8531 5.48247 18.6746 7.35775 18.6746 10.0512C18.6746 10.5559 19.072 10.9649 19.5622 10.9649Z" fill="#78849E"/>
                                <path d="M6.83839 21.7893C6.53578 22.1863 6.60296 22.7607 6.98855 23.0723C9.19939 24.8589 12.4572 23.9602 13.5042 21.275C13.6868 20.8066 13.466 20.2745 13.0111 20.0866C12.5562 19.8986 12.0394 20.1259 11.8568 20.5942C11.2507 22.1488 9.36456 22.6691 8.08463 21.6348C7.69903 21.3232 7.1411 21.3924 6.83839 21.7893Z" fill="#78849E"/>
                                <path d="M6.35907 3.80801C6.35582 3.79262 6.35225 3.77728 6.34824 3.76189C6.22136 3.2744 5.73468 2.98517 5.26121 3.11579C4.78774 3.24635 4.5067 3.74739 4.63357 4.23488C4.63758 4.25027 4.64202 4.26544 4.64668 4.28044C1.88757 5.49803 0.051774 9.56587 1.44227 13.1559C1.95799 14.2296 1.42039 15.0221 0.860894 15.8469C0.332279 16.6264 -0.215946 17.4347 0.0862278 18.5365C0.489596 20.0863 1.56535 20.6898 2.93256 20.759C2.93256 20.759 5.47411 21.0305 9.62589 19.8852C13.7777 18.7399 15.8469 17.1966 15.8469 17.1966C16.9972 16.4328 17.6249 15.3137 17.2324 13.8067C16.942 12.6914 16.075 12.2732 15.2431 11.872C14.3617 11.4469 13.5198 11.0409 13.4449 9.84489C12.9055 6.02004 9.33996 3.44205 6.35907 3.80801Z" fill="#78849E"/>
                            </svg>

                            <div className="notification--link--tag--container">
                                <div className="notification--link--tag">
                                    <div className="notification--link--count">30</div>
                                </div>
                            </div>
                        
                        </a>
                    </div>
                    <div className="header--li">
                        <a href="" className="header--link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12ZM12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7Z" fill="#78849E"/>
                            </svg>
                        </a>
                    </div>
                    <div className="header--li">
                        <span className="header--profile--picture--container">
                            <div className="profile--name">SC</div>
                            {/* <img className="profile--image" src="https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/s150x150/222890015_220812216466422_2415656627121357604_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_ohc=44pj9YyTQLYAX9OSvoG&tn=CYBjMqvXZI4FZnzR&edm=AIQHJ4wBAAAA&ccb=7-4&oh=d255649865f4c09ec4670b96d76839ec&oe=614957E9&_nc_sid=7b02f1" alt="" /> */}
                        </span>
                    </div>
                </div>


                <div className="header--hamburger--menu svg-button-container svg--icon--wrapper">
                    <button className="svg-button">
                        <div className="svg-container more-dash-icon-wrapper">
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7.0006H19" stroke="#1E2022" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 1.46154H19" stroke="#1E2022" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 12.5377H19" stroke="#1E2022" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
