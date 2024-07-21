import ContactlessPaymentIcon from '../../assets/ContactlessPayment.svg';
import PaymentGateway from '../../assets/PaymentGateway.svg';
import Sim from '../../assets/sim.svg';
import './CreditCard.css';

type CreditCardTheme =
	| 'Theme 1'
	| 'Theme 2'
	| 'Theme 3'
	| 'Theme 4'
	| 'Theme 5'
	| 'Theme 6'
	| 'Theme 7'
	| 'Theme 8'
	| 'Theme 9'
	| 'Theme 10'
	| 'Theme 11'
	| 'Theme 12';

interface CreditCardProp {
	creditNumber: string;
	holder: string;
	validDate: string;
	theme: CreditCardTheme;
}

export const CreditCard = ({
	creditNumber,
	holder,
	validDate,
	theme,
}: CreditCardProp) => {
	const finalCardNumber = creditNumber.match(/.{1,4}/g);
	const finalTheme = theme.replace('Theme ','');
	return (
		<>
			<section
				className='card shadow-2xl p-4 rounded-lg 
				flex flex-col justify-between	'
				style={{ background: `var(--bg-${finalTheme})` }}>
				<div className='card-header flex justify-between'>
					<div className='flex g-1 '>
						<img src={ContactlessPaymentIcon} alt='' />
						<p className='ml-2 text-white'>Credit Card</p>
					</div>
					<img src={PaymentGateway} alt='' />
				</div>

				<div className='card-body flex justify-between'>
					<p>{finalCardNumber ? finalCardNumber.join(' ') : ''}</p>
					<img src={Sim} alt='' />
				</div>

				<div className='card-footer flex justify-between'>
					<p >{holder}</p>
					<p>{validDate}</p>
				</div>
			</section>
		</>
	);
};
