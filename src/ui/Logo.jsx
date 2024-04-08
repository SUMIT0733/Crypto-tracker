import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  
  return (
    <div className="flex justify-center text-center" onClick={handleClick}>
      <img src="/side_icon.jpg" className="h-36 w-auto" />
    </div>
  );
}

export default Logo;
