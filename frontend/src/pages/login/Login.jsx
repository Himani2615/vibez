import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-green-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
				<h1 className='text-3xl font-semibold text-center text-gray-300 mb-5'>
					LOGIN
					
				</h1>

        <form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base '>Username</span>
						</label>
						<input type='text' placeholder='Enter username' 
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base '>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='w-full input input-bordered h-10'
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2'>Login</button>
					</div>
				</form>
	
		
    </div>
    </div>
  )
}

export default Login