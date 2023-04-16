import Menu from "../components/Menu";
import Topbar from "../components/UI/Topbar";

const ErrorPage = () => {
  return (
    <main className="h-[100vh] bg-background flex flex-col px-[20px]">
      <Topbar />
      <div className="text-[24px] mt-[30px] text-gray_300 font-semibold text-center">
        Nie znaleziono strony
      </div>
      <Menu />
    </main>
  );
};

export default ErrorPage;
