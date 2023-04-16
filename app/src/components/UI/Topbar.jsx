import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import useHttp from "../hooks/useHttp";
import { getTasks, patchTask, getUser } from "../lib/api";

const Topbar = () => {
  const userName = "Bartek";
  const tasksAmount = 4;

  return (
    <header className="h-[80px] md:h-[100px] px-[20px] flex items-center justify-between bg-background">
      <div>
        <h1 className="text-[18px] text-gray_300 font-bold">{`Cześć ${userName},`}</h1>
        <h2 className="text-[12px] text-gray_500 font-semibold">{`Masz ${tasksAmount} zadań do wykonania`}</h2>
      </div>
      <div className="h-[50px] w-[50px] flex items-center justify-center custom-box-shadow rounded-full">
        <PersonOutlineOutlinedIcon
          style={{ fontSize: "24px", color: "#415371" }}
        />
      </div>
    </header>
  );
};

export default Topbar;
