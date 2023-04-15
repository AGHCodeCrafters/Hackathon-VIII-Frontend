import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const PutDown = () => {
  const data = [
    [
      { taskID: "4", code: "111", aisle: "A", shelf: "5", type: "zanieś" },
      { taskID: "5", code: "131", aisle: "B", shelf: "6", type: "zanieś" },
      { taskID: "6", code: "151", aisle: "C", shelf: "7", type: "zanieś" },
      { taskID: "7", code: "171", aisle: "D", shelf: "8", type: "zanieś" },
    ],
    {
      besosAmount: 0,
      duration: "dobry",
    },
  ];

  const besosAmount = 3;
  const duration = "dobry";
  const iconStyle = { fontSize: "30px", color: "#6B7891" };

  return (
    <article className="h-auto w-[100%] mt-[20px] pl-[10px] pt-[20px] pb-[20px] flex flex-col border-l-8 border-blue_500 bg-cards_background rounded-md">
      <p className="text-[24px] text-gray_300 font-medium">Odłóż paczkę</p>
      <ul className="pl-[20px] pt-[10px] gap-[5px] flex flex-col ">
        <li className="flex items-center">
          <Inventory2OutlinedIcon
            style={{ fontSize: "24px", color: "#6B7891" }}
          />
          <p className="text-[18px] ml-[10px] text-gray_500 ">
            Kod:
            <span className="font-bold">{` ${data[0].code}`}</span>
          </p>
        </li>
        <li className="flex items-center">
          <ArrowRightAltOutlinedIcon
            style={{ fontSize: "30px", color: "#6B7891" }}
          />
          <p className="text-[18px] ml-[10px] text-gray_500 ">
            Alejka:
            <span className="font-bold">{` ${data[0].aisle}`}</span>
          </p>
        </li>
        <li className="flex items-center">
          <ArrowRightAltOutlinedIcon
            style={{ fontSize: "30px", color: "#6B7891" }}
          />
          <p className="text-[18px] ml-[10px] text-gray_500 ">
            Półka:
            <span className="font-bold">{` ${data[0].shelf}`}</span>
          </p>
        </li>
      </ul>
      <div className="pl-[10px] pt-[10px] flex items-center">
        <EmojiEventsOutlinedIcon style={iconStyle} />
        <p className="text-[18px] ml-[10px] text-gray_500 ">
          Wartość:
          <span className="font-bold">{` ${data[1].besosAmount}B`}</span>
        </p>
      </div>
      <div className="pl-[10px] pt-[10px] flex items-center">
        <AccessTimeOutlinedIcon style={iconStyle} />
        <p className="text-[18px] ml-[10px] text-gray_500 ">
          Czas:
          <span className="font-bold">{` ${data[1].duration}`}</span>
        </p>
      </div>
    </article>
  );
};

export default PutDown;
