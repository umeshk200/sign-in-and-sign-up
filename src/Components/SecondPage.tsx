import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import styled from '@emotion/styled';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
// import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik,Form as FormikForm } from 'formik';
 import * as Yup from 'yup';
 import Spinner from 'react-bootstrap/Spinner';
 const SignupSchema = Yup.object().shape({
  emailId: Yup.string().email('Invalid email').required('Please enter a valid Email'),});

interface passcodeRequest {
  businessId: number;
  passcode: string;
}
// const Buttons = styled.div`
// width: 74px;
// border-radius: 12px;
// border: none;
// padding: 4px;
// display: flex;
// text-align: left;
// justify-content: center;
// `

const SecondPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [passCode, setPassCode] = useState('');
  const [load,setload]=useState(false)
  const navigate = useNavigate();
  let passcodeVal: string = '';
 
  
  // const [InputData, setInputData] = useState({
  //   emailId: "",

  // })
  // console.log(InputData)
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setInputData({
  //     ...InputData, [e.target.name]: value
  //   })
  // }


  const handleClick = (val: string) => {
    if (passCode.length > 5) return;
    passcodeVal = passCode + val;
    setPassCode(passcodeVal)

  }

  const handleSubmit = () => {
    const payload: passcodeRequest = {
      businessId: 4,
      passcode: passCode,
    }
    // console.log(payload)
    setload(true)
    axios.post("https://rehntitapistaging.azurewebsites.net/api/Auth/Passcode", payload)
      .then((res) => {
        toast("Submit Successfully")
        setTimeout(() => {
          navigate("/ThirdPage")
        }, 2000);

      })
     

      .catch((error) => {
        if (error) {
          toast("Invalid Passcode")
        }
        setload(false)
      })

  }
  ////Modal
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  const [ope, setOpe] = useState(false);
  const handleClickOpe = () => {
    setOpe(true);
  };
  const handleClos = () => {
    setOpe(false);
  }

  const passcodeTemplate: any = [];
  for (let i = 1; i <= 6; i++) {
    const length = passCode.length;
    console.log(passCode, length);
    let addClass = '';//(i === length || i < length) ? 'active' : '';
    if (i === length || i < length) {
      addClass = 'active';
    } else {
      addClass = '';
    }
    passcodeTemplate.push(<small className={`circle ${addClass}`}  ></small>)
  };

  const reset = () => {
    setPassCode('')
  };

  function submit1(values:any) {
    // setLoader(true);
    // event.preventDefault();
    // const form1 = event.currentTarget;
    // if (form1.checkValidity() === false) {
    //   event.preventDefault()
    //   event.stopPropagation();
    //   setValidated(true);
    //   // return;
    // }
    // else{
      // event.preventDefault()
    // setValidated(true);
    // setModalShow(false);
    // setLoader(true);
// axios.post()
const profile={
  "businessId":"4",
  "emailId": values.emailId,

}
// setLoader(true);

axios.post('https://rehntitapistaging.azurewebsites.net/api/Auth/ForgotPassword',profile)
.then(function (response) {
  console.log(response);
  // setLoader(false);
  toast.success(response.data.responseMessage, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  // setModalShow(false);
  // setLoader(false);

})
.catch(function (error) {
  console.log(error);
  toast.error(error.response.data.responseMessage, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  // setLoader(false);

});
  // setEmail({emailId:''})
    // }
    
  }

  return (
    <div>
      <div className="container d-flex justify-content-center mainSec mt-5">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 ">
            <img src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928" className='imgs' alt="" />
          </div>
          <span className='d-flex justify-content-center mt-2'>Enter Passcode</span>
          <div className='row'>
            <div className='col d-flex justify-content-center ms-4 gap-1'>
              {passcodeTemplate}
            </div>
            {/* <input type="text" name="passcode" placeholder='Enter code' value={passCode} /> */}
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <button type="button" name="1" onClick={() => handleClick('1')} className='allbtns'>1</button>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <button type="button" name="2" onClick={() => handleClick('2')} className='allbtns'>2</button>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <button type="button" name="3" onClick={() => handleClick('3')} className='allbtns'>3</button>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <button type="button" name="4" onClick={() => handleClick('4')} className='allbtns'>4</button>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <button type="button" name="5" onClick={() => handleClick('5')} className='allbtns'>5</button>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <button type="button" name="6" onClick={() => handleClick('6')} className='allbtns'>6</button>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <button type="button" name="7" onClick={() => handleClick('7')} className='allbtns'>7</button>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <button type="button" name="8" onClick={() => handleClick('8')} className='allbtns'>8</button>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <button type="button" name="9" onClick={() => handleClick('9')} className='allbtns'>9</button>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <span className='text-danger mt-2 clear' onClick={reset}>Clear</span>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <button type="button" name="0" onClick={() => handleClick('0')} className='allbtns'>0</button>
          </div>
          <div className="col-4 mt-4 d-flex justify-content-center">
            <span className='text-danger mt-2' >Delete</span>
          </div>
          <div className="col-6 mt-4 d-flex justify-content-cente">

            {/* <Link to={"/"}>  */}
            <button type="button" className='back ms-5' onClick={handleClickOpe}>Back</button>
            {/* </Link> */}
          </div>
          <div className="col-6 mt-4 d-flex justify-content-center">
            <a href="./https://rehntitposappstaging.azurewebsites.net/location">  </a>
            <button type="button" className='cancels me-5' onClick={() => handleSubmit()} >
            {
                  !load?<span>Conform</span>: <Spinner    size="sm"   animation="border" />
             } 
            </button>
          </div>
          <span className='d-flex justify-content-center mt-2 text-danger btn' onClick={handleClickOpen}>Forgot Password ?</span>
          <div className="col-6 mt-4 d-flex justify-content-center ">
            <span><i className="bi bi-envelope  "> </i>Email Login</span>
          </div>
          <div className="col-6 mt-4 d-flex justify-content-center  ">
            <span>Exit Main App</span>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} className=''>
        <DialogTitle>Reset Password<i className="bi bi-x  n"onClick={handleClose}></i></DialogTitle>
        <DialogContent>
          <DialogContentText> </DialogContentText>
          <Formik
       initialValues={{
         emailId: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={submit1}
     >
       {({ errors,values,handleChange }) => (
         <FormikForm className=""  >
          <Form.Group className="" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter email to reset password</Form.Label>
           
           <Form.Control
              
                placeholder="E-mail address"
                value={values.emailId}
               onChange={handleChange}
                name="emailId"
                 
              />
            <div style={{color:'red'}}>{errors.emailId}</div>
           <Button
              type="submit"
              variant="danger"
              // onClick={handleClose}
              style={{height:'36px',width:'80px'}}
              className="forgetdiv rounded-pill px-3 mt-3 "
            >Send
              
            </Button>
           </Form.Group>
          </FormikForm>
       )}
     </Formik>
        </DialogContent>
        <DialogActions>
          

        </DialogActions>
      </Dialog>



      <Dialog open={ope} onClose={handleClos} className=''>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <span style={{color:"red"}}>Are you sure you want to log out of the <br></br>main appliction?You will need the <br></br> master account to  re-login </span>
        </DialogContent>
        <DialogActions>
          <div className="main_btn">
            <Button onClick={handleClos} className=' bg-danger text-white modalBtn'>Cancel</Button>
            <Link to={"/"}><Button onClick={handleClos} className=' bg-danger text-white modalBtn '>Conform</Button></Link>
          </div>






        </DialogActions>
      </Dialog>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
        pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </div>
  );
}

export default SecondPage;
