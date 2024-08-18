import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const SignUp = () => {
  const ValidationSchema = yup.object().shape({
    fullname: yup.string().required("The name field is required"),
    email: yup.string().email().required("The email field is required"),
    age: yup.number().positive().integer().required("The age field is required").min(18),
    password: yup.string().required().min(4).max(20),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'),null,"Password don't match"])
})
const { register,handleSubmit, formState:{ errors }} =useForm({
    resolver: yupResolver(ValidationSchema)
})
const onSubmit = (data) => {
    console.log(data)
}
  return (
    
      <div className='form-container'>
        <h4 className='form-profile'>user profile</h4>
        <form action="" className='form' onSubmit ={handleSubmit(onSubmit)}>
          <div className='form-input'>
          <label htmlFor="full name">Full name: </label>
          <input type="text" name="" id="full name" placeholder='Full name'{...register('fullname')}/>
          {errors.fullname && <p className='errors'>*{errors.fullname?.message}</p>}
          </div>
          <div className='form-input'>
          <label htmlFor="email">Email: </label>
          <input type="text" name="" id="email" placeholder='Email' {...register('email')}/>
          {errors.email && <p className='errors'>*{errors.email?.message}</p>}
          </div>
          <div className='form-input'>
          <label htmlFor="age">Age: </label>
          <input type="text" name="" id="age" placeholder='Age' {...register('age')}/>
          {errors.age && <p className='errors'>*{errors.age?.message}</p>}
          </div>
          <div className='form-input'>
          <label htmlFor="password">Password: </label>
          <input type="text" name="" id="password" placeholder='Password' {...register('password')}/>
          {errors.password && <p className='errors'>*{errors.password?.message}</p>}
          </div>
          <div className='form-input'>
          <label htmlFor="confirm-password">Confirm password: </label>
          <input type="text" name="" id="confirm-password"  placeholder='Confirm password'  {...register('confirmPassword')}/>
          {errors.confirmPassword && <p className='errors'>*{errors.confirmPassword?.message}</p>}
          </div>

          <div className='form-input'>
            <input type="submit" value ="submit" className='submit' />
            <button className='btn'>Sign Up</button>

          </div>
        </form> 
    </div>
  )
}

export default SignUp
