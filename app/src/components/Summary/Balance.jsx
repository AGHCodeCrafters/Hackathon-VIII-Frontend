import useHttp from "../../hooks/useHttp";
import { getUser } from "../../lib/api";
import { useTasks } from "../../store/tasks-context";
import { useEffect } from "react";

const Balance = () => {
  const {
    sendRequest: sendRequestForFetch,
    data: loadedUserData,
    status,
  } = useHttp(getUser);

  useEffect(() => {
    sendRequestForFetch();
  }, []);

  console.log(loadedUserData);

  return (
    <section className="h-auto w-[100%] mt-[20px] p-[10px] flex items-center justify-space-around bg custom-box-shadow rounded-md">
      <h3 className=" text-[24px] w-[100%] text-center  text-gray_300 font-semibold ">
        Saldo:{" "}
        <span className="text-[30px] w-[50%] text-start text-gray_300 font-bold">{`${
          status == "completed" ? loadedUserData.bezoski : ""
        } B`}</span>
      </h3>
    </section>
  );
};

export default Balance;
