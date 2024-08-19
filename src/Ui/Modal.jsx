
import { IoClose } from "react-icons/io5";
import useOutSideClick from "../Hookes/useOutSideClick";

function Modal({ children, open, title, onClose }) {
  
 const ref = useOutSideClick(onClose)

  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 bg-secondary-800 bg-opacity-30 w-full h-screen z-50">
        <div
          ref={ref}
          className="w-[calc(100vw-3rem)] md:max-w-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-4 bg-secondary-0 transition-all duration-300"
        >
          <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
            <p>{title}</p>
            <button onClick={onClose}>
              <IoClose />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
