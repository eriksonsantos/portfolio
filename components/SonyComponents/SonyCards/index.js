import Card from 'react-bootstrap/Card';

function SonyCards(props){
    const {children} = props
    return (
        <Card {...props}>{children}</Card>
    )
}

export default SonyCards