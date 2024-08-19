



function RadioInput({value,label,id,checked,register,name,validationSchema,errors}) {
  return (
    <div className="flex items-center">
      <label htmlFor={id}>{label}</label>
      <input
      {...register(name,validationSchema)}
        type="radio"
        id={id}
        name={name}
        value={value}
        className="cursor-pointer form-radio w-3 h-3 text-primary-900 focus:ring-primary-500 mr-2"
        checked={checked}
      />
      {errors && errors[name] && <span className="text-error text-sm">{errors[name]?.message }</span>}
    </div>
  );
}

export default RadioInput;
