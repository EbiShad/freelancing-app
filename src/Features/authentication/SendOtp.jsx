
import TextField from "../../Ui/TextField";


import Loading from "../../Ui/Loading";

function SendOtp({register,isSendingOtp,onSubmit}) {
  

  return (
    <form className="space-y-4 bg-slate-300" onSubmit={onSubmit}>
      <TextField
        label="شماره موبایل"
        register={register}
        name="phoneNumber"
      />
     {isSendingOtp ? <Loading width={50} height={50}/> :  
     <button type="submit" className="btn btn--primary w-full"> 
        ارسال کد تایید  
       </button>}
    </form>
  );
}

export default SendOtp;
