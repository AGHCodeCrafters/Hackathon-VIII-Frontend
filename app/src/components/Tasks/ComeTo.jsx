import { useTasks } from "../../store/tasks-context";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const ComeTo = () => {
  const { tasksData, currentTaskIndex } = useTasks();

  const iconStyle = { fontSize: "30px", color: "#6B7891" };

  return (
    <article className="h-auto w-[100%] mt-[20px] pl-[10px] pt-[20px] pb-[20px] flex flex-col border-l-8 border-blue_500 bg-cards_background rounded-md">
      <p className="text-[24px] text-gray_300 font-medium">Podejdź do</p>
      <ul className="pl-[20px] pt-[10px] gap-[5px] flex flex-col ">
        <li className="flex items-center">
          <ArrowRightAltOutlinedIcon
            style={{ fontSize: "30px", color: "#6B7891" }}
          />
          <p className="text-[18px] ml-[10px] text-gray_500 ">
            Alejka:
            <span className="font-bold">{` ${
              currentTaskIndex < 0
                ? ""
                : tasksData[currentTaskIndex].destination_location[0]
            }`}</span>
          </p>
        </li>
        <li className="flex items-center">
          <ArrowRightAltOutlinedIcon
            style={{ fontSize: "30px", color: "#6B7891" }}
          />
          <p className="text-[18px] ml-[10px] text-gray_500 ">
            Półka:
            <span className="font-bold">{` ${
              currentTaskIndex < 0
                ? ""
                : tasksData[currentTaskIndex].destination_location[2]
            }`}</span>
          </p>
        </li>
      </ul>
      <div className="pl-[10px] pt-[10px] flex items-center">
        <EmojiEventsOutlinedIcon style={iconStyle} />
        <p className="text-[18px] ml-[10px] text-gray_500 ">
          Wartość:
          <span className="font-bold">{`3B`}</span>
        </p>
      </div>
      <div className="pl-[10px] pt-[10px] flex items-center">
        <AccessTimeOutlinedIcon style={iconStyle} />
        <p className="text-[18px] ml-[10px] text-gray_500 ">
          Czas:
          <span className="font-bold">{` szybko`}</span>
        </p>
      </div>
    </article>
  );
};

export default ComeTo;
