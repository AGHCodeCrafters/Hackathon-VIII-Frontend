import { NavLink, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Menu = () => {
  const location = useLocation();

  const iconsStyles = { fontSize: "30px", color: "#415371" };
  const activeIconStyles = { fontSize: "30px", color: "#ffffff" };
  const linkStyles =
    " flex items-center justify-center w-[40px] h-[40px] rounded-md";
  const activeLinkStyles =
    "bg-blue_500 flex items-center justify-center w-[40px] h-[40px] rounded-md";

  return (
    <nav className="mb-[20px] mt-auto flex flex-col">
      <h3 className="mb-[20px] text-[18px] text-center text-gray_500 font-semibold">
        {location.pathname === "/problems"
          ? "Problemy"
          : location.pathname === "/tasks"
          ? "Zadania"
          : location.pathname === "/summary"
          ? "Podsumowanie"
          : "Mapa"}
      </h3>
      <ul className="h-[60px] md:h-[80px] w-[100%] flex items-center justify-evenly bg-cards_background custom-box-shadow rounded-md">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLinkStyles : linkStyles
            }
          >
            <FormatListBulletedOutlinedIcon
              style={location.pathname === "/" ? activeIconStyles : iconsStyles}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/map"
            className={({ isActive }) =>
              isActive ? activeLinkStyles : linkStyles
            }
          >
            <MapOutlinedIcon
              style={
                location.pathname === "/map" ? activeIconStyles : iconsStyles
              }
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/summary"
            className={({ isActive }) =>
              isActive ? activeLinkStyles : linkStyles
            }
          >
            <BarChartIcon
              style={
                location.pathname === "/summary"
                  ? activeIconStyles
                  : iconsStyles
              }
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/problems"
            className={({ isActive }) =>
              isActive ? activeLinkStyles : linkStyles
            }
          >
            <ErrorOutlineOutlinedIcon
              style={
                location.pathname === "/problems"
                  ? activeIconStyles
                  : iconsStyles
              }
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
