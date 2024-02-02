import './App.css';
// import './demo.css';
// import mycss from './App.module.css';
// import image from './image/t2.jpg';
// import { FcClock } from "react-icons/fc";
import { BsEnvelope,BsPlayBtn,BsWhatsapp } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { TfiGoogle } from "react-icons/tfi";
import { FaQuoteRight,FaHandPointRight,FaUniversity } from "react-icons/fa";
import flogo from "./image/creative-logo-white.svg";
import { IoIosStar,IoIosArrowRoundForward } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import logo from "./image/creative-logo-blue.svg";
import about from './image/about.jpeg'
import { FaCertificate,FaFacebookF,FaTwitter,FaLinkedinIn,FaAngleDown,FaPlay,FaAngleRight,FaAngleLeft } from "react-icons/fa6";


function App() {
    return(
        <section>
            <header>
                <div className="header_color">
                    <div className="container">
                        <div className="info">
                            <ul className="left_info">
                                <li className="email">
                                    <a href='#' className='info1'><i><BsEnvelope></BsEnvelope></i><p>info@cdmi.in</p></a>
                                </li>
                                <li className="certify">
                                    <a href='#' className='info1'><i><FaCertificate></FaCertificate></i><p>Verify Certificate</p></a>
                                </li>
                            </ul>
                            <ul className="middle_info">
                                <li className="center">
                                    <p>HAVE ANY QUESTION ? +91 90333 16003</p>
                                </li>
                            </ul>
                            <div className="right_info">
                                <ul className="icons">
                                    <li><a href='https://www.facebook.com/'><i><FaFacebookF></FaFacebookF></i></a></li>
                                    <li><a href='https://www.facebook.com/'><i><FaTwitter></FaTwitter></i></a></li>
                                    <li><a href='https://www.facebook.com/'><i><TfiGoogle></TfiGoogle></i></a></li>
                                    <li><a href='https://www.facebook.com/'><i><FaLinkedinIn></FaLinkedinIn></i></a></li>
                                    <li><a href='https://www.facebook.com/'><i><ImInstagram></ImInstagram></i></a></li>
                                    <li><a href='https://www.facebook.com/'><i><BsPlayBtn></BsPlayBtn></i></a></li>
                                    <li><a href='https://www.facebook.com/'><i><BsWhatsapp></BsWhatsapp></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>       
                </div>
                <div className="container">
                    <div className="logo_header">
                        <div className="logo">
                            <a href='www.cdmi.in'><img src={logo} alt=''></img></a>
                        </div>
                        <div className="menus">
                            <ul className="main_menu">
                                <li><a href='#' className="active">HOME</a></li>
                                <li><a href='#'>COURSES</a><i><FaAngleDown></FaAngleDown></i></li>
                                <li><a href='#'>ACTIVITIES</a><i><FaAngleDown></FaAngleDown></i></li>
                                <li><a href='#'>BLOG</a></li>
                                <li><a href='#'>KNOW US</a><i><FaAngleDown></FaAngleDown></i></li>
                                <li><a href='#'>GET IN TOUCH</a></li>
                                <li><a href='#'>STUDENT ZONE</a><i><FaAngleDown></FaAngleDown></i></li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </header>
            <div className='banner'>
                <img src={require(`./image/asset 1.webp`)}></img>
            </div>
            <main>
                <div className='container'>
                    <div className='spacer'>
                        <div className='row'>
                            <div className='heading'>
                                <span className='sub_heaing'>
                                    creative course
                                </span>
                                <h2>OFFERED COURSES</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='courses'>
                                <div className='box'>
                                    <div className='box_img'>
                                        <img src={require(`./image/b1.webp`)}></img>
                                    </div>
                                    <div className='cnt_disc'>
                                        <h4 className='cnt_title'><a href='#'>Development Courses</a></h4>
                                    </div>
                                    <div className='cnt_footer'>
                                        <div className='rating_star'>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoStarHalfSharp></IoStarHalfSharp></i>
                                        </div>
                                        <div className='price'>
                                            <a href='#' className='btn'>Know more..!</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='box_img'>
                                        <img src={require(`./image/b2.webp`)}></img>
                                    </div>
                                    <div className='cnt_disc'>
                                        <h4 className='cnt_title'><a href='#'>Design Courses</a></h4>
                                    </div>
                                    <div className='cnt_footer'>
                                        <div className='rating_star'>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoStarHalfSharp></IoStarHalfSharp></i>
                                        </div>
                                        <div className='price'>
                                            <a href='#' className='btn'>Know more..!</a>
                                        </div>
                                    </div>
                                </div><div className='box'>
                                    <div className='box_img'>
                                        <img src={require(`./image/b3.webp`)}></img>
                                    </div>
                                    <div className='cnt_disc'>
                                        <h4 className='cnt_title'><a href='#'>Programming IT</a></h4>
                                    </div>
                                    <div className='cnt_footer'>
                                        <div className='rating_star'>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoStarHalfSharp></IoStarHalfSharp></i>
                                        </div>
                                        <div className='price'>
                                            <a href='#' className='btn'>Know more..!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='row'>
                            <div className='courses'>
                                <div className='box'>
                                    <div className='box_img'>
                                        <img src={require(`./image/b4.webp`)}></img>
                                    </div>
                                    <div className='cnt_disc'>
                                        <h4 className='cnt_title'><a href='#'>Trendy Courses</a></h4>
                                    </div>
                                    <div className='cnt_footer'>
                                        <div className='rating_star'>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoStarHalfSharp></IoStarHalfSharp></i>
                                        </div>
                                        <div className='price'>
                                            <a href='#' className='btn'>Know more..!</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='box_img'>
                                        <img src={require(`./image/b5.webp`)}></img>
                                    </div>
                                    <div className='cnt_disc'>
                                        <h4 className='cnt_title'><a href='#'>Trendy Courses</a></h4>
                                    </div>
                                    <div className='cnt_footer'>
                                        <div className='rating_star'>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoStarHalfSharp></IoStarHalfSharp></i>
                                        </div>
                                        <div className='price'>
                                            <a href='#' className='btn'>Know more..!</a>
                                        </div>
                                    </div>
                                </div><div className='box'>
                                    <div className='box_img'>
                                        <img src={require(`./image/b6.webp`)}></img>
                                    </div>
                                    <div className='cnt_disc'>
                                        <h4 className='cnt_title'><a href='#'>Business Development</a></h4>
                                    </div>
                                    <div className='cnt_footer'>
                                        <div className='rating_star'>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoIosStar></IoIosStar></i>
                                            <i><IoStarHalfSharp></IoStarHalfSharp></i>
                                        </div>
                                        <div className='price'>
                                            <a href='#' className='btn'>Know more..!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='heading view_btn'>
                            <a src="#" className='btn_yellow'>View All Courses <i><IoIosArrowRoundForward></IoIosArrowRoundForward></i></a>
                        </div>
                    </div>
                </div>

                {/* *****************************************************
                                About
                ******************************************************/}
                
                <div className="spacer">
                <div className="about">
              <div className='about1'>
                <div className="about_shape">
                  <div className="abt_container">
                        <div className='heading abt_heading'>
                            <span className='sub_heaing'>
                                ABOUT US
                            </span>
                            <h2>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h2>
                        </div>
                    <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                    <div className='heading abt_btn'>
                        <a href="#" className='btn_yellow'>Enroll Now..! <i><IoIosArrowRoundForward></IoIosArrowRoundForward></i></a>
                    </div>
                  </div>
                </div>
              </div>  
              <div className='about2'>
                    <img src={require(`./image/about.jpeg`)}></img>
                    <div className="about2_layer">
                      <span><FaPlay></FaPlay></span>
                    </div>
              </div>
          </div>
        </div>

                {/* **********************************************
                                counter
                ****************************************************/}
                <div className='row'>
                    <div className='counter spacer'>
                        <div className='cnt_img'>
                            <div className='cnt_2 container'>
                                <div className='cnt1'>
                                    <div className='cnt'>
                                        <img src={require(`./image/cnt1.png`)}></img>
                                    </div>
                                    <div className='cnt_content'>
                                        <h3 className='cnt_text'>
                                            <span>18000+</span>
                                            <p>HAPPY STUDENTS</p>
                                        </h3>
                                    </div>
                                </div>
                                <div className='cnt1'>
                                    <div className='cnt'>
                                        <img src={require(`./image/cnt2.png`)}></img>
                                    </div>
                                    <div className='cnt_content'>
                                        <h3 className='cnt_text'>
                                            <span>10+</span>
                                            <p>CERTIFICATION APPROVAL</p>
                                        </h3>
                                    </div>
                                </div>
                                <div className='cnt1'>
                                    <div className='cnt'>
                                        <img src={require(`./image/cnt3.png`)}></img>
                                    </div>
                                    <div className='cnt_content'>
                                        <h3 className='cnt_text'>
                                            <span>100+</span>
                                            <p>CERTIFIED TEACHERS</p>
                                        </h3>
                                    </div>
                                </div>
                                <div className='cnt1'>
                                    <div className='cnt'>
                                        <img src={require(`./image/cnt4.png`)}></img>
                                    </div>
                                    <div className='cnt_content'>
                                        <h3 className='cnt_text'>
                                            <span>12000+</span>
                                            <p>STUDENTS PLACED</p>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ****************************************************************
                                Testimonial slider
                *********************************************************************/}
                <div className='container'>
                    <div className='testimonial'>
                        <div className='test_cnt'>
                            <div className='heading t_head'>
                                <span className='sub_heaing'>
                                    HAPPY STUDENTS
                                </span>
                                <h2>ALUMNI SPEAK</h2>
                            </div>
                            <div className='quote_sec'>
                                <div className='quote'>
                                    <i><FaQuoteRight></FaQuoteRight></i>
                                </div>
                                <div className='nav'>
                                    <div className='nav_btn'>
                                        <i><FaAngleLeft></FaAngleLeft></i>
                                        <i><FaAngleRight></FaAngleRight></i>
                                    </div>
                                </div>
                            </div>
                            <div className='a_text'>
                            <p>Good teaching. Well nature staff.. Good education they provide for every student in the institution... Staff's are very quite,decent ,multi talented and well matured to........ Thank you creative multimedia!!!!</p>
                            </div>
                            <div className='test_user'>
                                <div className='user_img'>
                                    <img src={require(`./image/t1.jpeg`)}></img>
                                </div>
                                <div className='user_info'>
                                    <h3 className='user_name'>KOLADIYA MANSI</h3>
                                    <span>UI/UX Designer</span><p> @ Patoliya Infotech</p>
                                </div>
                            </div>
                        </div>
                        <div className='students'>
                            <div className='img_holder'>
                                <div className='test_shape'>
                                    <img src={require(`./image/test.png`)}></img>
                                </div>
                                <div className='background_bg'></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* *****************************************************************8
                            We choose creative
                ********************************************************************/}
                <div className='bgcolor spacer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='heading'>
                                <span className='sub_heaing'>
                                    READ OUR DIFFERENCE
                                </span>
                                <h2>WHY CHOOSE CREATIVE</h2>
                            </div>
                        </div>
                        <div className='row2'>
                            <div className='creative'>
                                <div className='creative_cnt'>
                                    <div className='box_icon'>
                                        <div className='icon_box red'>
                                            <img src={require(`./image/c1.png`)}></img>
                                        </div>
                                        <div className='intro_desc'>
                                            <h4>Industry Experts As Trainers</h4>
                                            <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='creative_cnt'>
                                    <div className='box_icon'>
                                        <div className='icon_box yellow'>
                                            <img src={require(`./image/c2.png`)}></img>
                                        </div>
                                        <div className='intro_desc'>
                                            <h4>Latest Curriculum</h4>
                                            <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='creative_cnt'>
                                    <div className='box_icon'>
                                        <div className='icon_box green'>
                                            <img src={require(`./image/c3.png`)}></img>
                                        </div>
                                        <div className='intro_desc'>
                                            <h4>Latest Technology</h4>
                                            <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='creative mt'>
                                <div className='creative_cnt'>
                                    <div className='box_icon'>
                                        <div className='icon_box blue'>
                                            <img src={require(`./image/c4.png`)}></img>
                                        </div>
                                        <div className='intro_desc'>
                                            <h4>Interview Assistance</h4>
                                            <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='creative_cnt'>
                                    <div className='box_icon'>
                                        <div className='icon_box s_blue'>
                                            <img src={require(`./image/c5.png`)}></img>
                                        </div>
                                        <div className='intro_desc'>
                                            <h4>Free Upgradation</h4>
                                            <p>We will be provided free upgradation for any newer version of the course you have.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='creative_cnt'>
                                    <div className='box_icon'>
                                        <div className='icon_box pink'>
                                            <img src={require(`./image/c6.png`)}></img>
                                        </div>
                                        <div className='intro_desc'>
                                            <h4>Lifetime Support</h4>
                                            <p>We will provide you lifetime support on all the courses you learned from us.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* *********************************************************
                                    Partners
                **************************************************************/}

                <div className='spacer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='heading'>
                                <span className='sub_heaing'>
                                    STUDENT PLACEMENT
                                </span>
                                <h2>OUR RECRUITMENT PARTNERS</h2>
                            </div>
                        </div>
                        <div className='partners'>
                            <div className='p_img'>
                                <img src={require(`./image/p1.png`)}></img>
                            </div>
                            <div className='p_img'>
                                <img src={require(`./image/p2.png`)}></img>
                            </div>
                            <div className='p_img'>
                                <img src={require(`./image/p3.png`)}></img>
                            </div>
                            <div className='p_img'>
                                <img src={require(`./image/p4.png`)}></img>
                            </div>
                            <div className='p_img'>
                                <img src={require(`./image/p5.png`)}></img>
                            </div>
                            <div className='p_img'>
                                <img src={require(`./image/p6.png`)}></img>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='container'>
                    <div className='tags'>
                        <div className='tag_heading'>
                            <h5>Our Demanded Course -</h5>
                        </div>
                        <div className='tag_name'>
                            <a href='#'>Wordpress Company In Surat</a>
                            <a href='#'>Best Lumion Training Institute</a>
                            <a href='#'>Unity Game Development Course</a>
                            <a href='#'>Best Graphics Design Training Institute In Surat</a>
                            <a href='#'>English Speaking course</a>
                            <a href='#'>Php Institute In Surat</a>
                            <a href='#'>Autocad Training Institute In Mota Varachha</a>
                            <a href='#'>Photoshop Training Institute</a>
                            <a href='#'>Best Nodejs Training Institute</a>
                            <a href='#'>Adobe Illustrator Design</a>
                            <a href='#'>Maya 3d Animation Training Institute In Surat</a>
                            <a href='#'>Civil Engineering Training Institute In Katargam</a>
                            <a href='#'>C++ Programming Launguage Training Institue In Katargam</a>
                            <a href='#'>Laravrl Training Institute</a>
                            <a href='#'>Best Animation Training Course</a>
                            <p>Show More</p>
                        </div>
                    </div>
                </div>

                {/* **************************************************************
                                        Footer
                ******************************************************************/}
                
                <footer>
                    <div className='bgblue spacer'>
                        <div className='container'>
                            <div className='f_row'>
                                <div className='f_logo'>
                                    <div className='footer_logo'>
                                        <a href='#'><img src={flogo}></img></a>
                                    </div>
                                    <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                    <h6>FOLLOW US ON</h6>
                                    <ul className="icons ">
                                        <li className='f-icons'><a href='https://www.facebook.com/'><i><FaFacebookF></FaFacebookF></i></a></li>
                                        <li className='f-icons'><a href='https://www.facebook.com/'><i><FaTwitter></FaTwitter></i></a></li>
                                        <li className='f-icons'><a href='https://www.facebook.com/'><i><TfiGoogle></TfiGoogle></i></a></li>
                                        <li className='f-icons'><a href='https://www.facebook.com/'><i><FaLinkedinIn></FaLinkedinIn></i></a></li>
                                        <li className='f-icons'><a href='https://www.facebook.com/'><i><ImInstagram></ImInstagram></i></a></li>
                                        <li className='f-icons'><a href='https://www.facebook.com/'><i><BsPlayBtn></BsPlayBtn></i></a></li>
                                        <li className='f-icons'><a href='https://www.facebook.com/'><i><BsWhatsapp></BsWhatsapp></i></a></li>
                                    </ul>
                                </div>
                                <div className='feature'>
                                    <h6 className='f_title'>FEATURES LINKS</h6>
                                    <ul className='feature_name'>
                                        <li><a href='#'><i><FaHandPointRight></FaHandPointRight></i>About Us</a></li>
                                        <li><a href='#'><i><FaHandPointRight></FaHandPointRight></i>Blogs</a></li>
                                        <li><a href='#'><i><FaHandPointRight></FaHandPointRight></i>Join Us</a></li>
                                        <li><a href='#'><i><FaHandPointRight></FaHandPointRight></i>Company Login</a></li>
                                        <li><a href='#'><i><FaHandPointRight></FaHandPointRight></i>Certificate Verification</a></li>
                                    </ul>
                                </div>
                                <div className='contact'>
                                    <h6 className='f_title'>CONTACT US</h6>
                                    <div className='head_office'>
                                        <h6><a href='#'>HEAD OFFICE - YOGICHOWK</a></h6>     
                                    </div>
                                    <span className='address'>401-404,4<sup>th</sup>Floor,City Center Complex,Nr.YogiChowk,
                                        Varachha,Surat.</span>
                                    <p>Mo.<a href='#' className='mo'>+91 90333 16003</a></p>
                                    <div className='head_office'>
                                        <h6><a href='#'>OTHER BRANCHES</a></h6>     
                                    </div>
                                    <ul className='feature_name'>
                                        <li><a href='#'><i><FaUniversity></FaUniversity></i>Katargam</a></li>
                                        <li><a href='#'><i><FaUniversity></FaUniversity></i>Mota Vrachha</a></li>
                                        <li><a href='#'><i><FaUniversity></FaUniversity></i>Adajan</a></li>
                                        <li><a href='#'><i><FaUniversity></FaUniversity></i>Navsari</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom_footer dark_blue'>
                        <div className='container'>
                            <div className='bottom'>
                                <p class="copyright m-md-0 text-center text-md-left">© 2023 All Rights Reserved by Creative Design &amp; Multimedia Institute.</p>
                            </div>
                        </div>
                    </div>
                </footer>

            </main>
        </section>
    )
}

export default App;
