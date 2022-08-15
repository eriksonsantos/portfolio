import Carousel from 'react-material-ui-carousel'

function SonyCarousel(props){
    const {children} = props
    return(
        <Carousel {...props}>{children}</Carousel>
    )
}

export default SonyCarousel