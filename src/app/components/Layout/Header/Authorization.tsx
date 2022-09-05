import { Button, Grid, Typography } from "@mui/material";
import { AuthorizationContainer } from "../style";

export const Authorization = () => {
    const currentDate = new Date().toLocaleString("fa-IR").split("/");

    const persianDay = [
        "دوشنبه",
        "سه‌شنبه",
        "چهارشنبه",
        "پنج‌شنبه",
        "جمعه",
        "شنبه",
        "یک‌شنبه",
    ];
    const latinDay = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const currenPersianMonth = () => {
        switch (currentDate[1]) {
            case "۱":
                return "فروردین";
            case "۲":
                return "اردیبهشت";
            case "۳":
                return "خرداد";
            case "۴":
                return "تیر";
            case "۵":
                return "مرداد";
            case "۶":
                return "شهریور";
            case "۷":
                return "مهر";
            case "۸":
                return "آبان";
            case "۹":
                return "آذر";
            case "۱۰":
                return "دی";
            case "۱۱":
                return "بهمن";
            case "۱۲":
                return "اسفند";
            default:
                break;
        }
    };
    const currenLatinMonth = () => {
        switch (new Date().getMonth() + 1) {
            case 1:
                return "January";
            case 2:
                return "February";
            case 3:
                return "March";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6:
                return "June";
            case 7:
                return "July";
            case 8:
                return "August";
            case 9:
                return "September";
            case 10:
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
            default:
                break;
        }
    };
    console.log(new Date().getDate());

    return (
        <AuthorizationContainer>
            <Grid container marginBottom="11px">
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginRight: "10px" }}
                >
                    ورود / ثبت نام
                </Button>
                <Button variant="outlined" color="primary">
                    ثبت مناقصه
                </Button>
            </Grid>
            <Grid container direction="column">
                <Grid container>
                    <Typography variant="body3">
                        {persianDay[new Date().getDay()]}{" "}
                    </Typography>
                    ,
                    <Typography variant="body3" marginLeft={"2px"}>
                        {currentDate[2].substring(0, 2)} {currenPersianMonth()}{" "}
                        {currentDate[0]}
                    </Typography>
                </Grid>
                <Grid container>
                    <Typography variant="body3">
                        {new Date().getFullYear()} {currenLatinMonth()}{" "}
                        {new Date().getDate()}
                    </Typography>
                    ,
                    <Typography variant="body3" marginRight={"2px"}>
                        {latinDay[new Date().getDay()]}{" "}
                    </Typography>
                </Grid>
            </Grid>
        </AuthorizationContainer>
    );
};
