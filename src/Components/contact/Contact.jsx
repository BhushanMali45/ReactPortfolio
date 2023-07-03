import "./contact.css";

import { useContext,  } from "react";
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';
// import { ThemeContext } from "../../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
//   const formRef = useRef();
//   const [done, setDone] = useState(false)
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;





  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_sgx2zrv', 'template_frhlitw', formRef.current, 'DyHyYabrKxK8NWOxT')
  //     .then((result) => {
  //         console.log(result.text);
  //         setDone(done);
        

  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };





  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Info </h1>
          <div className="c-info">

          <div className="c-info-item">
          <i class="fa-brands fa-linkedin  c-icon" ></i>
            <a href="https://www.linkedin.com/in/bhushan-mali-24b269221/" className="btn">Linkedin</a>
            </div>

            <div className="c-info-item">
            <i class="fa-brands fa-github c-icon"></i>
            
              <a href="https://github.com/BhushanMali45  ">Github</a>
            </div>
            <div className="c-info-item">
            <i class="fa-solid fa-phone  c-icon"></i>
              8530295356
            </div>
            <div className="c-info-item">
            <i class="fa-regular fa-envelope  c-icon" ></i>
             mbhushan4545@gmail.com
            </div>
            <div className="c-info-item">
              <i className="fa-solid fa-location-dot  c-icon"></i>
              
              At post Paldhi Tal-jamner 424205
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
<b>            want to improve something ?
</b>          </p>
          <form a  action="https://formspree.io/f/xrgvyevv"
  method="POST" >
            <input type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button className="btn">Submit</button>
         
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
