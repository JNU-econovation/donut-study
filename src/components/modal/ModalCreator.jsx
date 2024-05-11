import { createPortal } from "react-dom";
import ReservationModal from "./Modal";

export default function ModalCreator({ close }) {
  return (
    <>
      {createPortal(
        <ReservationModal close={close} />,
        document.getElementById("root")
      )}
    </>
  );
}
