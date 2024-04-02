import { APP_NAME } from './config';

export default function Home() {
	return (
		<main className='w-[100dvw] h-[100dvh] flex items-center justify-center font-sans'>
			<div className='w-full h-[100dvh] p-10 max-w-screen-sm flex flex-col space-y-5'>
				<h1 className='text-3xl font-bold'>{APP_NAME}</h1>
			</div>
		</main>
	);
}
