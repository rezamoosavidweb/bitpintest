import { AppBar, Button, Drawer, Grid, styled, TextField, Typography } from "@mui/material";

type DrawerProps = {
    drawerdir: string;
    path?: string;
};
export const drawerWidth = 250;
const loginDrawerWidth = 340;

export const DrawerPermanent = styled(Drawer)<DrawerProps>(({ theme, drawerdir, path }) => ({
    [theme.breakpoints.down("md")]: {
        display: path === "/login" ? "none" : "block",
    },
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
    "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: path === "/login" ? loginDrawerWidth : drawerWidth,
        background: "linear-gradient(180deg, #18224D 45.14%, #004B61 119.32%)",
        transition: "width 300ms ease-out",
    },
    "& .MuiPaper-root": {
        right: drawerdir === "ltr" ? "0 !important" : "unset !important",
        left: drawerdir === "ltr" ? "unset important" : "0 !important",
    },
    "& .MuiListItem-root:last-child": {
        borderTop: "2px solid #ffffffdb",
    },
    "& .MuiDrawer-paper::-webkit-scrollbar": {
        display: "none",
    },
}));

export const DrawerTemporary = styled(Drawer)<DrawerProps>(({ theme, drawerdir }) => ({
    // display: { xs: "block", sm: "none" },
    [theme.breakpoints.up("xs")]: {
        display: "block",
    },
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
    "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: drawerWidth,
    },
    "& .MuiPaper-root": {
        right: drawerdir === "rtl" ? "0 !important" : "unset !important",
        left: drawerdir === "rtl" ? "unset important" : "0 !important",
    },
}));

export const CustomAppBar = styled(AppBar)<{ path: string }>(({ theme, path }) => ({
    [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        backgroundColor: "#fff",
        borderBottom: `4px solid ${theme.palette.primary.main}`,
    },
    display: path === "/login" ? "none" : "unset",
}));

export const CustomBox = styled(Grid)(({ theme }) => ({
    padding: "15px",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: theme.palette.common.back,
    overflowX: "auto",
    maxWidth: "calc(100vw - 60px)",
    minHeight: "calc(50vh - 120px)",
}));
export const Container = styled(Grid)(({ theme }) => ({
    minHeight: "100vh",
}));
//header
export const HeaderContainer = styled(Grid)(({ theme }) => ({
    padding: "30px 70px 0px 70px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}));
export const Banner = styled("img")(({ theme }) => ({
    width: "100%",
    backgroundColor: "red",
}));
export const AuthorizationContainer = styled(Grid)(({ theme }) => ({
    width: "fit-content",
}));
export const SearchContainer = styled(Grid)(({ theme }) => ({
    flex: 1,
    position: "relative",
    padding: "0 70px",
}));
export const SearchIcon = styled("img")(({ theme }) => ({
    position: "absolute",
    left: 90,
    top: 14,
}));
export const MenuTitle = styled(Typography)(({ theme }) => ({
    cursor: "pointer",
    padding: "0 10px",
    paddingBottom: 20,
}));
export const MenuContainer = styled(Grid)(({ theme }) => ({
    position: "relative",
}));
export const SubMenuContainer = styled(Grid)(({ theme }) => ({
    position: "absolute",
    top: "43px",
    backgroundColor: "#fff",
    width: "90.5vw",
    right: 0,
    zIndex: 1000,
}));
export const RightSubMenuCol = styled(Grid)(({ theme }) => ({
    width: "40%",
    maxWidth: "196px",
    borderRight: "1px solid ",
    borderColor: theme.palette.common.back,
}));
export const LeftSubMenuCol = styled(Grid)(({ theme }) => ({
    flex: 1,
    padding: "10px 18px",
}));
export const SubLevel1 = styled(Grid)(({ theme }) => ({
    height: "96px",
    maxHeight: "51px",
    "&:hover": {
        backgroundColor: "#E3E3E3",
        color: theme.palette.primary.light,
    },
}));
export const SubLevel2 = styled(Grid)(({ theme }) => ({}));
export const SubLevel3 = styled(Grid)(({ theme }) => ({
    cursor: "pointer",
    color: "#81858B",
}));

//main
export const Main = styled(Grid)(({ theme }) => ({
    flex: 1,
}));

//footer
export const FooterContainer = styled(Grid)(({ theme }) => ({
    padding: "30px 0 0 0",
    backgroundColor: "#fff",
    position: "relative",
}));
export const BackToTopButton = styled(Button)(({ theme }) => ({
    borderBottom: "none",
    borderWidth: "2px !important",
    borderRadius: "5px 5px 0 0 !important",
    position: "absolute",
    top: -45,
    left: 20,
    width: "44px !important",
    height: "37px !important",
    minWidth: "44px !important",
    padding: 0,
    "&:hover": {
        borderBottom: "none",
    },
}));
