import { useState } from "react";
import { ProSidebar, Menu } from "react-pro-sidebar";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box, Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";



const initialValues = {
    isAbove: false,
    goodOrBadString:"",
    optionsExplanation:"",
    moreYearsString:"",
    moreMoneyString:"",
    disposableIncomeString:""
}

const Results = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const getter = async (values) => {
    //     const response = await fetch("http://localhost:4000/api/getData", {
    //         method: "GET",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(values)
    //     }).then((res) => {
    //         alert('Received Successfully')
    //     }).catch((err) => {
    //         console.log(err.message)
    //     })
    // }
    fetch("http://localhost:4000/api/getData", {}).then(response => response.json()).then(json => {
        console.log("json", json)
        //setData(json)
    }).catch(e => {
        console.log("e", e)
    })
    return (
        <Box m="40px">
            <Box display="grid" gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }}>
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                >
                    {initialValues.goodOrBadString}
        
                </Typography>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
            </Box>
            <Box display="grid" gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }}>
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                >
                    options
                </Typography>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
            </Box>
            return (
            retire === false && (
            <Box display="grid" gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }}>
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                >
                    moreYears
                </Typography>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
            </Box>
            <Box display="grid" gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }}>
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                >
                    moreMoney
                </Typography>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
            </Box>
            )  : null)
            return (
            retire === true && (
            <Box display="grid" gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }}>
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                >
                    moreYears
                </Typography>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
            </Box>
            ) : null)
        </Box>
    )

}

export default Results;