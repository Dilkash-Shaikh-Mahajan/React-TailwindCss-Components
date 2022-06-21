import React, { useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
const Navbars = () => {
	const [isOpenNavbar, setIsOpenNavbar] = useState(false);
	return (
		<div>
			<div class='relative w-full'>
				<header>
					<input
						type='checkbox'
						name='hbr'
						id='hbr'
						class='hbr peer'
						hidden
						aria-hidden='true'
					/>
					<nav class='fixed z-10 w-full border-b bg-white bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active md:absolute md:bg-transparent'>
						<div class='container m-auto px-2 md:px-12 lg:px-7'>
							<div class='flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0'>
								<div class='w-full px-6 flex justify-between lg:w-max md:px-0'>
									<a
										href='#'
										aria-label='logo'
										class='flex space-x-2 items-center'>
										<div
											aria-hidden='true'
											class='flex space-x-1'>
											<div class='h-4 w-4 rounded-full bg-gray-900'></div>
											<div class='h-6 w-2 bg-sky-500'></div>
										</div>
										<span class='text-base font-bold text-gray-400'>
											SASS
										</span>
									</a>
									<label
										onClick={() =>
											setIsOpenNavbar(!isOpenNavbar)
										}
										for='hbr'
										class='peer-checked:hamburger
										block relative z-20 p-6 -mr-6
										cursor-pointer lg:hidden'>
										{isOpenNavbar ? (
											<HiOutlineX
												style={{
													height: '20px',
													width: '25px',
												}}
												class='m-auto h-4 w-6 rounded text-sky-900 transition duration-300'
											/>
										) : (
											<>
												<div
													aria-hidden='true'
													class='m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300'></div>
												<div
													aria-hidden='true'
													class='m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300'></div>
											</>
										)}
									</label>
								</div>
								{!isOpenNavbar ? (
									<div class='navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none'>
										<div class='text-gray-600 lg:pr-4'>
											<ul class='space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0'>
												<li>
													<a
														href='#'
														class='block md:px-4 transition hover:text-sky-700'>
														<span>Home</span>
													</a>
												</li>
												<li>
													<a
														href='#'
														class='block md:px-4 transition hover:text-sky-700'>
														<span>Portfolio</span>
													</a>
												</li>
												<li>
													<a
														href='#'
														class='block md:px-4 transition hover:text-sky-700'>
														<span>Services</span>
													</a>
												</li>
											</ul>
										</div>

										<div class='w-full space-y-2 border-sky-200 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l'>
											<button
												type='button'
												title='Start buying'
												class='w-full py-2.5 px-5 text-center rounded-full transition active:bg-sky-200 focus:bg-sky-100 sm:w-max'>
												<span class='block text-sky-800 font-semibold lg:text-sm'>
													Sign up
												</span>
											</button>
											<button
												type='button'
												title='Start buying'
												class='w-full py-2.5 px-5 text-center rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 sm:w-max'>
												<span class='block text-sky-900 font-semibold lg:text-sm'>
													Login
												</span>
											</button>
										</div>
									</div>
								) : (
									''
								)}
								{/* Mobile Nabvar */}

								{isOpenNavbar ? (
									<div class='navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none'>
										<div class='text-gray-600 lg:pr-4'>
											<ul class='space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0'>
												<li>
													<a
														href='#'
														class='block md:px-4 transition hover:text-sky-700'>
														<span>Home</span>
													</a>
												</li>
												<li>
													<a
														href='#'
														class='block md:px-4 transition hover:text-sky-700'>
														<span>Portfolio</span>
													</a>
												</li>
												<li>
													<a
														href='#'
														class='block md:px-4 transition hover:text-sky-700'>
														<span>Services</span>
													</a>
												</li>
											</ul>
										</div>

										<div class='w-full space-y-2 border-sky-200 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l'>
											<button
												type='button'
												title='Start buying'
												class='w-full py-2.5 px-5 text-center rounded-full transition active:bg-sky-200 focus:bg-sky-100 sm:w-max'>
												<span class='block text-sky-800 font-semibold lg:text-sm'>
													Sign up
												</span>
											</button>
											<button
												type='button'
												title='Start buying'
												class='w-full py-2.5 px-5 text-center rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 sm:w-max'>
												<span class='block text-sky-900 font-semibold lg:text-sm'>
													Login
												</span>
											</button>
										</div>
									</div>
								) : (
									''
								)}
							</div>
						</div>
					</nav>
				</header>

				<div class='container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0'>
					<div class='md:flex md:gap-12 pt-40 lg:py-56'>
						<div class='md:w-6/12'>
							<h1 class='text-gray-900 font-bold text-4xl xl:text-5xl'>
								Build in your way but with our experts{' '}
								<span class='text-sky-500'>Support.</span>
							</h1>
							<p class='mt-8 text-gray-700'>
								Odio incidunt nam itaque sed eius modi error
								totam sit illum. Voluptas doloribus asperiores
								quaerat aperiam. Quidem harum omnis beatae ipsum
								soluta!
							</p>
							<div class='md:-mr-32'>
								<form action='' class='w-full mt-12'>
									<div class='relative flex items-center p-1 rounded-full bg-white border border-sky-200 shadow-md md:p-2'>
										<div class='sm:pl-3 pl-6 py-3'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												class='h-6 w-6 m-auto text-gray-400'
												viewBox='0 0 20 20'
												fill='currentColor'>
												<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
												<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
											</svg>
										</div>
										<input
											placeholder='Your mail address'
											class='w-full p-4 rounded-full placeholder-gray-600'
											type='email'
										/>
										<button
											type='button'
											title='Start buying'
											class='ml-auto py-3 px-4 rounded-full text-center transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 md:px-8'>
											<span class='hidden w-max text-sky-900 font-semibold md:block'>
												Get Started
											</span>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												class='h-6 w-6 mx-auto text-sky-900 md:hidden'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												stroke-width='2'>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
												/>
											</svg>
										</button>
									</div>
								</form>
							</div>
						</div>
						<div class='mt-12 h-56 mr-0 md:-mr-24 overflow-hidden sm:h-72 md:h-auto md:mt-0 lg:mr-0 lg:-mt-12 md:w-7/12'>
							<img src='/Assets/job_hunt.svg' alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbars;
