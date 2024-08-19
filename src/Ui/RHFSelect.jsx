

function RHFSelect({ label, register, name, required,options }) {
  return (
    <div>
      <label className="block" htmlFor={name}> {label} {required && <span className="text-error">*</span>} </label>
      <select 
        id={name}
        {...register(name)}
        className="textField__input"
        >
       {
        options.map( (option) => {
           return  <option  key={option.value} value={option.value}>{option.label}</option>
        })
       }
      </select>
    </div>
  );
}

export default RHFSelect;
