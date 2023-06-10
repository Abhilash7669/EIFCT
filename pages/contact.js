/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Head from 'next/head'


import emailjs from 'emailjs-com';

//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Contact(){

    let Title = "Let Us Be Your Beacon of Hope"
    let SubTitle = " Our contact form is a lifeline for those seeking assistance and support at ENHANCE INDIA FOUNDATION CHARITABLE TRUST. We understand that life can sometimes feel overwhelming, but you don't have to face it alone."

    //Pop up text
    let popupText = 'Hi, we see that you have picked the "Shelter/Home".'
    let popupTextBr = "Kindly find the download link to the form below, download and fill in the form and send it to this *insert mail here"

    const popupRef = useRef();

    const hidePopup = () => {
        popupRef.current.style.display = "none";
    }


    // Form 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [option, setOption] = useState('');
  const [address, setAddress] = useState('');

  // const [file, setFile] = useState('');

  const [errors, setErrors] = useState({});

  const handleChange =  (event) => {
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
      case 'address':
        setAddress(value);
        break;
      case 'message':
        setMessage(value);
        break;
      // case 'my_file':
      //   setFile(value);
      default:
        break;
    }
  };

  const form = useRef();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);



    if (Object.keys(validationErrors).length === 0) {

      // Form is valid, you can submit or perform further actions here
      // emailjs.sendForm('service_x3668de', 'template_yxc2vtv', form.current, 'Q6aK5xiFRMCqHxL4q')
      emailjs.sendForm('service_nu944ga', 'template_z4tseh9', form.current, 'upcY4JFuC8LugmqoZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      // Clear form
      setFullName('');
      setEmail('');
      setMobileNumber('');
      setMessage('');
      setOption('');
      setAddress('');
      setErrors({});
      

      
      console.log('Form submitted');
      alert("Your Form has been submitted");
    }
  };


  const validateForm = () => { // validation for form
    const errors = {};

     if (!fullName.trim()) {
       errors.fullName = 'Full name is required';
     } else if (!/^[A-Za-z]+$/.test(fullName)) {
       errors.fullName = 'Full name should contain only alphabets';
     }

     if (!email.trim()) {
       errors.email = 'Email address is required';
     } else if (!/\S+@\S+\.\S+/.test(email)) {
       errors.email = 'Invalid email address';
     }

     if (!mobileNumber.trim()) {
         errors.mobileNumber = 'Mobile number is required';
       }  else if (!/^[0-9]+$/.test(mobileNumber)) {
         errors.mobileNumber = 'Mobile number should contain only numbers';
       } else if (!/^\d{10}$/.test(mobileNumber)) {
         errors.mobileNumber = 'Mobile number should be 10 digits';
       }
      
       if(!address.trim()) {
        errors.address = 'Address is required'
       }

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

   // focus and blur address
   const [addressFocused, setAddressFocused] = useState(false);

   const handleAddressFocus = () => {
      setAddressFocused(true);
   }

   const handleAddressBlur = () => {
      setAddressFocused(false);
   }

    //anim
    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

    useEffect(() => {
      gsap.to('.cntTitle', {
        scrollTrigger: {
            trigger: '.cntTitle',
            start: 'top bottom',
        },
         y: 0,
        duration: 0.2,
    })

    gsap.to('.cntSubtitle', {
      scrollTrigger: {
          trigger: '.cntSubtitle',
          start: 'top bottom',
      },
       y: 0,
       delay:0.5,
      duration: 0.2,
  })
    }, [])

  


    return(
        <>
        <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>EnhanceIndiaFoundation</title>
            <meta name="title" content="EnhanceIndiaFoundation" />
            <meta name="description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io" />
            <meta property="og:title" content="EnhanceIndiaFoundation" />
            <meta property="og:description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io" />
            <meta property="twitter:title" content="EnhanceIndiaFoundation" />
            <meta property="twitter:description" content="We believe that every person deserves the opportunity to live a life of dignity and purpose, and it is our goal to help make this a reality for as many people as possible." />
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>

            {/* favicon */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
        <section className="contactBg" style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div className="contact_Text" style={{display:'flex', flexDirection:'column', alignItems:'center', zIndex:'1000'}}>
                    <div className="contact_Title grBold ofh">
                        <p className="cntTitle" style={{color:'#FFF', transform:'translateY(100%)',  transition: `all 1s ${quint}`}}>
                            {
                              Title
                            }
                        </p>
                    </div>
                    <div className="contact_Subtitle ofh">
                        <p className="cntSubtitle" style={{textAlign:'center', color:'#FFFF', transform:'translateY(100%)', transition: `all 1s ${quint}`}}>
                            {
                              SubTitle
                            }
                        </p>
                    </div>
                </div>
        </section>
        <section className="contact">
            <div className="contact_Container">
                <div className="contact_FormContainer">
                    <form className="form_Form" ref={form} onSubmit={handleSubmit}>
                    <div className="form_ImgContainer">
                      <div className="form_Img">
                        <img src="/Landing/EIFCTLogo.svg" alt="logo" />
                      </div>
                    </div>
                      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <div className="form_FullName center">
                          <label htmlFor="fullName" 
                              className={fullNameFocused ? 'textFocused' : 'textNotFocused'}>
                                  Full Name*
                              </label>
                              <input 
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={fullName}
                              onChange={handleChange}
                              onFocus={handleFullNameFocus}
                              onBlur={handleFullNameBlur}
                              className={fullNameFocused ? 'focused' : 'notFocused'}
                              placeholder='Full Name..'
                              />
                              {errors.fullName && <p className='form_Error'>{errors.fullName}</p>}
                        </div>
                        {/* mobile */}
                      <div className="form_MobileNumber center">
                        <label htmlFor="mobileNumber" 
                              className={mobileFocused ? 'textFocused' : 'textNotFocused'}>
                              MobileNumber*
                        </label>
                              <input 
                              type="text"
                              id="mobileNumber"
                              name="mobileNumber"
                              value={mobileNumber}
                              onChange={handleChange}
                              onFocus={handleMobileFocus}
                              onBlur={handleMobileBlur}
                              className={mobileFocused ? 'focused' : 'notFocused'}
                              placeholder='Mobile Number'
                              />
                              {errors.mobileNumber && <p className='form_Error'>{errors.mobileNumber}</p>}
                      </div>
                            
                      </div>
                      
                      {/*  */}
                      <div className="form_Email center">
                              <label htmlFor="email" 
                                      className={emailFocused ? 'textFocused' : 'textNotFocused'}>
                                      Email *
                                </label>
                                      <input 
                                      type="text"
                                      id="email"
                                      name="email"
                                      value={email}
                                      onChange={handleChange}
                                      onFocus={handleEmailFocus}
                                      onBlur={handleEmailBlur}
                                      className={emailFocused ? 'focused' : 'notFocused'}
                                      placeholder='Email'
                                      />
                                      {errors.email && <p className='form_Error'>{errors.email}</p>}
                              </div>
                      {/* address */}
                      <div className="form_Address center">
                        <label htmlFor="address" 
                              className={addressFocused ? 'textFocused' : 'textNotFocused'}>
                              Address*
                        </label>
                              <input 
                              type="text"
                              id="address"
                              name="address"
                              value={address}
                              onChange={handleChange}
                              onFocus={handleAddressFocus}
                              onBlur={handleAddressBlur}
                              className={addressFocused ? 'focused' : 'notFocused'}
                              placeholder='Enter your Address'
                              />
                              {errors.address && <p className='form_Error'>{errors.address}</p>}
                      </div>
                      <div className="center">
                        <label htmlFor="option" className={messageFocused ? 'textFocused' : 'textNotFocused'}>Reason to reach out</label>
                          <select id="dropdown" value={option} onChange={handleChange} name="option">
                            <option value="" disabled selected hidden>In need of..</option>
                            <option value="In need of Shelter/Home">Shelter/Home</option>
                            <option value="Education">Education</option>
                            <option value="Food relief packages">Food</option>
                            <option value="Women Empowerment">Water</option>
                            <option value="Medical and Health care">Medical and Health care</option>
                          </select>
                      </div>
                      <div className="form_Message center">
                        <label htmlFor="message" 
                              className={messageFocused ? 'textFocused' : 'textNotFocused'}>
                                  Message (optional)
                              </label> {/* Message */}
                              <textarea
                              type="text"
                              id="message"
                              name="message"
                              value={message}
                              onChange={handleChange}
                              onFocus={handleMessageFocus}
                              onBlur={handleMessageBlur}
                              className={messageFocused ? 'focused' : 'notFocused'}
                              rows={4} // Specify the number of rows for the textarea
                              cols={40} // Specify the number of columns for the textarea
                              />
                      </div>
                      {/* if option is home this will be displayed */}
                      {
                        option === "In need of Shelter/Home" ?
                        <div ref={popupRef} style={{height:'100vh', width:'100vw', position:'fixed', top:'0', left:'0', zIndex:'9200', background:'#FFF', color:'#000', display:'flex', alignItems:'center', justifyContent:'center'}}> 
                        <div style={{position:'absolute', top:'10%', right:'10%', cursor:'pointer'}} onClick={hidePopup}>X</div>
                          <div className="popUpText_Container">
                            <p style={{color:'#FFF'}}>
                              {popupText} <br /> { popupTextBr } 
                            </p>
                            <a style={{color:'#FFF', opacity:'0.9'}} href="/contact/ENHANCE INDIA FOUNTATION FORM new with house.pdf" target="_blank">DOWNLOAD FORM</a>
                          </div>
                        </div>
                        :
                        null
                      }
                      <div className="homeDiv" style={{display: option === "In need of Shelter/Home" ? 'flex':'none', flexDirection:'column', alignItems:'center', padding:'1em 0 3em 0'}}>
                        <label>
                          Download the below form, update and send the form to *insert mail via email
                        </label>
                        <a href="/contact/ENHANCE INDIA FOUNTATION FORM new with house.pdf">DOWNLOAD FORM</a>
                      </div>
                      {/*  */}
                      <div className="form_Btn">
                      <button type="submit">Submit</button>
                      </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}