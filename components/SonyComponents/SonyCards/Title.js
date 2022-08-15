import Card from 'react-bootstrap/Card';

function SonyTitleCards(props){
    const {children} = props
    return (
        <Card.Title {...props}>{children}</Card.Title>
    )
}

export default SonyTitleCards