import { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp";
import { useTasks } from "../store/tasks-context";
import { getTasks } from "../lib/api";
import Menu from "../components/Menu";
import CollectionPoint from "../components/Tasks/CollectionPoint";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import PickUp from "../components/Tasks/PickUp";
import PutDown from "../components/Tasks/PutDown";
import ComeTo from "../components/Tasks/ComeTo";

const Tasks = () => {
  const {
    sendRequest: sendRequestForFetch,
    data: loadedTasks,
    status,
  } = useHttp(getTasks);

  const {
    tasksData,
    activeTaskType,
    tasksIteration,
    onTaskIteration,
    onFetchTasks,
    onActiveTaskType,
  } = useTasks();

  const [currentTasks, setCurrentTasks] = useState([]);

  useEffect(() => {
    // sendRequestForFetch();
  }, []);

  const tasksFlowHandler = () => {
    if (activeTaskType == "punktOdbioru") {
      onTaskIteration();
      onActiveTaskType("odbierzTir");
    }

    console.log(activeTaskType, tasksIteration);
  };

  return (
    <main className="h-[90vh] bg-background flex flex-col px-[20px] overflow-y-auto overflow-x scroll">
      <h2 className="text-[30px] text-gray_300 font-bold">Twoje zadanie:</h2>
      {activeTaskType === "punktOdbioru" ? (
        <CollectionPoint />
      ) : activeTaskType === ("odbierz" || "odbierzTir") ? (
        <PickUp />
      ) : activeTaskType === "zanieś" ? (
        <PutDown />
      ) : (
        <ComeTo />
      )}

      <button
        onClick={tasksFlowHandler}
        className="w-[140px] h-[40px] mt-[20px] flex items-center justify-center self-end text-background  bg-blue_500 rounded-md"
      >
        <DoneOutlinedIcon style={{ fontSize: "18px", color: "#ffffff" }} />
        <span className="ml-[5px]">Wykonano</span>
      </button>
      <Menu />
    </main>
  );
};

export default Tasks;
