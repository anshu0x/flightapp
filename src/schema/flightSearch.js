import * as yup from "yup";
let flightSearch = yup.object().shape({
    origin: yup
        .string()
        .required("Please enter your origin")
        .min(5, "Please use valid origin airport name"),
    destination: yup
        .string()
        .required("Please enter your destination")
        .min(5, "Please use valid origin airport name"),
});

export default flightSearch;