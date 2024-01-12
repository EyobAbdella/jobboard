import { useMutation } from "react-query";
import APIClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useRegister = () => {
  const auth = new APIClient("/auth/users/");
  const navigate = useNavigate();
  return useMutation({
    mutationFn: auth.post,
    onSuccess: () => {
      navigate("/verify");
    },
    onError: (error) => {
      const { response } = error;
      if (response && response.data) {
        const errorData = response.data;
        Object.keys(errorData).forEach((field) => {
          const fieldErrors = errorData[field];
          fieldErrors.forEach((errorMsg) => {
            toast.error(errorMsg);
          });
        });
      }
    },
  });
};

export default useRegister;
