//InputElement component:
const InputElement = ( {id, onInputchange, children}) => {
    return (
        <label htmlFor={id}>
            {children}
            <input id={id} onChange={onInputchange} placeholder="enter your dish here..."/>
        </label>
    )
};

export default InputElement;