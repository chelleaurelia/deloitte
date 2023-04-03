import './defaultbutton.css'

const DefaultButton = (props) => {
    return (
        <>
        <button className='default-button'><b> {props.button}</b></button>
        </>
    )
}

export default DefaultButton