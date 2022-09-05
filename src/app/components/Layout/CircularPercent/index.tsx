import { memo } from "react";
import { CircularPercentContainer } from "./style";

function CircularPercent({ percent }) {
    console.log("render precent");

    return (
        <CircularPercentContainer>
            <svg viewBox="0 0 36 36" className="circular-chart2 primary">
                <path
                    className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle"
                    strokeDasharray={`${percent}, 100`}
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage"></text>
            </svg>
        </CircularPercentContainer>
    );
}
export default memo(CircularPercent);
