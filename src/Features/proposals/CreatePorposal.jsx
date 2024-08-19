import { useForm } from "react-hook-form"
import TextField from "../../Ui/TextField"
import Loading from "../../Ui/Loading"
import useCreateProposal from "./useCreateProposal"



function CreatePorposal({projectId,onClose}) {


  const {register,handleSubmit,formState:{errors}} = useForm()
  const  {isCreating,createProposal} = useCreateProposal()

  const onSubmit = (data) => {
    createProposal( {...data, projectId} , {
      onSuccess: () => {onClose()}
    })
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="توضیحات"
        register={register}
        name="description"
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان نا معتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label="هزینه"
        register={register}
        name="price"
        type="number"
        required
        validationSchema={{
          required: "هزینه ضروری است"
        }}
        errors={errors}
      />
      <TextField
        label="مدت زمان"
        register={register}
        name="duration"
        required
        validationSchema={{
          required: "مدت زمان ضروری است"
        }}
        errors={errors}
      />
      {isCreating ? (
        <Loading />
      ) : (
        <button type="submit" className="w-full btn btn--primary">
          تایید
        </button>
      )}
    </form>
  )
}

export default CreatePorposal
