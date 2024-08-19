import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useMutation } from "react-query";
import { checkOtp } from "../../Services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import Loading from "../../Ui/Loading";



function CheckOtpForm({phoneNumber,onBack ,otpResponse, onResendOtp}) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(90);
  const navigate = useNavigate()

  const {isLoading, mutateAsync} = useMutation ({
    mutationFn:checkOtp
  })



  useEffect(() =>{
  const timer = time > 0 && setInterval(()=> setTime((t) => t-1 ),1000)
  return () => {
    if (timer) clearInterval(timer)
  }
  },[time])

  
  const checkOtpHandler = async (e) => {
      e.preventDefault();
      try {
        const {message,user} = await mutateAsync({otp, phoneNumber})
        toast.success(message)
        if(!user.isActive) return navigate("/complete-profile")
          
        if(user.status !==2) {
          navigate("/")
           toast("پروفایل شما در انتظار تایید است")
           return
          }
          
          if(user.isActive && user.role==="FRELANCER") return navigate("/freelancer")
          if(user.isActive && user.role==="OWNER") return navigate("/owner")
        
      } catch (error) {
         toast.error(error.message)
      }
  }





  return (
    <div>
    
    <button className="flex justify-between items-center" onClick={onBack}> صفحه قبل <FaArrowLeft /></button>
      {otpResponse && <div className="flex justify-between">
        <p>{otpResponse.message}</p>
        <button onClick={onBack} > <FaEdit /></button>
      </div>}

      <form className="space-y-8" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید </p>
      <div>
          {time >0 ? <p> {time} ثانیه تا ارسال مجدد  کد</p> :
           <button onClick={onResendOtp}> ارسال مجدد کد</button>}
      </div>
        <OTPInput
          containerStyle="flex flex-row-reverse justify-center gap-x-2"
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width:"2.5rem",
            padding:"0.5rem 0.2rem",
            border:"1px solid rgb(var(--color-primary-300))",
            borderRadius:"0.4rem"
            }}
        />
        {isLoading ? <Loading/> :  <button className="btn btn--primary w-full">  تایید</button> }
       
      </form>
    </div>
  );
}

export default CheckOtpForm;
