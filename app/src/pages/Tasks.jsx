import { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp";
import { useTasks } from "../store/tasks-context";
import { getTasks, patchTask } from "../lib/api";
import { useNavigate } from "react-router-dom";
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

  const { sendRequest: sendRequestForPatch } = useHttp(patchTask);

  const {
    tasksData,
    activeTaskType,
    tasksIteration,
    onTaskIteration,
    currentTaskIndex,
    completedTasks,
    onCompletedTasks,
    onTaskIndex,
    onFetchTasks,
    onActiveTaskType,
  } = useTasks();

  const [currentTasks, setCurrentTasks] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    sendRequestForFetch();
  }, []);

  const tasksFlowHandler = () => {
    onFetchTasks(loadedTasks);
    if (tasksData !== null) {
      if (currentTaskIndex > tasksData.length) {
        navigate("/summary");
        return;
      }
      if (activeTaskType === "punktOdbioru") {
        onTaskIteration();
        onActiveTaskType("get");
        let truckItems = [];
        truckItems = tasksData.filter((obj) => obj.type === "get");
        setCurrentTasks(truckItems);
      }

      if (tasksIteration % 2 === 0 && activeTaskType !== "punktOdbioru") {
        onTaskIteration();
        onActiveTaskType("idźDo");
        if (currentTaskIndex != tasksData.length - 1) {
          onTaskIndex((prev) => prev + 1);
          if (currentTaskIndex >= 0) {
            console.log(currentTaskIndex);
            sendRequestForPatch(tasksData[currentTaskIndex].id);
            onCompletedTasks();
          }
        } else {
          onTaskIndex((prev) => prev + 1);
          console.log(currentTaskIndex);
          sendRequestForPatch(tasksData[currentTaskIndex].id);
          onCompletedTasks();
          onActiveTaskType("punktOdbioru");
          onFetchTasks([]);
        }
      }

      if (activeTaskType === "idźDo") {
        onTaskIteration();
        onActiveTaskType("put");
      }
    }
  };

  return (
    <main className="h-[90vh] bg-background flex flex-col px-[20px] overflow-y-auto overflow-x scroll">
      <h2 className="text-[30px] text-gray_300 font-bold">Twoje zadanie:</h2>
      {status == (null || "pending") && <p>Ładowanie</p>}
      {status == "completed" &&
        (activeTaskType === "punktOdbioru" ? (
          <CollectionPoint />
        ) : activeTaskType === "get" ? (
          <PickUp
            entryData={currentTasks === undefined ? [] : currentTasks}
            data={tasksData[currentTaskIndex]}
          />
        ) : activeTaskType === "put" ? (
          <PutDown />
        ) : (
          <ComeTo />
        ))}

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
