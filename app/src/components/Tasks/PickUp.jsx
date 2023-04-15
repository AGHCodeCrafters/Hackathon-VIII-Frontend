import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const PickUp = () => {
  const besosAmount = 3;
  const duration = "dobry";
  const iconStyle = { fontSize: "30px", color: "#6B7891" };

  const pickUpItems = {};

  const data = [
    [{ code: "123" }, { code: "345" }, { code: "678" }, { code: "910" }],
    {
      besosAmount: 0,
      duration: "dobry",
    },
  ];
  //   const itemsList = [
  //     [
  //       { code: "123", aisle: "A", shelf: "4" },
  //       { code: "345", aisle: "B", shelf: "3" },
  //       { code: "678", aisle: "C", shelf: "2" },
  //       { code: "910", aisle: "D", shelf: "1" },
  //     ],
  //     {
  //       besosAmount: 0,
  //       duration: "dobry",
  //     },
  //   ];

  return (
    <article className="h-auto w-[100%] mt-[20px] pl-[10px] pt-[20px] pb-[20px] flex flex-col border-l-8 border-blue_500 bg-cards_background rounded-md">
      <p className="text-[24px] text-gray_300 font-medium">Odbierz paczki</p>
      <ul className="pl-[20px] pt-[10px] gap-[5px] flex flex-col ">
        {data[0].map((item) => (
          <li
            className="flex items-center"
            key={Math.floor(Math.random() * 100000)}
          >
            <Inventory2OutlinedIcon
              style={{ fontSize: "24px", color: "#6B7891" }}
            />
            <p className="text-[18px] ml-[10px] text-gray_500 ">
              Kod:
              <span className="font-bold">{` ${item.code}`}</span>
            </p>
          </li>
        ))}
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

export default PickUp;
