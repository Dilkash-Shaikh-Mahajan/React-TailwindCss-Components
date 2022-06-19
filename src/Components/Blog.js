/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Blog = () => {
	return (
		<div class='py-16 bg-gray-50'>
			<div class='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
				<div class='mb-12 space-y-2'>
					<span class='text-cyan-600'>Blog</span>
					<h2 class='text-2xl text-gray-900 font-bold md:text-4xl'>
						Sharing is Caring
					</h2>
					<p class='lg:w-6/12'>
						Quam hic dolore cumque voluptate rerum beatae et quae,
						tempore sunt, debitis dolorum officia aliquid explicabo?
						Excepturi, voluptate?
					</p>
				</div>

				<div class='grid gap-12 md:grid-cols-3'>
					<div class='group space-y-4'>
						<img
							src='/Assets/woman.jpg'
							alt='art cover'
							loading='lazy'
							width='1000'
							height='667'
							class='h-64 w-full object-cover object-top rounded-xl transition duration-500 group-hover:rounded-3xl'
						/>
						<div class='space-y-2'>
							<span class='text-cyan-500'>Frontend</span>
							<div class='space-y-4'>
								<h4 class='text-2xl font-semibold text-gray-700'>
									Provident id nesciunt illo eveniet commodi
									fuga fugiat laboriosam expedita.
								</h4>
								<p class='text-gray-600'>
									Quam hic dolore cumque voluptate rerum
									beatae et quae, tempore sunt dolorum.
								</p>
							</div>
						</div>
						<a href='#' class='block w-max text-cyan-600'>
							Read more
						</a>
					</div>
					<div class='group space-y-4'>
						<img
							src='/Assets/man.jpg'
							alt='art cover'
							loading='lazy'
							width='1000'
							height='667'
							class='h-64 w-full object-cover object-top rounded-xl transition duration-500 group-hover:rounded-3xl'
						/>
						<div class='space-y-2'>
							<span class='text-cyan-500'>Backend</span>
							<div class='space-y-4'>
								<h4 class='text-2xl font-semibold text-gray-700'>
									Provident id nesciunt illo eveniet commodi
									fuga fugiat laboriosam expedita.
								</h4>
								<p class='text-gray-600'>
									Quam hic dolore cumque voluptate rerum
									beatae et quae, tempore sunt dolorum.
								</p>
							</div>
						</div>
						<a href='#' class='block w-max text-cyan-600'>
							Read more
						</a>
					</div>
					<div class='group space-y-4'>
						<img
							src='/Assets/woman1.jpg'
							alt='art cover'
							loading='lazy'
							width='1000'
							height='667'
							class='h-64 object-center w-full object-cover object-top rounded-xl transition duration-500 group-hover:rounded-3xl'
						/>
						<div class='space-y-2'>
							<span class='text-cyan-500'>Backend</span>
							<div class='space-y-4'>
								<h4 class='text-2xl font-semibold text-gray-700'>
									Provident id nesciunt illo eveniet commodi
									fuga fugiat laboriosam expedita.
								</h4>
								<p class='text-gray-600'>
									Quam hic dolore cumque voluptate rerum
									beatae et quae, tempore sunt dolorum.
								</p>
							</div>
						</div>
						<a href='#' class='block w-max text-cyan-600'>
							Read more
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
