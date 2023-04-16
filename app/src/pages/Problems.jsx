import Menu from "../components/Menu";
import ProblemForm from "../components/Problems/ProblemForm";

const Problems = () => {
  return (
    <main className="h-[90vh] bg-background flex flex-col px-[20px]">
      <h2 className="text-[30px] text-gray_300 font-bold">Zgłoś problem:</h2>
      <ProblemForm />
      <Menu />
    </main>
  );
};

export default Problems;
