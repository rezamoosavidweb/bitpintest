import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomBox } from "../Layout/style";
import { CustomTabItem } from "./style";

type Props = {
    tabsData: Array<{
        id: number;
        title: string;
        component: React.FC;
    }>;
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

export const Tab = ({ tabsData, activeTab, setActiveTab }: Props) => {
    const [body, setBody] = useState();
    const handleTabBody = tb => {
        setBody(tb.component);
        setActiveTab(tb.id);
    };
    useEffect(() => {
        handleTabBody(tabsData[0]);
    }, []);
    return (
        <Grid container>
            <Grid
                container
                alignItems="flex-end"
                sx={{ padding: "0 14px", minHeight: 43 }}
            >
                {tabsData?.map(tb => (
                    <CustomTabItem
                        key={tb.id}
                        status={activeTab === tb.id ? "active" : "unActive"}
                        onClick={() => handleTabBody(tb)}
                    >
                        {tb.title}
                    </CustomTabItem>
                ))}
            </Grid>
            <CustomBox container>{body}</CustomBox>
        </Grid>
    );
};
