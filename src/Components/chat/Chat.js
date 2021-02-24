import React from "react";
import "./Chat.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

function Chat({ isDark }) {
	return (
		<div className={isDark ? "chat chatDark" : "chat"}>
			<div
				className={
					isDark ? "chat__header chatDark__header" : "chat__header"
				}
			>
				<div className="chat__headerInfo">
					<div className="chat__headerInfoTitle">
						# clever
						<StarOutlineIcon fontSize="small" />
					</div>
					<div
						className={
							isDark
								? "chat__headerInfoDesc chatDark__headerInfoDesc"
								: "chat__headerInfoDesc"
						}
					>
						Company-wise announcements and work-based matters
					</div>
				</div>

				<div
					className={
						isDark
							? "chat__headerDetails chatDark__headerDetails"
							: "chat__headerDetails"
					}
				>
					<span>Details</span>
					<ErrorOutlineIcon />
				</div>
			</div>
			<div className="chat__body"></div>
		</div>
	);
}

export default Chat;
