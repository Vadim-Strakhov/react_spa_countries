import axios from "axios";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

const Details = () => {
  const { name } = useParams();
  const { push, goBack } = useHistory();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  // console.log(country);
  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info push={push} {...country} />}
    </div>
  );
};
export default Details;
