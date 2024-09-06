import React from "react";
import WidgetRisk from "../../components/widgets/widgetRisk";
import Button from "@mui/material/Button";
import {BarChart, LineChart} from "@mui/x-charts"; 
import WidgetRisk from "../../components/widgets/widgetRisk"; 

function Dashboard() {
    return (
        <div className={"ml-[350px] mr-12"}>
            <div className="flex">
                <div className="flex-c ">
                    <div className="ml-5 text-2xl font-medium mt-10">
                        Good Morning, <span className="text-primary_pri50">Micheal</span>
                    </div>
                    <div className="ml-5 text-lg font-light">
                        Welcome to your Dashboard
                    </div>
                </div>
            </div>

            <div className={"flex gap-14 "}>
                <div className={"w-[60%] mt-10 "}>
                    <div className="flex gap-6 w-full">
                        <WidgetRisk type="high" count={15} className="w-[50%]" />
                        <WidgetRisk type="medium" count={20} className="w-[50%]" />
                    </div>

                    <div className={"w-full mt-5"}>
                        <div className={"w-full text-center text-2xl font-semibold"}>No of Visa Requests Per Day</div>
                        <LineChart
                            xAxis={[{ scaleType: 'point', data: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], label: 'Day', labelStyle: {fontSize: '1rem',fontWeight: 'bold'}}]}
                            yAxis={[{ scaleType: 'linear', label: 'No. of visa requests', labelStyle: {fontSize: '1rem',fontWeight: 'bold',paddingRight: "1em"}, position: "right", min: 0}]}
                            series={[
                                {
                                    data: [100, 150, 450, 120, 270, 300, 200],
                                    color: "#1EA0D9"
                                },
                            ]}
                            className={"!w-full !h-[30vh]"}
                        />
                    </div>
                    <div className={"w-full mt-5"}>
                        <div className={"w-full text-center text-2xl font-semibold"}>No of Approved Visa Per Month</div>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'], label : 'Month', labelStyle: {fontSize: '1rem',fontWeight: 'bold'}}]}
                            yAxis={[{ scaleType: 'linear', label: 'No. of visa approvals', labelStyle: {fontSize: '1rem',fontWeight: 'bold',paddingRight: "1em"}, position: "right", min: 0}]}
                            series={[
                                { data: [4700, 4000, 5000, 6000, 5500, 4256, 7000, 2254, 3500, 1200, 1300, 4000],
                                    color: "#1EA0D9"},

                            ]}
                            className={"!w-full !h-[30vh]"}
                        />
                    </div>

                </div>
                <div className={"w-[40%] mt-10 "}>
                    <div className={"flex gap-6 justify-between"}>
                        <Button variant="contained" className={"w-[30%] !font-semibold"}>Today</Button>
                        <Button variant="outlined" className={"w-[30%] !text-primary_pri70 !bg-white !border-2 !border-primary_pri70 !font-semibold"}>This Month</Button>
                        <Button variant="outlined" className={"w-[30%] !text-primary_pri70 !bg-white !border-2 !border-primary_pri70 !font-semibold"}>All</Button>
                    </div>

                    <div className={"flex flex-col gap-y-6 mt-10"}>
                        <div className={"p-5 flex justify-between bg-primary_pri10 rounded-xl items-center"}>
                            <div className={"flex flex-col"}>
                                <div className={"text-2xl font-semibold"}>Tourist Visa</div>
                                <div className={""}>21 Applications Approved</div>
                            </div>

                            <div className={"flex items-center gap-4"}>
                                <div className={"flex flex-col gap-y-2 items-center"}>
                                    <div>Pending</div>
                                    <div className={"text-5xl"}>15</div>
                                </div>
                                <div className={"border-r-2 border-gray-400 h-[4em]"}></div>
                                <div className={"flex flex-col gap-y-2 items-center"}>
                                    <div>Denied</div>
                                    <div className={"text-5xl"}>10</div>
                                </div>
                            </div>
                        </div>
                        <div className={"p-5 flex justify-between bg-primary_pri10 rounded-xl items-center"}>
                            <div className={"flex flex-col"}>
                                <div className={"text-2xl font-semibold"}>Medical Visa</div>
                                <div className={""}>21 Applications Approved</div>
                            </div>

                            <div className={"flex items-center gap-4"}>
                                <div className={"flex flex-col gap-y-2 items-center"}>
                                    <div>Pending</div>
                                    <div className={"text-5xl"}>15</div>
                                </div>
                                <div className={"border-r-2 border-gray-400 h-[4em]"}></div>
                                <div className={"flex flex-col gap-y-2 items-center"}>
                                    <div>Denied</div>
                                    <div className={"text-5xl"}>10</div>
                                </div>
                            </div>
                        </div>
                        <div className={"p-5 flex justify-between bg-primary_pri10 rounded-xl items-center"}>
                            <div className={"flex flex-col"}>
                                <div className={"text-2xl font-semibold"}>Business Visa</div>
                                <div className={""}>21 Applications Approved</div>
                            </div>

                            <div className={"flex items-center gap-4"}>
                                <div className={"flex flex-col gap-y-2 items-center"}>
                                    <div>Pending</div>
                                    <div className={"text-5xl"}>15</div>
                                </div>
                                <div className={"border-r-2 border-gray-400 h-[4em]"}></div>
                                <div className={"flex flex-col gap-y-2 items-center"}>
                                    <div>Denied</div>
                                    <div className={"text-5xl"}>10</div>
                                </div>
                            </div>
                        </div>
                        <div className={"p-5 flex justify-between bg-primary_pri10 rounded-xl items-center"}>
                            <div className={"flex flex-col"}>
                                <div className={"text-2xl font-semibold"}>Transit Visa</div>
                                <div className={""}>21 Applications Approved</div>
                            </div>

                            <div className={"flex items-center gap-4"}>
                                <div className={"flex flex-col gap-y-2 items-center"}>
                                    <div>Pending</div>
                                    <div className={"text-5xl"}>15</div>
                                </div>
                                <div className={"border-r-2 border-gray-400 h-[4em]"}></div>
                                <div className={"flex flex-col gap-y-2 items-center"}>
                                    <div>Denied</div>
                                    <div className={"text-5xl"}>10</div>
                                </div>
                            </div>
                        </div>
                        <div className={"p-5 flex justify-between bg-primary_pri10 rounded-xl items-center"}>
                            <div className={"flex flex-col"}>
                                <div className={"text-2xl font-semibold"}>Residence Visa</div>
                                <div className={""}>21 Applications Approved</div>
                            </div>

                            <div className={"flex items-center gap-4"}>
                                <div className={"flex flex-col gap-y-2 items-center"}>
                                    <div>Pending</div>
                                    <div className={"text-5xl"}>15</div>
                                </div>
                                <div className={"border-r-2 border-gray-400 h-[4em]"}></div>
                                <div className={"flex flex-col gap-y-2 items-center"}>
                                    <div>Denied</div>
                                    <div className={"text-5xl"}>10</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;
