import { useEffect } from "react";

function Toast({ message, type = "info", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500";

  return (
    <div className={`fixed top-4 right-4 text-white px-4 py-2 rounded shadow ${bgColor}`}>
      {message}
    </div>
  );
}

export default Toast;
