import { useForm } from "react-hook-form";
import RHFSelect from "../../Ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Ui/Loading";

const options = [
  {
    value: 0,
    label: "رد شده",
  },
  {
    value: 1,
    label: " در انتظار تایید",
  },
  {
    value: 2,
    label: "تایید شده",
  },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isUpdading } = useChangeProposalStatus();
  const { id: projectId } = useParams();

  const onSubmit = (data) => {
    changeProposalStatus(
      {  proposalId,...data,projectId},
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        label="تغییر وضعیت"
        register={register}
        required
        name="status"
        options={options}
      />
      <div className="mt-8">
        {isUpdading ? (
          <Loading />
        ) : (
          <button className=" btn btn--primary w-full" type="submit">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default ChangeProposalStatus;
