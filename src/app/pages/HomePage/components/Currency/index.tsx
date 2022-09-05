import { Grid, Typography } from '@mui/material';
import { CurrencyCardContainer } from '../../styles';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';

export function Currency({ title_fa, code, price_info }) {
    return (
        <CurrencyCardContainer
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            maxWidth="100%"
        >
            <Typography variant="h4">{title_fa}</Typography>
            <Typography variant="h6" margin="10px 0" color="primary" fontWeight="bold">
                {code}
            </Typography>
            <Grid container justifyContent="space-between">
                <Grid container width="fit-content">
                    <Typography color="green">{price_info.max}</Typography>
                    <ArrowDropDownRoundedIcon />
                </Grid>
                <Grid container width="fit-content">
                    <Typography color="error">{price_info.min}</Typography>
                    <ArrowDropUpRoundedIcon />
                </Grid>
            </Grid>
            <Typography color="secondary">{price_info.price}</Typography>
        </CurrencyCardContainer>
    );
}
