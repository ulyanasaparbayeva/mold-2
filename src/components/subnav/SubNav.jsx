import  flag from "../../images/flag.svg";
import  flags from "../../images/flags.png";
import {Link} from "react-router-dom";
import  phone from "../../images/phone.svg";
import  email from "../../images/email.svg";
import './SubNav.scss'
import {useState,useEffect } from "react";

const SubNav = () => {
  const [selectedImg, setSelectedImg] = useState(localStorage.getItem('selectedImg') || null);

  useEffect(() => {
    localStorage.setItem('selectedImg', selectedImg);
  }, [selectedImg]);


  const imgStyle = {
    borderBottom: selectedImg === 'flag' ? '4px solid #007aff' : 'none'
  };

  const imgStyle2 = {
    borderBottom: selectedImg === 'flags' ? '4px solid #007aff' : 'none'
  };
  return (
    <div className="nav">
      <div className="navbar_img"  onClick={() => setSelectedImg('flag')}>
        <img src={flag} style={imgStyle} />
      </div>
      <div  className="navbar_img" onClick={() => setSelectedImg('flags')}>
        <img src={flags}  style={imgStyle2}/>
      </div>
      <div className="navbar_contact">
         <div className="navbar_phone">
        <a href="tel:+89992475515"  className="nav-link">
          <img src={phone}/>
           <span>+998 91 186 00 85</span>
        </a>
         </div>
        <div className="navbar_phone">
          <Link to="mailto:erkinjon.hodjaev@gmail.com" target="_blank" className="nav-link">
            <img src={email}/>
            <span>erkinjon.hodjaev@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SubNav