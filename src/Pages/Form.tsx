import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Slider } from "@material-ui/core";

export default function Form() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          How did the Interview go?
        </Typography>

        <Typography id="discrete-slider-small-steps" gutterBottom>
          How nervous where you?{" "}
        </Typography>
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />

        <Typography id="discrete-slider-small-steps" gutterBottom>
          did you build rapport?{" "}
        </Typography>
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />
        <Typography id="discrete-slider-small-steps" gutterBottom>
          How did you do on technical questions?{" "}
        </Typography>
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />
        <Typography id="discrete-slider-small-steps" gutterBottom>
          How prepared were you?{" "}
        </Typography>
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />
        <Typography id="discrete-slider-small-steps" gutterBottom>
          How was your Body language{" "}
        </Typography>
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />

        <form className={classes.form} noValidate>
          <Typography id="discrete-slider-small-steps" gutterBottom>
            company name?{" "}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />
          <Typography id="discrete-slider-small-steps" gutterBottom>
            Why did I apply for this job{" "}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />
          <Typography id="discrete-slider-small-steps" gutterBottom>
            what was your first impression of the company?
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />{" "}
          <Typography id="discrete-slider-small-steps" gutterBottom>
            What was the most difficult questions they asked?{" "}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />{" "}
          <Typography id="discrete-slider-small-steps" gutterBottom>
            What went well?{" "}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />{" "}
          <Typography id="discrete-slider-small-steps" gutterBottom>
            What were you really happy with?{" "}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />{" "}
          <Typography id="discrete-slider-small-steps" gutterBottom>
            What did you get across positively about yourself?{" "}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />{" "}
          <Typography id="discrete-slider-small-steps" gutterBottom>
            What questions did you answer really well?{" "}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />{" "}
          <Typography id="discrete-slider-small-steps" gutterBottom>
            What could have gone better?{" "}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />{" "}
          <Typography id="discrete-slider-small-steps" gutterBottom>
            What were you not happy with?{" "}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />{" "}
          <Typography id="discrete-slider-small-steps" gutterBottom>
            What can i do differently next time to improve my performance?{" "}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />
          <Typography id="discrete-slider-small-steps" gutterBottom>
            What actionable steps can i take?
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="question"
            name="question"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit review{" "}
          </Button>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
