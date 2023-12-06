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

export default TableHead;
