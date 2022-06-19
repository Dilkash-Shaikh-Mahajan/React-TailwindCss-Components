/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Team = () => {
	return (
		<div>
			<div class='py-20 bg-white'>
				<div class='container mx-auto px-6 md:px-12 text-center'>
					<div class='mb-16'>
						<h2 class='mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl'>
							Tailus blocks leadership
						</h2>
						<p class='text-gray-600 lg:w-8/12 lg:mx-auto'>
							Tailus prides itself not only on award-winning
							technology, but also on the talent of its people of
							some of the brightest minds and most experienced
							executives in business.
						</p>
					</div>
					<div class='py-20 grid gap-28 md:gap-12 md:grid-cols-3'>
						<div class='border-t-4 space-y-8 group'>
							<div class='w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden'>
								<img
									class='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]'
									src='/Assets/woman1.jpg'
									alt='woman'
									loading='lazy'
									width='640'
									height='805'
								/>
							</div>
							<div class='space-y-4 text-center'>
								<div>
									<h4 class='text-2xl'>Hentoni Doe</h4>
									<span class='block text-sm text-gray-500'>
										CEO-Founder
									</span>
								</div>
								<a
									href='#'
									class='block w-max mx-auto text-blue-600'>
									View Bio
								</a>
							</div>
						</div>

						<div class='border-t-4 space-y-8 group'>
							<div class='w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden'>
								<img
									class='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]'
									src='/Assets/woman.jpg'
									alt='woman'
									loading='lazy'
									width='1000'
									height='667'
								/>
							</div>
							<div class='space-y-4 text-center'>
								<div>
									<h4 class='text-2xl'>Anabelle Doe</h4>
									<span class='block text-sm text-gray-500'>
										Chief Operations Officer
									</span>
								</div>
								<a
									href='#'
									class='block w-max mx-auto text-blue-600'>
									View Bio
								</a>
							</div>
						</div>

						<div class='border-t-4 space-y-8 group'>
							<div class='w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden'>
								<img
									class='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]'
									src='/Assets/man.jpg'
									alt='man'
									loading='lazy'
									width='1000'
									height='667'
								/>
							</div>
							<div class='space-y-4 text-center'>
								<div>
									<h4 class='text-2xl'>Jonathan Doe</h4>
									<span class='block text-sm text-gray-500'>
										Chief Technical Officer
									</span>
								</div>
								<a
									href='#'
									class='block w-max mx-auto text-blue-600'>
									View Bio
								</a>
							</div>
						</div>
					</div>
					<button
						type='button'
						title='Start buying'
						class='w-max mx-auto py-3 px-6 text-center rounded-full transition border border-blue-200 active:bg-blue-200 focus:bg-blue-100'>
						<span class='block text-blue-600 font-semibold text-sm'>
							Load more...
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Team;
