import { useState } from 'react'
import desktopImage from './assets/desktopImage.svg'
import mobileImage from './assets/mobileImage.svg'
import modalIcon from './assets/modalIcon.svg'
import './App.css'


const list = {
  header: 'Stay Updated!',
  body: 'Join 60,000+ product managers receiving monthly updates on:',
  listItemOne: 'Product discovery and building what matters',
  listItemTwo: 'Measuring to ensure updates are a success',
  listItemThree: 'And much more!',
  image: desktopImage,
  mobileimage: mobileImage,
  modalHeader: 'Thanks for subscribing!',
  modalImage: modalIcon
}

export default function App () {
  const [email, setEmail] = useState('')
  const [modal, setModal] = useState(false)
  const [hideForm, setHideForm] = useState(true)
  return (
    <>
{hideForm&&<Form header={list.header} body={list.body} 
listItemOne={list.listItemOne} 
listItemTwo={list.listItemTwo} 
listItemThree={list.listItemThree} 
desktopImage={list.image}
setEmail={setEmail} email={email}
modal={modal} setModal={setModal}
setHideForm={setHideForm}
/>}
{modal&&<Modal modalHeader={list.modalHeader} modalBody={list.modalBody} email={email} setMail={setEmail} modal={modal} setModal={setModal}
setHideForm={setHideForm}/>}
    </>
  )
}

function Form ({header, body, listItemOne, listItemTwo, listItemThree, setEmail, email, setHideForm, setModal}) {
  
 
  
  const [checkMail, setCheckMail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [inputState, setInputState] = useState('input')
  
  
  function handleValid (e) {
    const inputValue = e.target.value;
    setEmail(inputValue)
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)
    setCheckMail(validEmail);
    if(inputValue.length == 0) {
      setInputState('input');
      setSubmitted(false);
    }
    
  }

  
  function handleSubmit (e) {
    e.preventDefault()
    if (!checkMail ) {
     setInputState('invalid')
     setSubmitted(true);
      // alert('Invalid email');
    }  else {
      setModal(true)
      setHideForm(false)
    }
  }

return (
  <div className='body'>
  <div className='body-content'>
    <h1>{header}</h1>
    <p>{body}</p>
    <ul>
       <li> {listItemOne}</li>
        <li>{listItemTwo}</li>
        <li>{listItemThree}</li>
    </ul>
        <form className='form'>
          <div className='email-label'>
            <div className='label-wrapper'><label htmlFor='email'>Email address</label></div>
            <div className='error-wrapper'>{submitted && !checkMail && <h5 className='error'>invalid email address</h5>}</div>
          </div>
          <input className={inputState} type='email' value={email} id='email' name='email' placeholder='email@company.com' required onChange={handleValid}></input>
          <button type='submit' className='button' onClick={handleSubmit}>Subscribe to monthly newsletter</button>
        </form>
  </div>
  <div>
    <img src={desktopImage} alt='Desktop Image'></img>
  </div>
  </div>
)
}


function Modal ({modalHeader, email, setHideForm, setModal, setMail}) {
  function handleCloseModal () {
    setHideForm(true);
    setModal(false);
    setMail('')
  }
  return (
    <div className='modal'>
      <div>
         <img src={modalIcon} alt='modal icon'></img>
      <h1>{modalHeader}</h1>
      <p>A confirmation email has been sent to <b>{email}</b>. Pls, open it and click the button inside to confirm your subscription.</p>
      </div>
     
      <div><button className='button' onClick={handleCloseModal}>Dismiss message</button></div>
    </div>
  )
}


