import { useMutation } from "react-query";
import APIClient from "../services/apiClient";
import toast from "react-hot-toast";

const useLogin = () => {
  const auth = new APIClient("/auth/jwt/create/");
  return useMutation({
    mutationFn: auth.post,
    onSuccess: (data) => console.log(data),
    onError: (error) => toast.error(error.response.data.detail),
  });
};

export default useLogin;
