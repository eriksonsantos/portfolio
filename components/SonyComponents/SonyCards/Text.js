import Card from 'react-bootstrap/Card';

function SonyTextCards(props){
    const {children} = props
    return (
        <Card.Text {...props}>{children}</Card.Text>
    )
}

export default SonyTextCards