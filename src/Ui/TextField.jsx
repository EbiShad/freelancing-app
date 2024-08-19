

function TextField( {label,name,register,type="text",required,validationSchema,errors}) {



  return (
    <div>
        <label className="mb-3 block text-sm" htmlFor={name}>
           {label} {required && <span className="text-error">*</span>}
        </label>
        <input
          type={type}
          name={name}
          className="textField__input"
          autoComplete="off"
         {...register(name,validationSchema)}
         
        />
        {errors && errors[name] && <span className="mt-2 text-error text-sm block">{errors[name]?.message}</span>}
    </div>
  )
}

export default TextField
