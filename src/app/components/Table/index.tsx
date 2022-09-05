import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import { CustomTable, CustomTableCell, CustomTableRow } from "./style";
type Column = {
    id: number;
    title: string;
};
type Props = {
    columns: Array<Column>;
    handleEditRow?: () => void;
};

function MuiTable({ columns, handleEditRow, data }) {
    const handleDeleteRow = () => {};

    return (
        <CustomTable>
            <TableHead>
                <CustomTableRow index={1} rowlength={3}>
                    <CustomTableCell
                        index={1}
                        cellslength={columns.length}
                        colSpan={1000}
                    ></CustomTableCell>
                </CustomTableRow>
                <CustomTableRow index={2} rowlength={3}>
                    {columns.map((item, index) => {
                        return (
                            <CustomTableCell
                                index={index + 1}
                                cellslength={columns.length}
                                key={item.id}
                            >
                                {item.title}
                            </CustomTableCell>
                        );
                    })}
                </CustomTableRow>
            </TableHead>
            <TableBody>
                <CustomTableRow index={2} rowlength={3}>
                    {data?.map(dt => (
                        <CustomTableCell
                            key={dt.id}
                            index={1}
                            cellslength={columns.length}
                        >
                            {dt.title}
                        </CustomTableCell>
                    ))}

                    <CustomTableCell index={1} cellslength={columns.length}>
                        <Grid container justifyContent="center" wrap="nowrap">
                            <IconButton onClick={handleDeleteRow}>
                                <DeleteOutline color="secondary" />
                            </IconButton>
                            {handleEditRow && (
                                <IconButton
                                    onClick={() =>
                                        handleEditRow({
                                            fullName: "Reza Moosavi",

                                            telephone: "09192244314",

                                            national_code: "0012233435",

                                            website: "welfare.ir",

                                            economic_code: "778372",

                                            email: "reza@gmail.com",

                                            province: "tehran",

                                            brand_name: "Hoosh Sarmaye ",
                                            start_date: "1401/05/23",
                                            end_date: "1401/06/25",
                                        })
                                    }
                                >
                                    <EditOutlined color="secondary" />
                                </IconButton>
                            )}
                        </Grid>
                    </CustomTableCell>
                </CustomTableRow>
            </TableBody>
        </CustomTable>
    );
}

export default MuiTable;
