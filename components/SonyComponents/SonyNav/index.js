import Nav from 'react-bootstrap/Nav';

function SonyNav(props) {
    const { children } = props

    return (
        <Nav {...props}>{children}</Nav>
    )
}

export default SonyNav