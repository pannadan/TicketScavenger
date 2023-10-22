import { Box, Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
    age:0,
    retireAge:0,
    livingCost:0,
    savings:0,
    investments:0,
    apy:0,
    yearsOfRet:0,
    monthlyCont:0,
    companyMatching:0,
    // fundType:"",
};

    const userSchema = yup.object().shape({
        age: yup.string()
        .required("required"),
        retireAge:yup.string()
        .required("required"),
        livingCost:yup.string()
        .required("required"),
        savings:yup.string()
        .required("required"),
        investments:yup.string()
        .required("required"),
        apy:yup.string()
        .required("required"),
        yearsOfRet:yup.string()
        .required("required"),
        monthlyCont:yup.string()
        .required("required"),
        companyMatching:yup.string()
        .required("required"),
        fundType:yup.string().required("required"),
    });


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")

    const handleFormSubmit = async (values) => {
        console.log(JSON.stringify(values))
        const response = await fetch("http://localhost:4000/api/401k",{
            method: "POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(values)
        }).then((res)=>{
            alert('Saved Successfully')
        }).catch((err)=>{
           console.log(err.message) 
        })
    }
    return(
        <Box m = "20px">
            <Header title = "FORM" subtitle = "Submit retirement calculator information"/>
            <Formik
                onSubmit = {handleFormSubmit}
                initialValues = {initialValues}
                validationSchema={userSchema}
            >
                {({values, errors, touched, handleBlur, handleChange, handleSubmit}) =>(
                    <form onSubmit = {handleSubmit}>
                        <Box display = "grid" gap = "30px" gridTemplateColumns = "repeat(4, minmax(0, 1fr))" sx = {{"& > div": {gridColumn : isNonMobile ? undefined : "span 4"},}}>
                            <TextField
                                fullWidth
                                variant = "filled"
                                type = "text"
                                label = "Age"
                                onBlur = {handleBlur}
                                onChange = {handleChange}
                                value = {values.age}
                                name = "age"
                                error = {!!touched.date && !!errors.date}
                                helperText = {touched.date && errors.date}
                                sx = {{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type = "text"
                                label = "Retirement Age"
                                onBlur = {handleBlur}
                                onChange = {handleChange}
                                value = {values.retireAge}
                                name = "retireAge"
                                error = {!!touched.scout && !!errors.scout}
                                helperText = {touched.scout && errors.scout}
                                sx = {{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type = "text"
                                label = "Living Cost"
                                onBlur = {handleBlur}
                                onChange = {handleChange}
                                value = {values.livingCost}
                                name = "livingCost"
                                error = {!!touched.dxId && !!errors.dxId}
                                helperText = {touched.dxId && errors.dxId}
                                sx = {{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type = "text"
                                label = "Savings"
                                onBlur = {handleBlur}
                                onChange = {handleChange}
                                value = {values.savings}
                                name = "savings"
                                error = {!!touched.player && !!errors.player}
                                helperText = {touched.player && errors.player}
                                sx = {{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type = "text"
                                label = "Investments"
                                onBlur = {handleBlur}
                                onChange = {handleChange}
                                value = {values.investments}
                                name = "investments"
                                error = {!!touched.event && !!errors.event}
                                helperText = {touched.event && errors.event}
                                sx = {{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type = "text"
                                label = "Annual Percentage Yield"
                                onBlur = {handleBlur}
                                onChange = {handleChange}
                                value = {values.apy}
                                name = "apy"
                                error = {!!touched.team && !!errors.team}
                                helperText = {touched.team && errors.team}
                                sx = {{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type = "text"
                                label = "Monthly Contribution"
                                onBlur = {handleBlur}
                                onChange = {handleChange}
                                value = {values.monthlyCont}
                                name = "monthlyCont"
                                error = {!!touched.team && !!errors.team}
                                helperText = {touched.team && errors.team}
                                sx = {{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type = "text"
                                label = "Company Match"
                                onBlur = {handleBlur}
                                onChange = {handleChange}
                                value = {values.companyMatching}
                                name = "companyMatching"
                                error = {!!touched.team && !!errors.team}
                                helperText = {touched.team && errors.team}
                                sx = {{ gridColumn: "span 2"}}
                            />
                            <FormControl
                                fullWidth
                                variant="filled"
                                sx={{ gridColumn: "span 2" }}
                            >
                                <InputLabel>Account Type</InputLabel>
                                <Select
                                    label="Account Type"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.fundType}
                                    name="fundType"
                                    error={touched.fundType && !!errors.fundType}
                                >
                                    <MenuItem value="roth">Roth IRA</MenuItem>
                                    <MenuItem value="traditonal">Traditional IRA</MenuItem>
                                    <MenuItem value="four">401K</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display = "flex" justifyContent = "end" mt = "20px">
                            <Button type = "submit" color = "secondary" variant = "contained">
                                Submit Information
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form;