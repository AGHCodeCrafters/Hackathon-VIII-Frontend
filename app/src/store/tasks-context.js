import React, { useState, useContext } from "react";

export const TasksContext = React.createContext();

export const useTasks = () => {
  return useContext(TasksContext);
};

const DUMMY_DATA = [
  { taskID: "1", code: "123", aisle: "A", shelf: "1", type: "odbierz" },
  { taskID: "2", code: "345", aisle: "B", shelf: "2", type: "odbierz" },
  { taskID: "3", code: "678", aisle: "C", shelf: "3", type: "odbierz" },
  { taskID: "4", code: "910", aisle: "D", shelf: "4", type: "odbierz" },
  { taskID: "4", code: "111", aisle: "A", shelf: "5", type: "odłóż" },
  { taskID: "5", code: "131", aisle: "B", shelf: "6", type: "odłóż" },
  { taskID: "6", code: "151", aisle: "C", shelf: "7", type: "odłóż" },
  { taskID: "7", code: "171", aisle: "D", shelf: "8", type: "odłóż" },
];

DUMMY_DATA.sort((a, b) => {
  let asileA = a.aisle.toUpperCase(); // konwertuje asile na duże litery
  let asileB = b.aisle.toUpperCase(); // konwertuje asile na duże litery
  if (asileA < asileB) {
    return -1; // a powinno być przed b w sortowaniu
  }
  if (asileA > asileB) {
    return 1; // b powinno być przed a w sortowaniu
  }
  return 0; // elementy są równe
});

export const TasksContextProvider = (props) => {
  const [tasksData, setTasksData] = useState(DUMMY_DATA);
  const [activeTaskType, setActiveTaskType] = useState("punktOdbioru");
  const [tasksIteration, setTasksIteration] = useState(1);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(-1);

  const fetchTasksHandler = (data) => {
    setTasksData(data);
  };

  const activeTaskTypeHandler = (type) => {
    setActiveTaskType(type);
  };

  const tasksIterationHandler = () => {
    setTasksIteration((prev) => prev + 1);
  };
  const tasksIndexHandler = () => {
    setCurrentTaskIndex((prev) => prev + 1);
  };

  const value = {
    tasksData,
    activeTaskType,
    tasksIteration,
    currentTaskIndex,
    onTaskIndex: tasksIndexHandler,
    onTaskIteration: tasksIterationHandler,
    onFetchTasks: fetchTasksHandler,
    onActiveTaskType: activeTaskTypeHandler,
  };

  return (
    <TasksContext.Provider value={value}>
      {props.children}
    </TasksContext.Provider>
  );
};
