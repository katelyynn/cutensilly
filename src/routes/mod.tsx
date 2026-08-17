import { Card } from '../components/card.tsx';
import { Quote } from '../components/quote.tsx';
import { Table, TableEntry } from '../components/table.tsx';
import Time from '../components/time.tsx';

export default function Home() {
	return (
		<>
			<Card>
				<h2>welcome to my corner of the interwebs ~</h2>
				<p>
					i am a <b>self-taught programmer</b>{' '}
					mainly focusing on web dev at the moment, though i'm
					exploring other avenues. i'm very interested in{' '}
					<b>ui design</b> {'&'} the joy i get from doing so.
				</p>
				<p>
					i am the sole designer behind all my projects, noteably my
					{' '}
					<a href='https://bleh.yuzu.pet' target='_blank'>
						last.fm redesign bleh
					</a>. it aims to revitalise last.fm into the present day,
					with a lot of very subjective design choices and
					improvements. do check it out if interested !!
				</p>
				<p>
					i try my best and thats the most you should expect from
					people i thinks.. everyone should be kind to eachother.
				</p>
				<Quote cite='hazel, my lifelong angel (sis) ♡'>
					kathy, katie, kate, katelyn<br />wateva it is im gonna marry
					her
				</Quote>
			</Card>
			<Card>
				<h2>all of these r real</h2>
				<Table>
					<TableEntry k='prns'>it/she</TableEntry>
					<TableEntry k='height'>
						about 20cm max
					</TableEntry>
					<TableEntry k='time'>
						<Time />
					</TableEntry>
				</Table>
			</Card>
			<Card>
				<h3>recent tunes</h3>
				<h3>i’m thinking...</h3>
			</Card>
		</>
	);
}
