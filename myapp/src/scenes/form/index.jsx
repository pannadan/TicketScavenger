import { Box, Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
//import { updateScoutForm } from "../../addScoutingFormData"

const initialValues = {
    age:"",
    retireAge:"",
    livingCost:"",
    savings:"",
    investments:"",
    apy:"",
    yearsOfRet:"",
    monthlyCont:"",
    companyMatching:"",
    fundType:"",
};

const userSchema = yup.object().shape({
    age: yup.number()
    .required("required")
    .positive("Must be positive"),
    retireAge:yup.number()
    .required("required")
    .positive("Must be positive"),
    livingCost:yup.number()
    .required("required")
    .positive("Must be positive"),
    savings:yup.number()
    .required("required")
    .positive("Must be positive"),
    investments:yup.number()
    .required("required"),
    apy:yup.number()
    .required("required"),
    yearsOfRet:yup.number()
    .required("required")
    .positive("Must be positive"),
    monthlyCont:yup.number()
    .required("required")
    .positive("Must be positive"),
    companyMatching:yup.number()
    .required("required")
    .positive("Must be positive"),
    fundType:yup.string().required("required"),
});


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")

    const handleFormSubmit = (values) => {
        //values.preventDefault();
        values.id = values.date + "_Sample Report";
        fetch("./db.json",{
            method: "POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(values)
        }).then((res)=>{
            alert('Saved Successfully')
        }).catch((err)=>{
           console.log(err.message) 
        })
        //updateScoutForm(values);
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
                                type = "number"
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
                                value = {values.scout}
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
                                value = {values.dxId}
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
                                value = {values.player}
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
                                value = {values.event}
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
                                value = {values.team}
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
                                value = {values.team}
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
                                value = {values.team}
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
                             {/* <TextField
                                multiline
                                fullWidth
                                variant="filled"
                                label="Account Type"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="fundType"
                                error={!!touched.team && !!errors.team}
                                helperText={touched.team && errors.team}
                                sx={{ gridColumn: "span 2" }}
                                >
                                <Select
                                    value={values.fundType}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="option1">Option 1</MenuItem>
                                    <MenuItem value="option2">Option 2</MenuItem>
                                    <MenuItem value="option3">Option 3</MenuItem>
                                </Select>
                                </TextField> */}
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