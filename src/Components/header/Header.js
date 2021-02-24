import React from "react";
import "./Header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = ({ isDark, toggleMode }) => {
	return (
		<div className={isDark ? "header headerDark" : "header"}>
			<div className="header__SearchContainer">
				<AccessTimeIcon />
				<div
					className={
						isDark
							? "header__search headerDark__search"
							: "header__search"
					}
				>
					<input type="text" placeholder="Search..." />
				</div>
				<HelpOutlineIcon />
			</div>

			<div className="header__userContainer">
				<div className="header__userName">Aahmed Sunny</div>
				<img
					className="header__userImg"
					src="https://i.imgur.com/6VBx3io.png"
					alt=""
				/>
			</div>

			<div className="header__toggle">
				<input type="checkbox" onClick={() => toggleMode()} />
			</div>
		</div>
	);
};

export default Header;
