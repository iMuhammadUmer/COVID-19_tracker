import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
  },
  title: {
    textAlign: "left",
  },
  table: {
    height: 450,
    overflowY: "scroll",
    display: "block",
  },
}));

export default function CountriesList() {
  const [globalData, setGlobalData] = useState([{}]);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setDataLoading(true);
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
      let data = await response.json();
      setGlobalData(Object.values(Object.values(data.countryitems)[0]));
      setDataLoading(false);
    }
    getData();
  }, []);

  const classes = useStyles();

  if (dataLoading) {
    return (
      <div className={classes.root}>
        <table className={classes.table}>
          <tbody>
            {globalData.map((key, ind) => {
              return (
                <tr key={ind}>
                  <th className={classes.title}>Loading</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <table className={classes.table}>
        <tbody>
          {globalData.map((key, ind) => {
            return (
              <tr key={ind}>
                <th className={classes.title}>{globalData[ind].title}</th>
                <td>
                  {globalData[ind].total_active_cases +
                    globalData[ind].total_serious_cases}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
