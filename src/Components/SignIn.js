/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
const SignInComponent = () => {
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(eye);

	const handleToggle = () => {
		if (type === 'password') {
			setIcon(eyeOff);
			setType('text');
		} else {
			setIcon(eye);
			setType('password');
		}
	};
	return (
		<div
			className='relative py-16
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200'>
			<div className='relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40'>
				<div className='m-auto space-y-8 md:w-8/12 lg:w-full'>
					<img
						src='/Assets/tailus.svg'
						loading='lazy'
						className='w-36 ml-4 h-full'
						alt='tailus logo'
					/>
					<div className='rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl'>
						<div className='lg:grid lg:grid-cols-2'>
							<div className='rounded-lg lg:block' hidden>
								<img
									src='/Assets/smiling.webp'
									className='rounded-l-xl h-full'
									loading='lazy'
									height=''
									width=''
									alt='music mood'
								/>
							</div>
							<div className='p-6 sm:p-16'>
								<h2 className='mb-8 text-2xl text-cyan-900 font-bold'>
									Sign in to your account
								</h2>
								<form action='' className='space-y-4'>
									<div className='space-y-2'>
										<label
											htmlFor='email'
											className='text-gray-700'>
											Email
										</label>
										<input
											type='email'
											name='email'
											id='email'
											className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400'
										/>
									</div>

									<div className='space-y-2'>
										<div className='flex items-center justify-between'>
											<label
												htmlFor='pwd'
												className='text-gray-700'>
												Password
											</label>
											<button
												className='p-2 -mr-2'
												type='reset'>
												<span className='text-sm text-sky-500'>
													Forgot your password ?
												</span>
											</button>
										</div>
										{/* Password toggle */}
										<div className='input-field relative'>
											<input
												type={type}
												className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400'
											/>
											<span
												onClick={handleToggle}
												className='absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
												<Icon icon={icon} size={25} />
											</span>
										</div>
									</div>
									{/* INput field */}
									<div className='space-y-4 '>
										<label className='text-gray-700'>
											Profile Photo
										</label>
										<label className='block cursor-pointer'>
											<span className='sr-only bg:blue-200 cursor-pointer'>
												Choose File
											</span>
											<input
												type='file'
												className='block cursor-pointer w-full text-sm file:text-slate-700 text-gray-500  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-400   hover:file:bg-blue-100'
											/>
										</label>
									</div>

									<button
										type='submit'
										className='w-full py-3 mt-2 px-6 rounded-md bg-sky-600
                                        focus:bg-sky-700 active:bg-sky-500'>
										<span className='text-white'>
											Continue
										</span>
									</button>

									<p className='border-t pt-6 text-sm'>
										Don't have an account ?
										<a href='#' className='text-sky-500'>
											Sign up
										</a>
									</p>
								</form>
								<h2 className='line-divider mt-3 text-center relative before:block before:w-full before:h-0.5 before:border before:border-solid before:border-gray-300 before:absolute before:top-3 before:z-2'>
									<span className='span-line-divider text-gray-600 z-5 bg-white relative px-6 py-0'>
										OR
									</span>
								</h2>
								<div className='mt-4 grid space-y-4'>
									<button
										className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'>
										<div className='relative flex items-center space-x-4 justify-center'>
											<img
												src='/Assets/google.svg'
												className='absolute left-0 w-5'
												alt='google logo'
											/>
											<span className='block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
												Continue with Google
											</span>
										</div>
									</button>
									<button
										className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'>
										<div className='relative flex items-center space-x-4 justify-center'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='currentColor'
												className='absolute left-0 w-5 text-gray-700'
												viewBox='0 0 16 16'>
												<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
											</svg>
											<span className='block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
												Continue with Github
											</span>
										</div>
									</button>
									<button
										className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'>
										<div className='relative flex items-center space-x-4 justify-center'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												className='absolute left-0 w-5 text-gray-700'
												viewBox='0 0 24 24'>
												<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
											</svg>
											<span className='block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
												Continue with Facebook
											</span>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='text-center space-x-4'>
						<span>&copy; tailus</span>
						<a href='#' className='text-sm hover:text-sky-900'>
							Contact
						</a>
						<a href='#' className='text-sm hover:text-sky-900'>
							Privacy & Terms
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignInComponent;
