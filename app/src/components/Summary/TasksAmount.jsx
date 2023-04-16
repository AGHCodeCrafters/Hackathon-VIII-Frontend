import React from "react";

const TasksAmount = () => {
  return (
    <section className="flex items-center mt-[20px]  gap-[5px] justify-between">
      <div className="h-auto w-[45%] p-[20px] flex flex-col items-center border-b-8 border-blue_500 bg-cards_background rounded-md">
        <p className="text-[30px] font-bold text-gray_300">5</p>
        <p className="text-[18px] font-semibold text-gray_500">Do zrobienia</p>
      </div>
      <div className="h-auto w-[45%]  p-[20px] flex flex-col items-center border-b-8 border-blue_500 bg-cards_background rounded-md">
        <p className="text-[30px] font-bold text-gray_300">5</p>
        <p className="text-[18px] font-semibold text-gray_500">Zrobione</p>
      </div>
    </section>
  );
};

export default TasksAmount;
