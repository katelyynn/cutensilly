import { Card } from '../components/card.tsx';

export default function Home() {
	return (
		<>
			<Card>
				<h1>yuzu.pet</h1>
			</Card>
			<Card>
				<p>
					i am a <b>self taught programmer</b>{' '}
					mainly focusing on web dev at the moment, though im
					exploring other avenues.
				</p>
				<p>
					you may know me from{' '}
					<a href='https://bleh.yuzu.pet' target='_blank'>
						bleh, my last.fm extension
					</a>, and similar things like that o.O
				</p>
				<p>
					i try my best and thats the most you should expect from
					people i thinks.. everyone should be kind
				</p>
			</Card>
		</>
	);
}
