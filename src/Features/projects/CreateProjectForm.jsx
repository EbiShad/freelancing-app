import { useForm } from "react-hook-form";
import TextField from "../../Ui/TextField";
import RHFSelect from "../../Ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DtePickerField from "../../Ui/DtePickerField";
import useCategories from "../../Hookes/useCategories";
import useCreateProjects from "./useCreateProjects";
import Loading from "../../Ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose , projectToEdit={} }) {
  const {_id:editId} = projectToEdit
  const isEditSession = Boolean(editId)

  const {budget,title,description,category,deadline,tags:prevTages} = projectToEdit
  let EditValues = {}
  if(isEditSession){
    EditValues = {
      title,
      budget,
      description,
      category:category._id
    }
  }

  const [tags, setTags] = useState(prevTages);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { createProject, isCreating } = useCreateProjects();
  const  {editProject} = useEditProject()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({defaultValues:EditValues});

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };
    if(isEditSession){
     editProject({id:editId,newProject},{
      onSuccess: () => {
        onClose();
        reset();
      },
     })
    }else{
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }

    
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        register={register}
        name="title"
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 6,
            message: "طول عنوان نا معتبر است",
          },
        }}
        errors={errors}
      />

      <TextField
        label=" توضیحات"
        register={register}
        name="description"
        required
        validationSchema={{
          required: "توضیحات ضروری است ",
          minLength: {
            value: 6,
            message: "طول عنوان نا معتبر است",
          },
        }}
        errors={errors}
      />

      <TextField
        label=" بودجه"
        register={register}
        name="budget"
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />

      <RHFSelect
        register={register}
        label="دسته بندی"
        name="category"
        required
        options={categories}
      />

      <div>
        <label className="text-secondary-700 mb-2 block">تگ</label>
        <TagsInput value={tags} onChange={setTags} neme="tags" />
      </div>

      <DtePickerField label="ددلاین" date={date} setDate={setDate} />

      {isCreating ? (
        <Loading />
      ) : (
        <button type="submit" className="w-full btn btn--primary">
          تایید
        </button>
      )}
    </form>
  );
}

export default CreateProjectForm;
