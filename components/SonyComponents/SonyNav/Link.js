import Nav from 'react-bootstrap/Nav';

function SonyNavLink(props){
    const {children} = props

    return (
        <Nav.Link {...props}>{children}</Nav.Link>
    )
}

export default SonyNavLink