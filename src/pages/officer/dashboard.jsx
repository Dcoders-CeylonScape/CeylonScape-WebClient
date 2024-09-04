import React from "react";
import WidgetRisk from "../../components/widgets/widgetRisk"; // Assuming WidgetRisk is the component you created

function Dashboard() {
    return (
        <div className="flex">
            <div className="flex-c ml-[350px]">
                <div className="ml-5 text-2xl font-medium mt-10">
                    Good Morning, <span className="text-primary_pri50">Micheal</span>
                </div>
                <div className="ml-5 text-lg font-light">
                    Welcome to your Dashboard
                </div>

                <div className="mt-10 ml-5 flex gap-6 w-full">
                    <WidgetRisk type="high" count={15} className="w-full" />
                    <WidgetRisk type="medium" count={20} className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
