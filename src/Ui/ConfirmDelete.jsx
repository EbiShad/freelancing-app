function ConfirmDelete({ resorceName, onClose, disabled,onConfirm}) {
  return (
    <div>
      <h2> ایا از حذف ${resorceName} مطمین هستید؟ </h2>
      <div className="flex items-center justify-between gap-x-6 mt-6">

        <button 
            className="btn btn--primary flex-1" 
            disabled={disabled}
            onClick={onConfirm}
            >
           تایید
        </button>
 
        <button
          className="btn btn--danger flex-1 py-3"
          onClick={onClose}
          disabled={disabled}
        >
          لغو
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
