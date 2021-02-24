import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {
	sidebarItemsData,
	sidebarBottomChannelsData,
} from "../../data/sidebarData";
import AddIcon from "@material-ui/icons/Add";
import "./Sidebar.css";

const Sidebar = ({ isDark }) => {
	return (
		<div className={isDark ? "sidebar sidebarDark" : "sidebar"}>
			<div
				className={
					isDark
						? "sidebar__workspace sidebarDark__workspace"
						: "sidebar__workspace"
				}
			>
				<div className="sidebar__workspaceName">Clever Programmer</div>
				<div
					className={
						isDark
							? "sidebar__workspaceNewMsg sidebarDark__workspaceNewMsg"
							: "sidebar__workspaceNewMsg"
					}
				>
					<AddCircleOutlineIcon />
				</div>
			</div>

			<div className="sidebar__channels">
				{sidebarItemsData.map((item, i) => (
					<div
						className={
							isDark
								? "sidebarDark__channel sidebar__channel"
								: "sidebar__channel"
						}
						key={i}
					>
						{item.icon} {item.text}
					</div>
				))}
			</div>

			<div className="sidebar__bottomChannels">
				<div className="sidebar__newBottomChannel">
					<div>Channels</div>
					<AddIcon />
				</div>

				<div className="sidebar__bottomChannels">
					{sidebarBottomChannelsData.map((item, i) => (
						<div
							className={
								isDark
									? "sidebarDark__bottomChannel sidebar__bottomChannel"
									: "sidebar__bottomChannel"
							}
							key={i}
						>
							# {item.channelName}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
