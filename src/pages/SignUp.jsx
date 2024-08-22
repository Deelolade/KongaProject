import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Logo from"../Images/pinkKongaLogo.png"
import { Link } from 'react-router-dom'

const SignUp = () => {
  const inputstyle ={
    color: "black",
    fontSize: "13px",
    border:"1px solid #000"
  }
  const ValidationSchema = yup.object().shape({
    firstname: yup.string().required("Please fill out this field"),
    lastname: yup.string().required("Please fill out this field"),
    phoneNumber: yup.string().required("Please fill out this field").matches(/^\d{11,}$/, "Phone number must be at least 11 digits long and contain only numbers"),
    email: yup.string().email().required("Please fill out this field"),
    password: yup.string().required("Please fill out this field").min(4).max(20),
})
const { register,handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(ValidationSchema)
})
const onSubmit = (data) => {
    console.log(data)
}
  return (
    <div className='form-body  pt-3  '>
        <div className='form-image-body my-2'>
        <img src={Logo} alt="Konga Logo" className='signup-image ' />
        </div>
      <div className='form-container mt-5 shadow-2 border border-1 '>
          <h1 className='form-heading '>Create an account</h1>
        <form action="" className='form mt-3 px-3 py-4 border border-1' onSubmit = {handleSubmit(onSubmit)}>
          <div className=' form-input my-2'>
          <label htmlFor="full name" className="form-label">First Name </label>
          <input type="text" name="" id="full name" placeholder=' Enter first name'{...register('firstname')} className='form-control py-2 rounded-1' style={inputstyle}/>
          {errors.firstname && <p className='errors'>*{errors.firstname?.message}</p>}
          </div>
          <div className=' form-input my-2'>
          <label htmlFor="last name" className="form-label">Last Name </label>
          <input type="text" name="" id="last name" placeholder=' Enter last name'{...register('lastname')} className=' form-control py-2 rounded-1' style={inputstyle}/>
          {errors.lastname && <p className='errors'>*{errors.lastname?.message}</p>}
          </div>
          <div className=' form-input my-2'>
          <label htmlFor="Phone Number" className="form-label">Phone Number </label>
          <input type="text" name="" id=" Phone Number " placeholder=' Enter phone number'{...register('phoneNumber')} className=' form-control py-2 rounded-1' style={inputstyle}/>
          {errors.phoneNumber && <p className='errors'>*{errors.phoneNumber?.message}</p>}
          </div>
          <div className='form-input my-2 '>
          <label htmlFor="email" className="form-label">Email Address </label>
          <input type="text" name="" id="email" placeholder='Enter Email Address' {...register('email')} className='form-control py-2 rounded-1' style={inputstyle}/>
          {errors.email && <p className='errors'>*{errors.email?.message}</p>}
          </div>
          
          <div className='form-input my-2'>
          <label htmlFor="password">Enter Password </label>
          <input type="password" name="" id="password" placeholder='Password' {...register('password')} className=' form-control py-2 rounded-1 ' style={inputstyle}/>
          {errors.password && <p className='errors'>*{errors.password?.message}</p>}
          </div>
          <div className='form-input-text mt-3'>
            {/* <input type="submit" value ="Create an account" className='submit-button form-control' /> */}
            <button className="btn btn-success submit-button form-control py-1 rounded-1 " type='submit'> <h4 className='submit-button-text'>Create an account</h4></button>
          <div className="form-input-passage px-4">
          <p className='mt-3'>By signing up you accept our <span>terms and conditions & privacy policy</span> </p>
          </div>

          </div>
        </form> 
        <div className="form-footer  mt-2 mx-2">
          <div className="form-footer-text mx-5">
          <p>Already have an account?</p>
          </div>
          <button className="btn  form-footer-button form-control " type='submit'><h4 className='form-footer-button py-2 rounded-1 '><Link to="/login" className="nav-link" >Login</Link></h4></button>
        </div>
    </div>
  </div>  
  )
}

export default SignUp
