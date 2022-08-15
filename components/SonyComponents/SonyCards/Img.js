import Card from 'react-bootstrap/Card';

function SonyImgCards(props){
    const {children} = props
    return (
        <Card.Img {...props}>{children}</Card.Img>
    )
}

export default SonyImgCards