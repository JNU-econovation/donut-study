import { createPortal } from "react-dom";

export default function Portalcreater({ children }) {
  return children ? createPortal(children, document.body) : null;
}
