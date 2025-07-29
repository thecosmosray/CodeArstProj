


const Button = ({ text ,style}: { text: string ,style:any}) => {
    return (
        <a href="#" className={`hidden md:block ${style}  rounded-full transition-colors`}>
            {text}
        </a>
    )
}

export default Button