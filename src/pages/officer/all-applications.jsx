import Button from "@mui/material/Button";
import BiSortUpIcon from "../../assets/images/bi_sort_up.png";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead, TablePagination,
    TableRow,
    TextField, useTheme
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo/index.js";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

import ApplicationTable from "../../components/applicationTable.jsx";

const visaTypes = [
    {
        value: 'Tourist',
        label: 'Tourist Visa',
    },
    {
        value: 'Medical',
        label: 'Medical Visa',
    },
    {
        value: 'Business',
        label: 'Business Visa',
    },
    {
        value: 'Transit',
        label: 'Transit Visa',
    },
    {
        value: 'Residence',
        label: 'Residence Visa',
    },
];

function AllApplications() {
  return (
    <div className={"ml-[350px] mr-12"}>
      <div className={"flex justify-between pt-10 items-center"}>
          <div className={"flex flex-col gap-y-2"}>
              <div className={"text-4xl font-semibold"}>All Applications</div>
              <div>Check the applications, Approve, Deny or Mark for Review</div>
          </div>
          <div className={"flex gap-6"}>
              <Button variant="outlined" className={"!font-semibold !border-2 !border-primary_pri50"}><img src={BiSortUpIcon} className={"w-[22px] h-[22px] mr-3"} alt=""/> Name</Button>
              <Button variant="outlined" className={"!font-semibold !border-2 !border-primary_pri50"}><img src={BiSortUpIcon} className={"w-[22px] h-[22px] mr-3"} alt=""/> Date</Button>
          </div>
      </div>

        <div className={"flex justify-between mt-10"}>
            <div className={"flex flex-col gap-y-2"}>
                <div className={"font-semibold"}>Search by Name</div>
                <TextField
                    id="outlined-size-small"
                    placeholder={"John Doe"}
                    size="small"
                />
            </div>
            <div className={"flex flex-col gap-y-2"}>
                <div className={"font-semibold"}>Search by Passport No</div>
                <TextField
                    id="outlined-size-small"
                    placeholder={"A12345678"}
                    size="small"
                />
            </div>
            <div className={"flex flex-col gap-y-2"}>
                <div className={"font-semibold"}>Search by Visa Type</div>
                <TextField
                    id="outlined-select-currency"
                    select
                    defaultValue="Tourist"
                    size="small"
                    className={"w-[14em]"}
                    placeholder={"Visa Type"}
                >
                    {visaTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className={"flex flex-col gap-y-2"}>
                <div className={"font-semibold"}>Search by Date</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker size={"small"} className={"!p-0 w-[14em]"}/>
                    </DemoContainer>
                </LocalizationProvider>
            </div>

        </div>

        <div>
            <ApplicationTable/>
        </div>

    </div>
  );
}

export default AllApplications;