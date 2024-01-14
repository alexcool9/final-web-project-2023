import axios from "axios";
// import { useSnackbar } from "../../providers/SnackbarProvider";
import { useUser } from "./../users/providers/UserProvider";
import { useEffect } from "react";

const useAxios = () => {
    // const snack = useSnackbar();
    const { token } = useUser()

    useEffect(() => {
        axios.defaults.headers.common["authorization"] = 'Bearer ' + token;

        // if (snack) {
            axios.interceptors.request.use((data) => {
                return Promise.resolve(data);
            }, null);


            axios.interceptors.response.use(null, (error) => {
                const expectedError = error.response && error.response.status >= 400;
                // if (expectedError) alert(error.message,"error" );
                console.log('expectedError', error.message);
                return Promise.reject(error);
            });
        // }


    }, [token]);

}

export default useAxios;