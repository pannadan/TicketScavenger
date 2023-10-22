import { Box, Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Header from "../../components/Header";

const initialValues = {
    retire,
    goodBad,
    options,
    moreYears,
    moreMoney,
    disposableIncome
}

const Results = () => {
    const getter = async (values) => {
        const response = await fetch("http://localhost:4000/api/", {
            method: "GET",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(values)
        }).then((res) => {
            alert('Received Successfully')
        }).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <Box m="40px">
            <Box display="grid" gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }}>
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                >
                    goodBad
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