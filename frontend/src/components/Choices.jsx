import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Choices = ({ items, type }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{type}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        label='Industry'>
        {items.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Choices;
