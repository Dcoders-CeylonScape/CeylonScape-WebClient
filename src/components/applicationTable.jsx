import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LastPageIcon from "@mui/icons-material/LastPage.js";
import FirstPageIcon from "@mui/icons-material/FirstPage.js";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight.js";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft.js";
import PropTypes from "prop-types";
import React from "react";
import RedFlagIcon from "../assets/images/flag_red.png";
import YellowFlagIcon from "../assets/images/flag_yellow.png";
import GreenFlagIcon from "../assets/images/flag_green.png";
import { useEffect } from "react";

import { redNoticeCheck, yellowNoticeCheck } from "../api/interpol";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(passport_no, name, country, date, visa_type, risk_level) {
  return { passport_no, name, country, date, visa_type, risk_level };
}


ApplicationTable.prototype = {
    applications: PropTypes.array.isRequired
}

function ApplicationTable(props){
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
    const applications = props.applications;

    const rows = applications.map((application) => {
        return createData(application.passport.number, application.fullName, application.birthCountry, application.createdAt.slice(0, 10), "Tourist", application.risk_level);
    })

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return(
        <div className={"mt-10"}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow className={"!bg-primary_pri10"}>
                            <TableCell className={"!font-semibold !text-lg"}>Passport No</TableCell>
                            <TableCell className={"!font-semibold !text-lg"}>Name</TableCell>
                            <TableCell className={"!font-semibold !text-lg"}>Country</TableCell>
                            <TableCell className={"!font-semibold !text-lg"}>Date</TableCell>
                            <TableCell className={"!font-semibold !text-lg"}>Visa Type</TableCell>
                            <TableCell className={"!font-semibold !text-lg"}>Risk Level</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                        ).map((row) => (
                            <TableRow key={row.passport_no}>
                                <TableCell>{row.passport_no}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.country}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.visa_type}</TableCell>
                                <TableCell>{(
                                    row.risk_level === 'High' ? <img src={RedFlagIcon} className={"w-6 h-6"} alt=""/> :
                                        row.risk_level === 'Medium' ? <img src={YellowFlagIcon} className={"w-6 h-6"} alt=""/> :
                                            <img src={GreenFlagIcon} className={"w-6 h-6"} alt=""/>
                                )}</TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                slotProps={{
                                    select: {
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    },
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    )

const rows = [
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "High"),
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "Medium"),
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "Low"),
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "High"),
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "Low"),
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "High"),
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "High"),
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "High"),
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "High"),
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "High"),
  createData("A12345678", "John Doe", "USA", "12/10/2021", "Tourist", "High"),
];

function ApplicationTable() {
  const [applications, setApplications] = React.useState([]);
  const [riskTypes, setRiskTypes] = React.useState([]);

  const navigate = useNavigate();

  const handleRowClick = (applicationId) => {
    navigate(`/officer/pending-application/${applicationId}`);
  };

  useEffect(() => {
    axios
      .get("/application/a")
      .then((response) => {
        try {
          const data =
            typeof response.data === "string"
              ? JSON.parse(response.data)
              : response.data;
          setApplications(data.map((application) => {
            return {
                id: application.id,
                        fullName: application.fullName,
                        // split full name into forename and name
                        forename: application.fullName.split(' ')[0],
                        name: application.fullName.split(' ')[1],
                        nationality: application.nationalilty,
                        gender: application.gender,
                        dob: application.dob,
                        pob: application.birthPlace,
                        cob: application.birthCountry,
                        civilStatus: application.civilStatus,
                        height: application.height + ' cm',
                        addressDomicile: application.domicleAddress,
                        addressDuringStay: application.addressDuringSriLanka,
                        telephone: application.telephone,
                        mobile: application.mobile,
                        email: application.email,
                        profession: application.profession.nameOfWorkplace, // change
                        workplace: {
                            name: application.profession.nameOfWorkplace,
                            address: application.profession.addressOfWorkplace,
                            email: application.profession.emailOfWorkplace,
                        },
                        imageURL: application.image,
                        passportNo: application.passport.number,
                        date: application.createdAt,
                        visaType: application.residenceVisaInfo.applyingFor,
            }
          }
            ));

          const riskTypePromises = data.map((application) => {
            return noticeCheck(
              application.forename,
              application.name,
              application.id
            ).then((noticeState) => {
              if (noticeState === "red") {
                return "red";
              } else if (noticeState === "yellow") {
                return "yellow";
              } else if (noticeState === "green") {
                return "green";
              } else {
                return "error";
              }
            });
          });

          Promise.all(riskTypePromises).then((riskTypes) => {
            setRiskTypes(riskTypes);
          });

          console.log(data);
        } catch (error) {
          console.error("Failed to parse data as JSON:", error);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const noticeCheck = (forename, name) => {
    return redNoticeCheck(forename, name)
      .then((hasRedNotice) => {
        if (hasRedNotice) {
          console.log("Red notice found.");
          return "red";
        } else {
          return yellowNoticeCheck(forename, name).then((hasYellowNotice) => {
            if (hasYellowNotice) {
              console.log("Yellow notice found.");
              return "yellow";
            } else {
              console.log("No notices found.");
              return "green";
            }
          });
        }
      })
      .catch((error) => {
        console.error("Error checking notices:", error);
        return "error";
      });
  };

  return (
    <div className={"mt-10"}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow className={"!bg-primary_pri10"}>
              <TableCell className={"!font-semibold !text-lg"}>
                Passport No
              </TableCell>
              <TableCell className={"!font-semibold !text-lg"}>Name</TableCell>
              <TableCell className={"!font-semibold !text-lg"}>
                Country
              </TableCell>
              <TableCell className={"!font-semibold !text-lg"}>Date</TableCell>
              <TableCell className={"!font-semibold !text-lg"}>
                Visa Type
              </TableCell>
              <TableCell className={"!font-semibold !text-lg"}>
                Risk Level
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((application) => (


              <TableRow key={application.id} onClick={() => handleRowClick(application.id)} className={"cursor-pointer"}>

                <TableCell>{application.passportNo}</TableCell>
                <TableCell>{application.fullName}</TableCell>
                <TableCell>{application.cob}</TableCell>
                <TableCell>{application.date}</TableCell>
                <TableCell>{application.visaType}</TableCell>

                <TableCell>
                  {riskTypes[application.id] === "red" ? (
                    <img src={RedFlagIcon} className={"w-6 h-6"} alt="" />
                  ) : riskTypes[application.id] === "yellow" ? (
                    <img src={YellowFlagIcon} className={"w-6 h-6"} alt="" />
                  ) : (
                    <img src={GreenFlagIcon} className={"w-6 h-6"} alt="" />
                  )}
                </TableCell>

              </TableRow>
            

            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ApplicationTable;
