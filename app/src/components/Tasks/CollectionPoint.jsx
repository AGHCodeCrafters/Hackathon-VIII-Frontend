import { useTasks } from "../../store/tasks-context";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const CollectionPoint = () => {
  const collectionPointTask = {
    besosAmount: 0,
    duration: "dobry",
  };

  const { tasksData, currentTaskIndex } = useTasks();

  return (
    <article className="h-auto w-[100%] mt-[20px] pl-[10px] pt-[20px] pb-[20px] flex flex-col border-l-8 border-blue_500 bg-cards_background rounded-md">
      <p className="text-[24px] text-gray_300 font-medium">
        {`Podejdź do punktu ${
          currentTaskIndex == tasksData.length - 1 ? "zwrotu" : "odbioru"
        }`}
      </p>
      <div className="pl-[10px] pt-[10px] flex items-center">
        <EmojiEventsOutlinedIcon
          style={{ fontSize: "30px", color: "#6B7891" }}
        />
        <p className="text-[18px] ml-[10px] text-gray_500 ">
          Wartość:
          <span className="font-bold">{` ${collectionPointTask.besosAmount}B`}</span>
        </p>
      </div>
      <div className="pl-[10px] pt-[10px] flex items-center">
        <AccessTimeOutlinedIcon
          style={{ fontSize: "30px", color: "#6B7891" }}
        />
        <p className="text-[18px] ml-[10px] text-gray_500 ">
          Czas:
          <span className="font-bold">{` ${collectionPointTask.duration}`}</span>
        </p>
      </div>
    </article>
  );
};

export default CollectionPoint;
