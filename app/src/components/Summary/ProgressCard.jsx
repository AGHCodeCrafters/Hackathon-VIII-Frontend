import React from "react";

const ProgressCard = () => {
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = String(today.getFullYear());
  const todaysDate = day + "." + month + "." + year;

  return (
    <section className="h-auto w-[100%] mt-[20px] p-[20px] flex flex-col bg-blue_500 rounded-md">
      <h3 className="text-background font-semibold text-[24px]">
        Twoje zadania
      </h3>
      <div className="flex items-center mt-[20px] justify-between">
        <p className="text-background text-[18px]">Progress</p>
        <p className="text-background text-[18px]">100%</p>
      </div>
      <div className="mt-[10px] h-[10px] bg-cards_background rounded-md">
        <div className="h-[100%] w-[20px] bg-blue_700 cards_background rounded-md"></div>
      </div>
      <p className="text-background text-end font-semibold text-[18px] mt-[20px] ">
        {todaysDate}
      </p>
    </section>
  );
};

export default ProgressCard;
