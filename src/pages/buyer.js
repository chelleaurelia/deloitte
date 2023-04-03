import './buyer.css'
import Header from '../components/navbar';
import DefaultButton from '../components/defaultbutton';
import { useNavigate } from 'react-router-dom';

const Buyer = () => {
    const navText = "BUYER B003";
    
    const buttonTitle = "PAY";
    return (
        <>
        <div className='buyer-page'>
            <header>
                <Header title={navText}/>
            </header> 
            <table className='buyer-table'>
                    <tr>
                        <th>INVOICE</th>
                    </tr>
                    <tr className='buyer-table-row'>
                        <td className='buyer-table-data'>INVOICE #191221B003</td>
                        <td className='buyer-table-data'>PAID 01/02/2023</td>
                    </tr>
                    <tr className='buyer-table-row'>
                        <td className='buyer-table-data'>INVOICE #020223B003</td>
                        <td className='buyer-table-data'>PAID 15/02/2023</td>
                    </tr>
                    <tr className='buyer-table-row'>
                        <td className='buyer-table-data'>INVOICE #220223B003</td>
                        <td className='buyer-table-data'><DefaultButton button={buttonTitle}/></td>
                    </tr>
                </table>
        </div>
        </>
    )

}

export default Buyer