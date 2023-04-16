import React, { useState, useContext } from "react";

export const TasksContext = React.createContext();

export const useTasks = () => {
  return useContext(TasksContext);
};

// const DUMMY_DATA = [
//   { taskID: "1", code: "123", aisle: "A", shelf: "1", type: "odbierz" },
//   { taskID: "2", code: "345", aisle: "B", shelf: "2", type: "odbierz" },
//   { taskID: "3", code: "678", aisle: "C", shelf: "3", type: "odbierz" },
//   { taskID: "4", code: "910", aisle: "D", shelf: "4", type: "odbierz" },
//   { taskID: "4", code: "111", aisle: "A", shelf: "5", type: "odłóż" },
//   { taskID: "5", code: "131", aisle: "B", shelf: "6", type: "odłóż" },
//   { taskID: "6", code: "151", aisle: "C", shelf: "7", type: "odłóż" },
//   { taskID: "7", code: "171", aisle: "D", shelf: "8", type: "odłóż" },
// ];

// const DUMMY_DATA = [
//   {
//     item_id: 1,
//     employee_id: 1,
//     destination_location: "A-1",
//     type: "get",
//     bezoski_value: 1,
//     id: 2,
//     status: "IN_PROGRESS",
//   },
//   {
//     item_id: 2,
//     employee_id: 1,
//     destination_location: "B-2",
//     type: "get",
//     bezoski_value: 2,
//     id: 3,
//     status: "IN_PROGRESS",
//   },
//   {
//     item_id: 3,
//     employee_id: 1,
//     destination_location: "C-3",
//     type: "get",
//     bezoski_value: 3,
//     id: 4,
//     status: "IN_PROGRESS",
//   },
//   {
//     item_id: 4,
//     employee_id: 1,
//     destination_location: "D-4",
//     type: "get",
//     bezoski_value: 2,
//     id: 5,
//     status: "IN_PROGRESS",
//   },
//   {
//     item_id: 5,
//     employee_id: 1,
//     destination_location: "A-5",
//     type: "put",
//     bezoski_value: 3,
//     id: 6,
//     status: "IN_PROGRESS",
//   },
//   {
//     item_id: 6,
//     employee_id: 1,
//     destination_location: "B-6",
//     type: "put",
//     bezoski_value: 2,
//     id: 7,
//     status: "IN_PROGRESS",
//   },
//   {
//     item_id: 7,
//     employee_id: 1,
//     destination_location: "C-7",
//     type: "put",
//     bezoski_value: 1,
//     id: 8,
//     status: "IN_PROGRESS",
//   },
//   {
//     item_id: 8,
//     employee_id: 1,
//     destination_location: "D-8",
//     type: "put",
//     bezoski_value: 4,
//     id: 9,
//     status: "IN_PROGRESS",
//   },
// ];

// console.log(DUMMY_DATA);

export const TasksContextProvider = (props) => {
  const [tasksData, setTasksData] = useState(null);
  const [activeTaskType, setActiveTaskType] = useState("punktOdbioru");
  const [tasksIteration, setTasksIteration] = useState(1);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(-1);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const fetchTasksHandler = (data) => {
    if (data !== null) {
      data.sort((a, b) => {
        let asileA = a.destination_location[0]; // konwertuje asile na duże litery
        let asileB = b.destination_location[0]; // konwertuje asile na duże litery
        if (asileA < asileB) {
          return -1; // a powinno być przed b w sortowaniu
        }
        if (asileA > asileB) {
          return 1; // b powinno być przed a w sortowaniu
        }
        return 0; // elementy są równe
      });
    }
    console.log(data);
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

  const completedTasksHandler = () => {
    setCompletedTasks((prev) => prev + 1);
  };

  const totalTimeHandler = (time) => {
    setTotalTime(prev => prev + time)
  }

  const value = {
    tasksData,
    activeTaskType,
    tasksIteration,
    currentTaskIndex,
    completedTasks,
    totalTime,
    onCompletedTasks: completedTasksHandler,
    onTaskIndex: tasksIndexHandler,
    onTaskIteration: tasksIterationHandler,
    onFetchTasks: fetchTasksHandler,
    onActiveTaskType: activeTaskTypeHandler,
    updateTotalTime: totalTimeHandler,
  };

  return (
    <TasksContext.Provider value={value}>
      {props.children}
    </TasksContext.Provider>
  );
};
