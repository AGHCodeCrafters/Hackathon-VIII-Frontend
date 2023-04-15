import { NavLink, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

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
        {location.pathname === "/homepage"
          ? "Strona główna"
          : location.pathname === "/tasks"
          ? "Zadania"
          : location.pathname === "/settings"
          ? "Ustawienia"
          : "Problemy"}
      </h3>
      <ul className="h-[60px] md:h-[80px] w-[100%] flex items-center justify-evenly bg-cards_background custom-box-shadow rounded-md">
        <li>
          <NavLink
            to="/homepage"
            className={({ isActive }) =>
              isActive ? activeLinkStyles : linkStyles
            }
          >
            <HomeOutlinedIcon
              style={
                location.pathname === "/homepage"
                  ? activeIconStyles
                  : iconsStyles
              }
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive ? activeLinkStyles : linkStyles
            }
          >
            <FormatListBulletedOutlinedIcon
              style={
                location.pathname === "/tasks" ? activeIconStyles : iconsStyles
              }
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? activeLinkStyles : linkStyles
            }
          >
            <SettingsOutlinedIcon
              style={
                location.pathname === "/settings"
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