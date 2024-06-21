import { createPortal } from 'react-dom';
import { useRef, forwardRef, useImperativeHandle } from 'react';
const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef(null);
  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
    close: () => {
      dialog.current.close();
    }
  }));
  return createPortal(
    <>
      <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"  ref={dialog}>
        {children}
        <form method="dialog" className='mt-4 text-right'>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Close</button>
        </form>
      </dialog>
    </>
    , document.getElementById('modal-root'));
});
export default Modal;