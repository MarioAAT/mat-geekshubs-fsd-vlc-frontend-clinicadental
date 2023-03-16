import './InputText.css'

export const InputText = ({className, type, name, placeholder, changeFunction}) => {
  return (
    <>
    <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={changeFunction}

    // onChange sirve para darle propiedades a un elemento.
    />
    </>
  )
}