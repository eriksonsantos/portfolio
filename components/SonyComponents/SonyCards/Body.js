import Card from 'react-bootstrap/Card';

function SonyBodyCards(props){
    const {children} = props
    return (
        <Card.Body {...props}>{children}</Card.Body>
    )
}

export default SonyBodyCards