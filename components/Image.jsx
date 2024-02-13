export default function Image({src, alt}) {
    return(
        <img src={src} alt={alt} className='rounded-lg drop-shadow-2xl backdrop-filter backdrop-blur-2xl'   />
        
    )
}