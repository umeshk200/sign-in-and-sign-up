
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import styled from '@emotion/styled';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Formik,Form as FormikForm } from 'formik';
 import * as Yup from 'yup';
 const SignupSchema = Yup.object().shape({
  emailId: Yup.string().email('Invalid email').required('Please enter a valid Email'),
});



const Buttons = styled.div`
width: 74px;
border-radius: 12px;
border: none;
padding: 4px;
display: flex;
text-align: left;
justify-content: center;
`

const FirstPage = () => {
  const navigate = useNavigate();
  const [InputData, setInputData] = useState({
    emailId: "",
    password: ""
  })
  const [load,setload]=useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputData({
      ...InputData, [e.target.name]: value
    })
  }
  const handleSubmi = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      "businessId": "4",
      "emailId": InputData.emailId,
      "applicationId": "58",
      "password": InputData.password,
      "ipAddress": "string",
      "rememberMe": true,
      "isEmployee": true
    };
    setload(true)

    axios
      .post("https://rehntitapistaging.azurewebsites.net/api/Auth/Login", userData)
      .then((res) => {
        // const data: any = res;
        // setInputData(data)
        toast("Submit Successfully")
        setTimeout(()=>{
          navigate("/secondPage") 
        },2000)
      })
      .catch((error) => {
        if (error) {
          toast("error")
        }

        setload(false)
      })
  }

// 2nd api

  function submit1(values:any) {
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











  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  // const handleSubmit = () => toast("Login error");
  return (
    <div>
      <div className="container d-flex justify-content-center mt-5  firstmain">
        <div className="row">
          <div className="col-sm-12  d-flex ">
            <form className='' onSubmit={handleSubmi} >
              <img src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928" className='imgs' alt="" />
              <label className="mt-2 p-2">Email address</label>
              <input type="email" className="form-control inputs" name="emailId" value={InputData.emailId} aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} required autoComplete='off' />
              <label className="mt-2">Password</label>
              <input type="password" className="form-control inputs" name="password" value={InputData.password} placeholder="Password" onChange={handleChange} required autoComplete='off' />
              <div className="form-check">
                <div className="row  d-flex mt-4 ">
                  <div className="col-sm-6">
                    <span>Remember me</span>
                    <input type="checkbox" className="form-check-input  " id="exampleCheck1" onChange={handleChange}/>
                  </div>
                  <div className="col-sm-6 text-danger ">
                    <span className='forgot' onClick={handleClickOpen}>ForgotPassword?</span>
                  </div>
                </div>
              </div>
              <button type="submit"  style={{width:"75px",height:'40px'}}  className="btn btn-danger     btns mt-3 "   > {
                  !load?<span>Login</span>: <Spinner    size="sm"   animation="border" />
             } </button>
            
            </form>
          </div>

        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
        pauseOnFocusLoss draggable pauseOnHover theme="light" />


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
         <FormikForm className="px-3"  >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
    </div>









  );
}

export default FirstPage;
