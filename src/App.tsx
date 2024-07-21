import './App.css';
import { CreditCard } from './components/CreditCard/CreditCard.tsx';

function App() {
	return (
		<>
			<section
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
				}}>
				<CreditCard
					creditNumber={'1234567812345678'}
					holder='Justin'
					validDate={'26/09'}
					theme='Theme 8'
				/>
			</section>
		</>
	);
}
export default App;
