import './seller.css'
import { useNavigate } from 'react-router-dom';
import DefaultButton from '../components/defaultbutton';
import Header from '../components/navbar';

const Seller = () => {
    const navText = "SELLER";

    const buttonTitle = "generate invoice";

    return (
        <>
        <div className='seller-page'>
           <header>
            <Header title={navText}/>
                <table className='seller-table'>
                    <tr>
                        <th>buyer list</th>
                    </tr>
                    <tr className='seller-table-row'>
                        <td className='seller-table-data'>B003</td>
                        <td className='seller-table-data'>INVOICE #191221B003</td>
                    </tr>
                    <tr className='seller-table-row'>
                        <td className='seller-table-data'>B005</td>
                        <td className='seller-table-data'>INVOICE #310123B005</td>
                    </tr>
                    <tr className='seller-table-row'>
                        <td className='seller-table-data'>B003</td>
                        <td className='seller-table-data'>INVOICE #020223B003</td>
                    </tr>
                    <tr className='seller-table-row'>
                        <td className='seller-table-data'>B008</td>
                        <td className='seller-table-data'>INVOICE #220223B008</td>
                    </tr>
                    <tr className='seller-table-row'>
                        <td className='seller-table-data'>B010</td>
                        <td className='seller-table-data'><DefaultButton button={buttonTitle}/></td>
                    </tr>
                </table>
           </header>
        </div>

        </>
    )

}

export default Seller