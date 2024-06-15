import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../config";
import { useHistory } from "react-router-dom";
import axios from "axios";
import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";

const HomePage = ({ setCountries, countries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const { push } = useHistory();

  const handleSearch = (search, region) => {
    let data = [...countries];
    // console.log(data);
    if (region) {
      // console.log(region);
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      // console.log(search);
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  // console.log(countries);

  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              {...countryInfo}
              onClick={() => push(`/country/${c.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};
export default HomePage;
