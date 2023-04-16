import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useTasks } from "../../store/tasks-context";

const ProgressCard = () => {
  const {
    completedTasks
  } = useTasks();

  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = String(today.getFullYear());
  const todaysDate = day + "." + month + "." + year;

  const [progressBar, setProgressBar] = useState(0)

  useEffect(() => {
    setProgressBar((completedTasks/10)*100)
  }, [completedTasks]);
  

  return (
    <section className="h-auto w-[100%] mt-[20px] p-[20px] flex flex-col bg-blue_500 rounded-md">
      <h3 className="text-background font-semibold text-[24px]">
        Twoje zadania
      </h3>
      <div className="flex items-center mt-[20px] justify-between">
        <p className="text-background text-[18px]">Progress</p>
        <p className="text-background text-[18px]">{(completedTasks / 10) * 100}%</p>
      </div>
      <div className="mt-[10px] h-[10px] w-[100%] bg-cards_background rounded-md">
        <div className="h-[10px] bg-blue_700 cards_background rounded-md" style={{width: `${progressBar}%`}}></div>
      </div>
      <p className="text-background text-end font-semibold text-[18px] mt-[20px] ">
        {todaysDate}
      </p>
    </section>
  );
};

export default ProgressCard;
