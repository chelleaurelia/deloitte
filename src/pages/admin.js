import './admin.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DefaultButton from '../components/defaultbutton';
import Header from '../components/navbar';

const Admin = () => {
    const navText = "ADMIN";

    const buttonTitle = "delete";

    const buttonSave = 'save';
    
    const [getNewUser, setNewUser] = useState("");

    const addUser = () => {
       setNewUser(
        <form className='new-user-form'>
            <table>
                <tr>
                    <td className='td-new-user'><label className='new-user-label'>username</label></td>
                    <td><input className='new-user-input'></input></td>
                </tr>
                <tr>
                    <td className='td-new-user'><label className='new-user-label'>role</label></td>
                    <td><input className='new-user-input'></input></td>
                </tr>
                <tr>
                    <td className='td-new-user'><label className='new-user-label'>password</label></td>
                    <td><input className='new-user-input'></input></td>
                </tr>
                <tr>
                    <td className='td-new-user'><DefaultButton button={buttonSave}/></td>
                </tr>
            </table>
        </form>
       );
    }

    return (
        <>
        <div className='admin-page'>
            <Header title={navText}/>
            <header>
                <table className='admin-table'>
                    <tr>
                        <th className='admin-table-header'>username</th>
                        <th className='admin-table-header'>roles</th>
                        <th className='admin-table-header'>actions</th>
                    </tr>
                    <tr className='admin-table-row'>
                        <td className='admin-table-data'>A005</td>
                        <td className='admin-table-data'>Admin</td>
                        <td className='admin-table-data'><DefaultButton button={buttonTitle}/></td>
                    </tr>
                    <tr className='admin-table-row'>
                        <td className='admin-table-data'>A008</td>
                        <td className='admin-table-data'>Admin</td>
                        <td className='admin-table-data'><DefaultButton button={buttonTitle}/></td>
                    </tr>
                    <tr className='admin-table-row'>
                        <td className='admin-table-data'>S001</td>
                        <td className='admin-table-data'>Seller</td>
                        <td className='admin-table-data'><DefaultButton button={buttonTitle}/></td>
                    </tr>
                    <tr className='admin-table-row'>
                        <td className='admin-table-data'>B003</td>
                        <td className='admin-table-data'>Buyer</td>
                        <td className='admin-table-data'><DefaultButton button={buttonTitle}/></td>
                    </tr>
                    <tr className='admin-table-row'>
                        <td className='admin-table-data'>B005</td>
                        <td className='admin-table-data'>Buyer</td>
                        <td className='admin-table-data'><DefaultButton button={buttonTitle}/></td>
                    </tr>
                    <tr className='admin-table-row'>
                        <td className='admin-table-data'>B008</td>
                        <td className='admin-table-data'>Buyer</td>
                        <td className='admin-table-data'><DefaultButton button={buttonTitle}/></td>
                    </tr>
                    <tr className='admin-table-row'>
                        <td className='admin-table-data'>B010</td>
                        <td className='admin-table-data'>Buyer</td>
                        <td className='admin-table-data'><DefaultButton button={buttonTitle}/></td>
                    </tr>
                </table>

                <br></br>
                
                <button className='add-button' onClick={ () => addUser()}>+ add new user</button>
                <p>{getNewUser}</p>
            </header>
        </div>
        </>
    );
}

export default Admin

