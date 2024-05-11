import { createPortal } from "react-dom";
import ReservationModal from "./Modal";

// eslint-disable-next-line react/prop-types
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
