import axios from "axios";
import "ldrs/tailspin";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config";

const Activate = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const mutation = useMutation(
    (data) => axios.post(`${API_URL}/auth/users/activation/`, data),
    {
      onSuccess: () => navigate("/"),
      onError: (error) => console.log(error),
    }
  );

  mutation.mutate({ uid, token });

  return (
    <div className='absolute left-1/2 bottom-1/2'>
      <l-tailspin size='60' stroke='5' speed='0.9' color='black'></l-tailspin>
    </div>
  );
};

export default Activate;
