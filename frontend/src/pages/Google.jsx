import queryString from "query-string";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";
import { API_URL } from "../config";

const Google = () => {
  const location = useLocation();
  async function googleAuthenticate(state, code) {
    if (state && code) {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const details = {
        state: state,
        code: code,
      };

      const formBody = Object.keys(details)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
        )
        .join("&");

      try {
        const res = await axios.post(
          `${API_URL}/auth/o/google-oauth2/?
          ${formBody}`,
          config
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  }
  useEffect(() => {
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;
    console.log(state);
    googleAuthenticate(state, code);
  }, [location]);
  return <div>Google</div>;
};

export default Google;
