import React from "react";
import PropTypes from "prop-types";
import {
  TableHead as CustomTableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Box,
} from "@mui/material";

const TableHead = ({ columns, order, orderBy, onRequestSort }) => {
  return (
    <CustomTableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.title}
            sortDirection={orderBy === column.title ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.title}
              direction={orderBy === column.title ? order : "asc"}
              onClick={onRequestSort}
            >
              {column.title}
              {orderBy === column.title ? (
                <Box>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </CustomTableHead>
  );
};

TableHead.propTypes = {
  columns: PropTypes.array.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

export default TableHead;

