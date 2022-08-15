import Container from 'react-bootstrap/Container';

function SonyContainer(props){

    const {children} = props

    return(
        <Container {...props}>{children}</Container>
    )
}

export default SonyContainer