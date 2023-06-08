import React from "react";
import "./register.css";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import {TextField} from "@mui/material";

const Registration = () => {
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <section class="h-100 bg-dark" >
      <div class="container py-1 " >
        <div class="row d-flex justify-content-center align-items-center h-100" >
          <div class="col" >
            <div class="card card-registration my-4"> 
              <div class="row g-0" >
                <div class="col-xl-6 d-none d-xl-block " >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    class="img-fluid"
                    style={{
                      borderTopLeftRadius: " .25rem",
                      height:"30rem",
                      width:"100%",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 py-2 text-black">
                    <h3 class="mb-3 text-uppercase">
                      Registration
                    </h3>

                    <div class="row">
                      <div class="col-md-6 mb-1">
                        <Box
                          component="form"
                          sx={{
                            "& > :not(style)": {
                              m: 1,
                              width: "15vw",
                              height: "50px",
                            },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                          />
                        </Box>
                      </div>
                      <div class="col-md-6 mb-1">
                        <Box
                          component="form"
                          sx={{
                            "& > :not(style)": {
                              m: 1,
                              width: "15vw",
                              height: "50px",
                            },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                          />
                        </Box>
                      </div>
                    </div>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          m: 1,
                          width: "30vw",
                          height: "50px",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"
                      />
                    </Box>

                    <FormControl className="mb-1 pt-3" style={{marginLeft:"15px"}}>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                      </RadioGroup>
                    </FormControl>

                    <div class="row" style={{marginLeft:"1px"}}>
                      <div class="col-md-6 mt-1 mb-3">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              State
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={state}
                              label="Age"
                              onChange={handleChange}
                            >
                              <MenuItem value={1}>Madhya Pradesh</MenuItem>
                              <MenuItem value={2}>Chhattisgarh</MenuItem>
                              <MenuItem value={3}>Jammu and Kashmir</MenuItem>
                              <MenuItem value={4}>Jharkhand</MenuItem>
                              <MenuItem value={5}>Rajasthan</MenuItem>
                              <MenuItem value={6}> Punjab</MenuItem>
                              <MenuItem value={7}>Andhra Pradesh</MenuItem>
                              <MenuItem value={8}> Arunachal Pradesh</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                      <div class="col-md-6 mt-1">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              City
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={city}
                              label="Age"
                              onChange={handleChangeCity}
                            >
                              <MenuItem value={1}>Bhopal</MenuItem>
                              <MenuItem value={2}>Raipur</MenuItem>
                              <MenuItem value={3}>Srinagar</MenuItem>
                              <MenuItem value={4}>Ranchi</MenuItem>
                              <MenuItem value={5}>Jaipur</MenuItem>
                              <MenuItem value={6}>Chandigarh</MenuItem>
                              <MenuItem value={7}>Amaravati</MenuItem>
                              <MenuItem value={8}> Itanagar</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          ml:1,
                          width: "30vw",
                          height: "50px",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Pincode"
                        variant="outlined"
                      />
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          mt: 3,
                          ml:1,
                          width: "30vw",
                          height: "50px",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Email Id"
                        variant="outlined"
                      />
                    </Box>

                    <div class="d-flex justify-content-end pt-3">
                      <button type="button" class="btn btn-light btn-lg">
                        Reset all
                      </button>
                      <button type="button" class="btn btn-warning btn-lg ms-2">
                        Submit form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
