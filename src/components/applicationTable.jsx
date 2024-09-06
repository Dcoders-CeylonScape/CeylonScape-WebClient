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
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import RedFlagIcon from "../assets/images/flag_red.png";
import YellowFlagIcon from "../assets/images/flag_yellow.png";
import GreenFlagIcon from "../assets/images/flag_green.png";
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
    onPageChange(
      event,
      Math.max(0, Math.ceil(count / rowsPerPage) - 1)
    );
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

function createData(
  passportNo,
  fullName,
  country,
  date,
  visaType,
  riskLevel
) {
  return { passportNo, fullName, country, date, visaType, riskLevel };
}

ApplicationTable.propTypes = {
  applications: PropTypes.array.isRequired,
};

function ApplicationTable({ applications }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [riskTypes, setRiskTypes] = useState({});
  const navigate = useNavigate();

  const rows = applications.map((application) =>
    createData(
      application.passport.number,
      application.fullName,
      application.birthCountry,
      application.createdAt.slice(0, 10),
      "Tourist",
      application.risk_level
    )
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const noticeCheck = async (forename, name) => {
    try {
      const hasRedNotice = await redNoticeCheck(forename, name);
      if (hasRedNotice) return "red";

      const hasYellowNotice = await yellowNoticeCheck(forename, name);
      return hasYellowNotice ? "yellow" : "green";
    } catch (error) {
      console.error("Error checking notices:", error);
      return "error";
    }
  };

  useEffect(() => {
    const fetchRiskTypes = async () => {
      const riskPromises = applications.map(async (application) => {
        const riskType = await noticeCheck(
          application.forename,
          application.name
        );
        return { id: application.id, riskType };
      });

      const riskResults = await Promise.all(riskPromises);
      const riskMap = riskResults.reduce((acc, { id, riskType }) => {
        acc[id] = riskType;
        return acc;
      }, {});

      setRiskTypes(riskMap);
    };

    fetchRiskTypes();
  }, [applications]);

  const handleRowClick = (applicationId) => {
    navigate(`/officer/pending-application/${applicationId}`);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row.passportNo}
                onClick={() => handleRowClick(row.passportNo)}
                className={"cursor-pointer"}
              >
                <TableCell>{row.passportNo}</TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.visaType}</TableCell>
                <TableCell>
                  {riskTypes[row.passportNo] === "red" ? (
                    <img src={RedFlagIcon} className={"w-6 h-6"} alt="" />
                  ) : riskTypes[row.passportNo] === "yellow" ? (
                    <img src={YellowFlagIcon} className={"w-6 h-6"} alt="" />
                  ) : (
                    <img src={GreenFlagIcon} className={"w-6 h-6"} alt="" />
                  )}
                </TableCell>
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
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
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
