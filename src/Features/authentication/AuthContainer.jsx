import SendOtp from "./SendOtp"
import CheckOtpForm from "./CheckOtpForm"
import { useState } from "react";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../Services/authService";
import { useForm } from "react-hook-form";



function AuthContainer() {
const [step, setStep] = useState(1);

const {register,handleSubmit,getValues} = useForm()

const {isLoading:isSendingOtp,data:otpResponse  , mutateAsync} = useMutation({
  mutationFn: getOtp,
})



const sendOtpHandler = async (data) => {
  try {
    const {message} = await mutateAsync(data)
    toast.success(message)
    setStep(2)
  } catch (error) {
    toast.error(error.message)
  }
}




const renderStep = () => {
    switch (step) {
        case 1: return <SendOtp 
        setStep={setStep} 
        isSendingOtp={isSendingOtp}
        onSubmit={handleSubmit(sendOtpHandler)}
        name="phoneNumber"
        register={register}
         />

        case 2: return <CheckOtpForm
         phoneNumber={getValues("phoneNumber")} 
         onBack={() => setStep(1)} 
         onResendOtp={sendOtpHandler}
         otpResponse={otpResponse}
         />
        default: return null;
    }
}

  return (
    <div className="w-full  sm:max-w-sm">
        {renderStep()}
    </div>
  )
}

export default AuthContainer
