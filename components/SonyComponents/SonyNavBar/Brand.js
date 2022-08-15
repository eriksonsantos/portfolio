import Navbar from 'react-bootstrap/Navbar';

function SonyNavBarBrand(props){
    const {children} = props

    return(
        <Navbar.Brand {...props}>{children}</Navbar.Brand>
    )
}

export default SonyNavBarBrand