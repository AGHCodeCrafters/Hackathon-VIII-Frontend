import Menu from "../components/Menu";
import Balance from "../components/Summary/Balance";
import ProgressCard from "../components/Summary/ProgressCard";
import TasksAmount from "../components/Summary/TasksAmount";

const Summary = () => {
  return (
    <main className="h-[90vh] bg-background flex flex-col px-[20px]">
      <h2 className="text-[30px] text-gray_300 font-bold">Twoje statystyki:</h2>
      <ProgressCard />
      <TasksAmount />
      <Balance />
      <Menu />
    </main>
  );
};

export default Summary;
