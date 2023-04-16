import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const ProblemForm = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [pierwszy, setPierwszy] = useState("");
  const [drugi, setDrugi] = useState("");
  const [trzeci, setTrzeci] = useState("");

  const navigate = useNavigate();

  const pierwszyHandler = (e) => {
    setPierwszy(e.target.value);
  };
  const drugiHandler = (e) => {
    setDrugi(e.target.value);
  };
  const trzeciHandler = (e) => {
    setTrzeci(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (pierwszy == " ") return;
    if (drugi == " ") return;
    if (trzeci == " ") return;
    setShowMessage(true);

    setTimeout(() => {
      navigate("/summary");
    }, [2000]);

    setPierwszy("");
    setDrugi("");
    setTrzeci("");
  };
  return (
    <>
      <form
        onSubmit={submitFormHandler}
        className="h-auto w-[100%] mt-[20px] p-[20px] flex flex-col bg-cards_background rounded-md custom-box-shadow"
      >
        <label className="text-[18px] text-gray_300 font-medium">
          Jaki masz problemu
        </label>
        <input
          value={pierwszy}
          onChange={pierwszyHandler}
          className="w-[100%] p-[10px] mt-[20px] text-[16px] font-medium text-gray_300 focus:outline-none placeholder-gray_500  custom-box-shadow rounded-md"
          placeholder="Napisz jaki masz problem..."
        ></input>
        <label className="text-[18px] mt-[20px] text-gray_300 font-medium">
          Częstotliwość występowania problemu
        </label>
        <input
          value={drugi}
          onChange={drugiHandler}
          className="w-[100%] p-[10px] mt-[20px] text-[16px] font-medium text-gray_300 focus:outline-none placeholder-gray_500  custom-box-shadow rounded-md"
          placeholder="Jak często napotykasz problem..."
        ></input>
        <button
          value={trzeci}
          onChange={trzeciHandler}
          type="submit"
          className="w-[140px] h-[40px] mt-[20px] flex items-center justify-center self-end text-background  bg-blue_500 rounded-md"
        >
          <DoneOutlinedIcon style={{ fontSize: "18px", color: "#ffffff" }} />
          <span className="ml-[5px]">Wyślij</span>
        </button>
      </form>
      {showMessage && (
        <p className="text-[12px] mt-[20px] text-gray_300 font-semibold">
          Dziękujemy za zgłoszenie, menager wkrótce skontaktuje się z
          Panem/Panią w tej sprawie
        </p>
      )}
    </>
  );
};

export default ProblemForm;
