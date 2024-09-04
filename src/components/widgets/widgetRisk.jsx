import React from "react";
import FlagIcon from '@mui/icons-material/Flag'; // Example icon for the risk level

const WidgetRisk = ({ type, count }) => {
    const data = {
        high: {
            iconColor: "text-red-500",
            riskLevel: "High Risk",
            bgColor: "bg-primary_pri10",
        },
        medium: {
            iconColor: "text-orange-500",
            riskLevel: "Medium Risk",
            bgColor: "bg-primary_pri10",
        }
    };

    const { iconColor, riskLevel, bgColor } = data[type];

    return (
        <div className={`flex items-center p-4 rounded-xl bg-primary_pri10 w-full`}>
            <div className="mr-4">
                <FlagIcon className={`text-2xl ${iconColor}`} />
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold">{riskLevel}</span>
                <span className="text-sm text-gray-600">Applications</span>
            </div>
            <div className="ml-auto text-3xl font-bold text-primary_pri50">
                {count}
            </div>
        </div>
    );
};

export default WidgetRisk;
