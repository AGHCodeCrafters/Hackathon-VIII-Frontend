import { useState } from "react";
import { useTasks } from "../../store/tasks-context";

const TasksAmount = () => {
  const { completedTasks } = useTasks();

  return (
    <section className="flex items-center mt-[20px]  gap-[5px] justify-between">
      <div className="h-auto w-[45%] p-[20px] flex flex-col items-center border-b-8 border-blue_500 bg-cards_background rounded-md">
        <p className="text-[30px] font-bold text-gray_300">{completedTasks}</p>
        <p className="text-[18px] font-semibold text-gray_500">Wykonane</p>
      </div>
      <div className="h-auto w-[45%]  p-[20px] flex flex-col items-center border-b-8 border-blue_500 bg-cards_background rounded-md">
        <p className="text-[30px] font-bold text-gray_300">
          {10 - completedTasks}
        </p>
        <p className="text-[18px] font-semibold text-gray_500">W trakcie</p>
      </div>
    </section>
  );
};

export default TasksAmount;
