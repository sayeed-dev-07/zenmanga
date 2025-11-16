import { ChevronLeft } from "lucide-react";
import { BiLeftArrow } from "react-icons/bi";
import { BsBack } from "react-icons/bs";
import { FcLeft } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // hide button if on root ("/")
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-3 cursor-pointer py-3 bg-[#110c0c] text-white rounded-full shadow-md hover:bg-[#351919] transition text-2xl"
    >
      <ChevronLeft size={32}/>
    </button>
  );
};

export default BackButton;
