//Button Component:
const Button = ( { type='text', children }) => {
    return (
        <button
        type={type}
        
        >
            {children}
        </button>
    )
};

export default Button;