import { useState, useEffect } from "react";
import axios from "axios";

export const Shorturl = () => {
  const [value, setValue] = useState({ shorturl: "" });
  const [values, setValues] = useState([]);

  const handleCreateShortURL = async (value) => {
    try {
        let response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${value.shorturl}`);
        return response;
    } catch(err) {
        console.error(err)
    }
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      if (value) {
        let result = await handleCreateShortURL(value);
        if ( result.data.result.short_link){
            setValues(() => [...values, result.data.result.short_link]);
            setValue({ shorturl: "" });
        }
        console.log("result---",result.data.result.short_link);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    if (event.target.value) {
      setValue({
        [event.target.name]: event.target.value
      });
    }
  };
  console.log("value", value);
  console.log("values", values);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>URL shortner</div>

          <label htmlFor="shorturl">
            <input
              type="text"
              id="shorturl"
              name="shorturl"
              onChange={handleChange}
              value={value.shorturl}
            ></input>
          </label>
          <button type="submit">Short</button>
        </form>
        <br />
        <div>
          {values?.map((url) => {
            return <div>{url}</div>
          })}
        </div>
      </div>
    </>
  );
};
