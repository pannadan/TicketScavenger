import { Box, Button, TextField } from '@mui/material';
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
    age: yup.string().required("required"),
    retireAge:yup.string().required("required"),
    livingCost:yup.string().required("required"),
    savings:yup.string().required("required"),
    investments:yup.string().required("required"),
    apy:yup.string().required("required"),
    yearsOfRet:yup.string().required("required"),
    monthlyCont:yup.string().required("required"),
    companyMatching:yup.string().required("required"),
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
                                name = "Age"
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
                             <TextField
                                fullWidth
                                variant = "filled"
                                type = "dropdown"
                                label = "Account Type"
                                onBlur = {handleBlur}
                                onChange = {handleChange}
                                value = {values.team}
                                name = "fundType"
                                error = {!!touched.team && !!errors.team}
                                helperText = {touched.team && errors.team}
                                sx = {{ gridColumn: "span 2"}}
                            />
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