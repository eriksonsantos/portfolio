import Button from '@mui/material/Button';

function SonyButton (props){
    const {children} = props
    return (
        <Button {...props}>{children}</Button>
    )
}

export default SonyButton