import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Logo from"../Images/pinkKongaLogo.png"
import { FaGoogle } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const inputstyle ={
        color: "#000",
        fontSize: "13px",
        border:"1px solid #9b9b9b",
        width:"21.5rem"
    }
    const ValidationSchema = yup.object().shape({
        emailAndNumber: yup.string().required("Please fill out this field").matches(/^\d{11,}$/, "This input is Invalid"),
        password: yup.string().required("Please fill out this field").min(4).max(20),
    })
    const { register,handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(ValidationSchema)
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        
        <div className='login-form-body  pt-3   '>
        <div className='form-image-body my-2'>
        <img src={Logo} alt="Konga Logo" className='signup-image ' />
        </div>
    <div className='login-form-container mt-5 shadow-2 border border-1' >
        <h1 className='form-heading '>Login</h1>
        <form action="" className='form mt-3 px-3 py-4 border border-1' onSubmit = {handleSubmit(onSubmit)}>
            <div className='form-label-head d-flex '>
                <div className="form-label-tab py-2 rounded-1 ">
                    <a href='https://google.com' target='_blank'> <span className='form-label-logo me-1'><FaGoogle /></span>Login with Google</a>
                </div>
                <div className="form-label-tab py-2  rounded-1">
                    <a href='https://apple.com' target="_blank"> <span className='form-label-logo me-1'><GrApple /></span> Login with Apple</a>
                </div>
            </div>
            <div className="form-section mt-3 ">
                <span></span>
            </div>
        <div className=' form-input mb-2'>
        <label htmlFor="email And Number" className="form-label mt-2">Email Address or Phone Number </label>
        <input type="text" name="" id="email And Number" placeholder='Enter Email Address or Phone Number '{...register('emailAndNumber')} className='py-2 rounded-1 px-2' style={inputstyle}/>
        {errors.emailAndNumber && <span className='errors'>*{errors.emailAndNumber?.message}</span>}
        </div>
        <div className='form-input my-2'>
        <label htmlFor="password">Enter Password </label> <span className='login-form-text'>Forgot Password?</span>
        <input type="password" name="" id="password" placeholder='Password' {...register('password')} className='py-2 rounded-1 px-2 ' style={inputstyle}/>
        {errors.password && <p className='errors'>*{errors.password?.message}</p>}
        </div>
        <div className='form-input-text mt-3'>
            {/* <input type="submit" value ="Create an account" className='submit-button form-control' /> */}
            <button className="btn btn-success submit-button form-contro py-1 rounded-1 " type='submit' style={{width:"21.5rem"}}> <h4 className='submit-button-text'>Login</h4></button>
        <div className="form-input-passage px-4">
        </div>

        </div>
        </form> 
        <div className="form-footer  mt-2 mx-2">
        <div className="form-footer-text mx-5 mt-3">
        <p>Don't have an account?</p>
        </div>
        <button className="btn  form-footer-button form-contl " type='submit'  style={{width:"21.5rem"}}><h4 className='form-footer-button py-2 rounded-1 '><Link to="/signup"  className='nav-link' >Create an Account</Link></h4></button>
        </div>
    </div>
</div>  

       )
}

export default LoginPage
