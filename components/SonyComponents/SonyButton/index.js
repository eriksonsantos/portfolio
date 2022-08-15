import Button from 'react-bootstrap/Button';

function SonyButton (props){
    const {children} = props
    return (
        <Button {...props}>{children}</Button>
    )
}

export default SonyButton