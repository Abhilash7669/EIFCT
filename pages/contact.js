/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";

import emailjs from 'emailjs-com';

export default function Contact(){

    let Title = "Let Us Be Your Beacon of Hope"
    let SubTitle = " Our contact form is a lifeline for those seeking assistance and support at ENHANCE INDIA FOUNDATION CHARITABLE TRUST. We understand that life can sometimes feel overwhelming, but you don't have to face it alone."

    // Form 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [option, setOption] = useState('');

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update state based on input name
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'mobileNumber':
        setMobileNumber(value);
        break;
      case 'option':
        setOption(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const form = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    

    if (Object.keys(validationErrors).length === 0) {

      // Form is valid, you can submit or perform further actions here
      emailjs.sendForm('service_nu944ga', 'template_z4tseh9', form.current, 'upcY4JFuC8LugmqoZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      console.log('Form submitted');
    }
  };

  const validateForm = () => { // validation for form
    const errors = {};

    // if (!fullName.trim()) {
    //   errors.fullName = 'Full name is required';
    // } else if (!/^[A-Za-z]+$/.test(fullName)) {
    //   errors.fullName = 'Full name should contain only alphabets';
    // }

    // if (!email.trim()) {
    //   errors.email = 'Email address is required';
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   errors.email = 'Invalid email address';
    // }

    // if (!mobileNumber.trim()) {
    //     errors.mobileNumber = 'Mobile number is required';
    //   }  else if (!/^[0-9]+$/.test(mobileNumber)) {
    //     errors.mobileNumber = 'Mobile number should contain only numbers';
    //   } else if (!/^\d{10}$/.test(mobileNumber)) {
    //     errors.mobileNumber = 'Mobile number should be 10 digits';
    //   }

    return errors;
  };

  // focus 
  // focus&blur Full name
  const [fullNameFocused, setFullNameFocused] = useState(false);
  const handleFullNameFocus = () => {
    setFullNameFocused(true);
  };

  const handleFullNameBlur = () => {
    setFullNameFocused(false);
  };
  // focus&blur Email
  const [emailFocused, setEmailFocused] = useState(false);
  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };
   // focus&blur MobileNumber
   const [mobileFocused, setMobileFocused] = useState(false);
   const handleMobileFocus = () => {
     setMobileFocused(true);
   };
 
   const handleMobileBlur = () => {
     setMobileFocused(false);
   };
   // focus&blur Message
   const [messageFocused, setMessageFocused] = useState(false);
   const handleMessageFocus = () => {
     setMessageFocused(true);
   };
 
   const handleMessageBlur = () => {
     setMessageFocused(false);
   };

    return(
        <>
        <section className="contact">
            <div className="contact_Container">
                <div className="contact_Text">
                    <div className="contact_Title grBold">
                        <p>
                            {
                                Title
                            }
                        </p>
                    </div>
                    <div className="contact_Subtitle">
                        <p>
                            {
                                SubTitle
                            }
                        </p>
                    </div>
                </div>
                <div className="contact_FormContainer">
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="form_Img">
                            <img src="/Landing/EIFCTLogo.svg" alt="logo" />
                        </div>
                        <div>
                            <div className="form_FullName">
                              <label htmlFor="fullName" 
                                  className={fullNameFocused ? 'textFocused' : 'textNotFocused'}>
                                      Full Name*
                                  </label> {/* First Name */}
                                  <input 
                                  type="text"
                                  id="firstName"
                                  name="firstName"
                                  value={fullName}
                                  onChange={handleChange}
                                  onFocus={handleFullNameFocus}
                                  onBlur={handleFullNameBlur}
                                  className={fullNameFocused ? 'focused' : 'notFocused'}
                                  placeholder='Full Name..'
                                  />
                                  {errors.fullName && <p className='form_Error'>{errors.fullName}</p>}
                            </div>
                            <div>
                              <select value={option} onChange={handleChange} name="option">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </select>
                            </div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}