import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { BsArrowRightShort } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Contact = () => {

  const form = useRef();
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_57pnb4b', 'template_8sy0i3p', form.current, {
        publicKey: 'bUrGgnsLXMM9X5oxG',
      })
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true)
        },
      );
  };

  useGSAP(()=> {
    gsap.from(".contact__card-icon",{
      y:150,
      opacity:0,
      duration:0.5,
      stagger:0.1,
      scrollTrigger : ".contact__card-icon"
    })
    gsap.from(".contact__card-title",{
      y:150,
      opacity:0,
      duration:0.5,
      stagger:0.1,
      scrollTrigger : ".contact__card-title"
    })
    gsap.from(".contact__card-data",{
      y:150,
      opacity:0,
      duration:0.5,
      stagger:0.1,
      scrollTrigger : ".contact__card-data"
    })
    gsap.from(".contact__button",{
      y:150,
      opacity:0,
      duration:0.5,
      stagger:0.1,
      scrollTrigger : ".contact__button"
    })
    gsap.from(".contact__form-div",{
      y:150,
      opacity:0,
      duration:0.5,
      stagger:0.1,
      scrollTrigger : ".contact__form-div"
    })
    gsap.from(".contact-button",{
      y:150,
      opacity:0,
      duration:0.5,
      stagger:0.1,
      scrollTrigger : ".contact__form-area"
    })
  },[])
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <BiMailSend className="contact__card-icon"/>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">itxawais@gmail.com</span>

              <a
                target="_blank"
                href="mailto:itxawais@gmail.com"
                className="contact__button"
              >
                Write me <BsArrowRightShort className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <BsWhatsapp className="contact__card-icon"/>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+923070471863</span>

              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=923070471863&text=Hello, more information!"
                className="contact__button"
              >
                Write me 
                <BsArrowRightShort className="contact__button-icon"/>
              </a>
            </div>

            <div className="contact__card">
              <BsMessenger className="contact__card-icon"/>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Awais Ahmad</span>

              <a
                target="_blank"
                href="https://www.messenger.com/t/100065232211666"
                className="contact__button"
              >
                Write me <BsArrowRightShort className="contact__button-icon"/>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                Name
              </label>
              <input
                autoComplete="xyz"
                required
                type="text"
                name="name"
                id="name"
                placeholder="Insert your name"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                Email
              </label>
              <input
                autoComplete="xyz@gmail.com"
                required
                type="email"
                name="email"
                id="email"
                placeholder="Insert your mail"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="project" className="contact__form-tag">
                Project
              </label>
              <textarea
                required
                name="project"
                id="project"
                className="contact__form-input"
                placeholder="Enter Your Project"
              ></textarea>
            </div>
               <div className='result_error'>
            {error && "Something went wronge,please try again!"}
            {success && "Successfuly sent"}
            </div>
            <button className="button button--flex contact-button">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
           
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
