import TextField from "../../Ui/TextField";
import RadioInput from "../../Ui/RadioInput";
import { useMutation } from "react-query";
import { completeProfile } from "../../Services/authService";
import toast from "react-hot-toast";
import Loading from "../../Ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CompletePrifileForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است");
        return;
      }

      if (user.role === "FRELANCER") return navigate("/freelancer");
      if (user.role === "OWNER") return navigate("/owner");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-screen-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خانوادگی:"
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
          />

          <TextField
            label="ایمیل:"
            name="email"
            register={register}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل معتبر نیست",
              },
            }}
            errors={errors}
          />

          <div className="flex justify-center gap-5">
            <RadioInput
              id="FREELANCER"
              name="role"
              value="FREELANCER"
              label="فریلنسر"
              checked={watch("role") === "FREELANCER"}
              register={register}
              validationSchema={{
                required: "انتخاب نقش ضروری است",
              }}
              errors={errors}
            />

            <RadioInput
              id="OWNER"
              name="role"
              value="OWNER"
              label="کارفرما"
              checked={watch("role") === "OWNER"}
              register={register}
              validationSchema={{
                required: "انتخاب نقش ضروری است",
              }}
              errors={errors}
            />
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full"> تایید </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompletePrifileForm;
