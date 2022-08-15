import Navbar from 'react-bootstrap/Navbar';

function SonyNavBar(props) {
    const { children } = props

    return (
        <Navbar {...props} >{children}</Navbar>
    )
}

export default SonyNavBar
