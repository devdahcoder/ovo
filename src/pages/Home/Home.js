import React from 'react'
import "./home.scss"


// imported components
import TagName from "../../components/TagName/TagName"
import Header from "../../components/Header/Header"
import Image from "./Image 16 1.png"

const Home = () => {
    return (
        <section className="main--section">
            <div className="main--container">

                <div className="home--event--display--container">
                    <div className="home--event--date--container">
                        <div className="home--event--date--name--container">
                            <div className="home--event--name--date--header">
                                <p>Event name & date</p>
                            </div>

                            <div className="home--event--name--date--display">
                                <div className="home--event--name--date">
                                    MeandYou2021 <br />
                                    21-Jul-2021
                                </div>

                                <div>
                                    <TagName />
                                </div>
                            </div>
                        </div>


                        <div className="home--event--reminder--container">
                            <div className="home--event--reminder">
                                <p>Upcoming reminders</p>
                            </div>

                            <div className="home--event--countdown">
                                <p>12 days to go</p>
                            </div>
                        </div>

                        <div>
                            <div className="home--remind--detail">
                                <p>Any reminders that your admin sets will show up here</p>
                            </div>
                        </div>
                    </div>

                    <div className="home--main--event--container">
                        <div className="home--event--banner--container">
                            <div className="event--banner">
                                <img src={Image} alt="" />
                            </div>

                            <div className="event--banner--tag">
                                <div className="event--banner--tag--image--container">
                                    <span className="event--banner--tag--image">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSWADRdrsmG8UAdTkY2k9YtvbTAHqgUEq3Q&usqp=CAU" alt="" />
                                    </span>
                                </div>

                                <div className="event--banner--tag--detail--container">
                                    <div className="event--banner--tag--detail--group--name"><p>Group Created by</p></div>
                                    <div className="event--banner--tag--detail--group--creator"><p>Dele Ali</p></div>
                                </div>
                            </div>
                        </div>


                        <div className="home--main--event--detail--container">
                            <div className="event--group--name--container group--detail">
                                <div className="group--detail--header">
                                    <p>Group Name</p>
                                </div>

                                <div className="group--detail--text">
                                    <p>Queen  Deluxe  Group</p>
                                </div>
                            </div>

                            <div className="dodo">
                                <div className="event--group--member--container group--detail">
                                    <div className="group--detail--header">
                                        <p>Group members</p>
                                    </div>

                                    <div className="event--group--member--display ">
                                        <div className="event--group--member--inner--display">
                                            <div style={{marginLeft: 0, zIndex: 5}} className="event--group--member">
                                                <span className="event--banner--tag--image">
                                                    <img src="https://wallpapercave.com/wp/wp8953922.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div style={{marginLeft: -3, zIndex: 4}} className="event--group--member">
                                                <span className="event--banner--tag--image">
                                                    <img src="data:image/jpeg;base64,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" alt="" />
                                                </span>
                                            </div>
                                            <div style={{marginLeft: -3, zIndex: 3}} className="event--group--member">
                                                <span className="event--banner--tag--image">
                                                    <img src="data:image/jpeg;base64,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" alt="" />
                                                </span>
                                            </div>
                                            <div style={{marginLeft: -3, zIndex: 2}} className="event--group--member">
                                                <span className="event--banner--tag--image">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbFAMJBrsx8uQ83eyxzypuaTawLAY06Junw&usqp=CAU" alt="" />
                                                </span>
                                            </div>

                                            <div style={{marginLeft: -3, zIndex: 1}} className="event--group--member">
                                                <div className="event--banner--tag--image">
                                                    <div className="event--member--count">+3</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="event--group--type--container group--detail">
                                    <div className="group--detail--header">
                                        <p>Group Type</p>
                                    </div>

                                    <div className="group--detail--text">
                                        <p>Male only</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

                <div className="measurement--member--table--container">
                    <div className="measurement--detail--container">
                        <div className="measurement--detail--header">
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="20" height="20" fill="url(#pattern0)"/>
                                <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0" transform="scale(0.025641)"/>
                                </pattern>
                                <image id="image0" width="39" height="39" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAADzElEQVRYCbWYv2/UMBTHIwYGBtRKDB0YitShG0UMlSiXXKkoPwTcncMOzCxsjHRgIrleKYWigtQyIQZUBlhY2n+g9CS2LmXqBGoFUyejrxMn9otzSXxppMhx4vh9/L7Pz04cx+Jo9tojjaDT8kK27oX+VnxyL/S5F7J9ec/tsmfNF+0pCxPVX2mEftsL/c0IAiBlT7bvBqzX7LXHq1steONqcL+pe6csVLad8GavPVJgsvgx5LPzVBZK9zI7bHTZw2KCnBaQwAv8Xb3T1OjlxXt8/NU8H12dFeepd1c4ztNrM6J+bvUan1y+zWfCTq78kDrHfP5tBLEXskMTGAyeWWsIEAlUVGIA04utPMjNfBLyRHjMAAZPVYWi0OdXrud4kq0TjGxVxJhBSniLGrKtn33rGgEbAXuSJVLumIIfcWULkvce4hJK0LBBVlBw0ss4XWgv1OkxCooQyUyWwN9NiZQrmscwMtph3XVITL2XSTFx5tcaDhv8dCAXPjK+sPOed74/1QYNdXRAtq/4zHHcwP+iNqhbzkufH/DD479cHo+2nyeAiD8qL5wlAONVQKOv02sUDIDbBz8SOHh4YvmmZt8N/Q0BRyWtM9ZMYIBTPQe4bOzF0oJSlbSu1JEHtrH3TfOajE0qrdhquQHbVuGw1MgXbMuqYLBzsXdHk1bkvCpwmHFFwDZg6BOKqU4SK4Z6A9cm46Mf5vnu7z0x2bYOdjjqpna2YCY4N2ALThk4BLB6IC0ARAUcBmwAHPulAiLvqEZxTeEACkA564YFy4UrG3OYZaYDWV9NsLJN3qykA5d1ulKIREzhsIOVL9By6ecnaXtgWRUMdvJm64Iqa9HSZZJYJbUBQyipDLjGyuVEW/L022Cm28n1nPTk7NfH/Oj4n8okrm3A0OfYmzkCx/rJ4u+F+qQok4gxCfp/ovQCMlswwE0t3dXgtF0xXcKmu61C76FT5DsADgMGRxgkTT++o4+aVFo0xseIlPEkS7pdT3Ykia6O47ihv6SOALGH3cJJgk2+vDXYaxIw/vI6UgEhrykp1wGcnQQ+N3pNAmL/rsLhGm6vc/OJgZnAvJD1RfqQMKaSygvAOiU2SekF/lHpX2X0m0J6Ex3byoxZSYNf9pt8M5i8ZbpH04vsCF6cWL5RarJgIGOv5zJ5TPYFj1UGk7BIhklHhh+FAEUCHV+Z1054mCbWbD+sX1pKCUTL6E+AvoJkDek5sug5VCkMfgoyqB7N5OEgY6g0+w8yaPMMMRLFY1lQ1kd4nMj/4EEDQMxAdhjHnl+eGADuDyvdfw676kMelt8IAAAAAElFTkSuQmCC"/>
                                </defs>
                                </svg>

                            </div>

                            <div className="measurement--header--text">
                                <p>My Measurements</p>
                            </div>

                            <div>
                                <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.8489 7.69965C22.4952 3.1072 17.8355 0 12.5 0C7.16447 0 2.50345 3.10938 0.151018 7.70009C0.0517306 7.89649 0 8.11348 0 8.33355C0 8.55362 0.0517306 8.77061 0.151018 8.96701C2.50475 13.5595 7.16447 16.6667 12.5 16.6667C17.8355 16.6667 22.4965 13.5573 24.8489 8.96658C24.9482 8.77018 25 8.55319 25 8.33312C25 8.11304 24.9482 7.89605 24.8489 7.69965ZM12.5 14.5833C11.2638 14.5833 10.0555 14.2168 9.02766 13.53C7.99985 12.8433 7.19878 11.8671 6.72573 10.7251C6.25268 9.58307 6.12891 8.3264 6.37007 7.11402C6.61123 5.90164 7.20648 4.78799 8.08056 3.91392C8.95464 3.03984 10.0683 2.44458 11.2807 2.20343C12.493 1.96227 13.7497 2.08604 14.8917 2.55909C16.0338 3.03213 17.0099 3.83321 17.6967 4.86102C18.3834 5.88883 18.75 7.0972 18.75 8.33333C18.7504 9.15421 18.589 9.96711 18.275 10.7256C17.9611 11.484 17.5007 12.1732 16.9203 12.7536C16.3398 13.3341 15.6507 13.7944 14.8922 14.1084C14.1338 14.4223 13.3208 14.5837 12.5 14.5833ZM12.5 4.16667C12.1281 4.17186 11.7586 4.22719 11.4015 4.33116C11.6958 4.73119 11.8371 5.22347 11.7996 5.71873C11.7621 6.21398 11.5484 6.6794 11.1972 7.0306C10.846 7.38179 10.3806 7.5955 9.88537 7.63297C9.39012 7.67043 8.89784 7.52917 8.49781 7.23481C8.27001 8.07404 8.31113 8.96357 8.61538 9.77821C8.91962 10.5928 9.47167 11.2916 10.1938 11.776C10.916 12.2605 11.7719 12.5063 12.641 12.4788C13.5102 12.4514 14.3489 12.152 15.039 11.623C15.7291 11.0939 16.236 10.3617 16.4882 9.52951C16.7404 8.69729 16.7253 7.80693 16.445 6.98376C16.1647 6.16058 15.6333 5.44602 14.9256 4.94067C14.2179 4.43532 13.3696 4.16462 12.5 4.16667Z" fill="#78849E"/>
                                </svg>
                            </div>

                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.33333 12.5C8.33333 13.4205 9.07952 14.1667 10 14.1667C10.9205 14.1667 11.6667 13.4205 11.6667 12.5C11.6667 11.5795 10.9205 10.8333 10 10.8333C9.07952 10.8333 8.33333 11.5795 8.33333 12.5Z" fill="#78849E"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9911 1.46049C15.0403 2.39308 15.7358 3.74521 15.8238 5.46024C19.1407 6.24353 20 8.19054 20 12.5C20 18.6762 18.235 20 10 20C1.765 20 0 18.6762 0 12.5C0 8.19054 0.859291 6.24353 4.17615 5.46024C4.26423 3.74521 4.9597 2.39308 6.00886 1.46049C7.11764 0.474914 8.57244 0 10 0C11.4276 0 12.8824 0.474914 13.9911 1.46049ZM10 5C8.38793 5 7.02381 5.05073 5.87232 5.17865C6.00779 4.07798 6.48449 3.26764 7.11614 2.70617C7.88236 2.02509 8.92756 1.66667 10 1.66667C11.0724 1.66667 12.1176 2.02509 12.8839 2.70617C13.5155 3.26764 13.9922 4.07798 14.1277 5.17865C12.9762 5.05073 11.6121 5 10 5ZM6.66667 12.5C6.66667 14.3409 8.15905 15.8333 10 15.8333C11.8409 15.8333 13.3333 14.3409 13.3333 12.5C13.3333 10.6591 11.8409 9.16667 10 9.16667C8.15905 9.16667 6.66667 10.6591 6.66667 12.5Z" fill="#78849E"/>
                                </svg>
                            </div>
                        </div>
                    
                        <div className="measurement--detail--nav">
                            <div className="measurement--detail--ul">
                                <div className="measurement--detail--li">
                                    <div className="measurement--detail--li--header"><p>Version 1 measurement...</p></div>
                                    <div className="measurement--detail--li--text"><p>Input type: Autosize</p></div>
                                    <div className="measurement--detail--li--text"><p>Date taken: 24-Aug-2021</p></div>
                                    <div className="measurement--detail--li--text"><p>Last edited by: Ibi Cookey</p></div>
                                </div>
                                <div className="measurement--detail--li">
                                    <div className="measurement--detail--li--header"><p>Version 1 measurement...</p></div>
                                    <div className="measurement--detail--li--text"><p>Input type: Autosize</p></div>
                                    <div className="measurement--detail--li--text"><p>Date taken: 24-Aug-2021</p></div>
                                    <div className="measurement--detail--li--text"><p>Last edited by: Ibi Cookey</p></div>
                                </div>
                                <div className="measurement--detail--li">
                                    <div className="measurement--detail--li--header"><p>Version 1 measurement...</p></div>
                                    <div className="measurement--detail--li--text"><p>Input type: Autosize</p></div>
                                    <div className="measurement--detail--li--text"><p>Date taken: 24-Aug-2021</p></div>
                                    <div className="measurement--detail--li--text"><p>Last edited by: Ibi Cookey</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default Home
