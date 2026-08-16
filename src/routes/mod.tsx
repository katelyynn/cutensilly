import { Card } from '../components/card.tsx';
import { Quote } from '../components/quote.tsx';

export default function Home() {
	return (
		<>
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
				<Quote cite='hazel, my lifelong angel (sis) ♡'>
					kathy, katie, kate, katelyn<br />wateva it is im gonna marry
					her
				</Quote>
			</Card>
			<Card>
				<h3>recent tunes</h3>
				<h3>i’m thinking...</h3>
			</Card>
		</>
	);
}
