import {React,useState} from 'react'
import GenderCheckbox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import signup from '../../hooks/useSignup'
import useSignup from '../../hooks/useSignup'
useSignup

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

  const{loading,signup} = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

  return (
     		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
 			<div className='w-full p-6 rounded-lg shadow-md bg-green-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
 				<h1 className='text-3xl font-bold text-center text-gray-300 mb-5'>
 					SIGNUP
 				</h1>

 				<form onSubmit={handleSubmit}>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base '>Full Name</span>
 						</label>
 						<input type='text' placeholder='John Doe'
						value={inputs.fullName} 
						onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}className='w-full input input-bordered  h-10' />
 					</div>

 					<div>
 						<label className='label p-2 '>
 							<span className='text-base '>Username</span>
 						</label>
 						<input type='text' 
						value={inputs.username}
						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}placeholder='johndoe' className='w-full input input-bordered h-10' />
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base '>Password</span>
 						</label>
 						<input
 							type='password'
							 value={inputs.password}
							 onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
 							placeholder='Enter Password'
 							className='w-full input input-bordered h-10'
 						/>
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base '>Confirm Password</span>
 						</label>
 						<input
 							type='password'
							 value={inputs.confirmPassword}
							 onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
 							placeholder='Confirm Password'
 							className='w-full input input-bordered h-10'
 						/>
 					</div>

 					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

 					<Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
 						Already have an account?
 					</Link>

 					<div>
 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'
						disabled={loading}>
							{loading?<span className='loading loading-spinner'></span>:"Sign Up"}
							</button>
 					</div>
 				</form>
 			</div>
 		</div>
  )
}

export default Signup