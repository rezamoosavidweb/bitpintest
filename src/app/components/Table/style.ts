import { styled, Table, TableCell, TableRow } from "@mui/material";

type CellProps = {
    index: number;
    cellslength: number;
};
type RowProps = {
    index: number;
    rowlength: number;
};
export const CustomTableCell = styled(TableCell)<CellProps>(
    ({ theme, index, cellslength }) => ({
        borderRight:
            index !== cellslength
                ? `1px solid ${theme.palette.primary.main}`
                : "unset",
        whiteSpace: "nowrap",
        textAlign: "center",
    }),
);

export const CustomTable = styled(Table)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    borderCollapse: "collapse",
    borderRadius: "15px",
    borderStyle: "hidden",
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    overflow: "hidden",
    height: "fit-content",
}));

export const CustomTableRow = styled(TableRow)<RowProps>(
    ({ theme, index, rowlength }) => ({
        borderBottom:
            index !== rowlength
                ? `2px solid ${theme.palette.primary.main}`
                : "unset",
        backgroundColor: index === 1 ? theme.palette.primary.main : "unset",
        minHeight: index === 1 ? 30 : "unset",
    }),
);
