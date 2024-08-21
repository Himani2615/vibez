import React from 'react'
import GenderCheckbox from './GenderCheckBox'
const Signup = () => {
  return (
     		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
 			<div className='w-full p-6 rounded-lg shadow-md bg-green-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
 				<h1 className='text-3xl font-bold text-center text-gray-300 mb-5'>
 					SIGNUP
 				</h1>

 				<form>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base '>Full Name</span>
 						</label>
 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
 					</div>

 					<div>
 						<label className='label p-2 '>
 							<span className='text-base '>Username</span>
 						</label>
 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base '>Password</span>
 						</label>
 						<input
 							type='password'
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
 							placeholder='Confirm Password'
 							className='w-full input input-bordered h-10'
 						/>
 					</div>

 					<GenderCheckbox />

 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
 						Already have an account?
 					</a>

 					<div>
 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
 					</div>
 				</form>
 			</div>
 		</div>
  )
}

export default Signup