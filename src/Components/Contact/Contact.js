import React from 'react';
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'


const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1cb5a9c9-7941-4455-8047-d02438a32e01");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact container'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Have questions or need assistance? Reach out to us! Our dedicated team is here to help you with any inquiries regarding admissions, programs, campus facilities, and more. Feel free to contact us via email, or visit our campus during office hours. We look forward to hearing from you and assisting you on your educational journey.</p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> tushartk.jha@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> 99999999999
          </li>
          <li>
            <img src={location_icon} alt="" />  qqqq,,q,,,,,,q,qqqqq
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Your Contat Number' required />
          <label > Write Your Message Here </label>
          <textarea name="mesaage" rows="6" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  );
}

export default Contact;
