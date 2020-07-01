import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    width: "100%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const names = ["Pakistan", "USA", "UK", "Iran", "Oman", "UAE"];

export const CountryList = () => {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="select-multiple-native">
        Select Country
      </InputLabel>
      <Select
        multiple
        native
        value={personName}
        onChange={handleChangeMultiple}
        inputProps={{
          id: "select-multiple-native",
        }}
      >
        {names.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
