import { Grid, Popover, Typography } from '@mui/material';
import { messages } from 'app/messages';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useGetMarketQuery } from 'services/bitPinApi';
import { Currency } from './components/Currency';
import Pagination from '@mui/material/Pagination';

export function HomePage() {
    const { t } = useTranslation();
    const [page, setPage] = useState(1);
    const apiCall = {
        event: 'update_info_price_currency',
    };
    const { data } = useGetMarketQuery(apiCall);

    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <>
            <Helmet>
                <title>HomePage</title>
                <meta name="description" content="A Boilerplate application homepage" />
            </Helmet>
            <Grid container direction="column" justifyContent="space-between" padding="20px">
                <Grid container direction="column">
                    <Grid
                        container
                        justifyContent="center"
                        marginTop="30px"
                        paddingBottom="15px"
                        borderBottom="1px solid #00000050"
                    >
                        <Typography variant="h1" fontWeight="bold" color="#00000080">
                            {t(messages.market())}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid
                            display="grid"
                            container
                            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                            flexWrap="wrap"
                            gap={10}
                            padding="20px 60px"
                        >
                            {data?.results
                                ?.slice((page - 1) * 20, (page - 1) * 20 + 20)
                                ?.map(dt => {
                                    return <Currency key={dt.id} {...dt} />;
                                })}
                        </Grid>
                    </Grid>
                    {data?.results?.length && (
                        <Grid container justifyContent="center" padding="30px">
                            <Pagination
                                count={Math.ceil(data?.results?.length / 20)}
                                page={page}
                                onChange={handleChange}
                                variant="outlined"
                                color="secondary"
                            />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </>
    );
}
