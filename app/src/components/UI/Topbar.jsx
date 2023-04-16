import { useEffect } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import useHttp from "../../hooks/useHttp";
import { getUser } from "../../lib/api";
import { useTasks } from "../../store/tasks-context";

const Topbar = () => {
  const {
    sendRequest: sendRequestForFetch,
    data: loadedUserData,
    status,
  } = useHttp(getUser);

  const { completedTasks } = useTasks();

  useEffect(() => {
    sendRequestForFetch();
  }, []);

  console.log(loadedUserData);

  return (
    <header className="h-[80px] md:h-[100px] px-[20px] flex items-center justify-between bg-background">
      <div>
        <h1 className="text-[18px] text-gray_300 font-bold">{`Cześć ${
          status == "completed" ? loadedUserData.name : ""
        },`}</h1>
        <h2 className="text-[12px] text-gray_500 font-semibold">{`Masz ${
          10 - completedTasks
        } zadań do wykonania`}</h2>
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
