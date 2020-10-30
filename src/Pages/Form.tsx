import React, { MouseEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Slider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { sendForm } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";
import Snackbar from '@material-ui/core/Snackbar';



export default function Form() {



  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [answer1, setAwnser1] = useState("");
  const [answer2, setAwnser2] = useState("");
  const [answer3, setAwnser3] = useState("");
  const [answer4, setAwnser4] = useState("");
  const [answer5, setAwnser5] = useState("");
  const [answer6, setAwnser6] = useState("");

  const [nervousScore, setNervousScore] = useState(0);
  const [rapportScore, setRapportScore] = useState(0);
  const [technicalScore, setTechnicalScore] = useState(0);
  const [preparationScore, setPreparationScore] = useState(0);
  const [bodyLanguageScore, setBodyLanguageScore] = useState(0);
  const [open, setOpen] =useState(false)



  const handleClose = (event: any , reason:any) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const handleClick = () => {
    setOpen(true);
  };



  const [answers, setAnswers] = useState([
    { Question: "Company Name", Answer: `${answer1}` },
    {
      Question: " What was the most difficult question they asked?",
      Answer: `${answer2}`,
    },
    { Question: "What went well?", Answer: `${answer3}` },
    {
      Question: "What did you get across positively about yourself?",
      Answer: `${answer4}`,
    },
    { Question: "What could have gone better?", Answer: `${answer5}` },
    {
      Question:
        "What can i do differently next time to improve my performance?",
      Answer: `${answer6}`,
    },
  ]);
  console.log(answer1);

  function clickHandler(e: MouseEvent) {
    
    e.preventDefault();
    dispatch(
      
      sendForm(
        user.user.id,
        answer1,
        nervousScore,
        rapportScore,
        technicalScore,
        preparationScore,
        bodyLanguageScore,
        answers
      )
    );
    handleClick()
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          How did the Interview go?
        </Typography>

        <Typography id="discrete-slider-small-steps" gutterBottom>
          How nervous where you?
        </Typography>
        <Slider
          onChange={(event: any, value: any) => {
            setNervousScore(value);
          }}
          value={nervousScore}
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
          onChange={(event: any, value: any) => {
            setRapportScore(value);
          }}
          value={rapportScore}
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
          onChange={(event: any, value: any) => {
            setTechnicalScore(value);
          }}
          value={technicalScore}
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
          onChange={(event: any, value: any) => {
            setPreparationScore(value);
          }}
          value={preparationScore}
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
          onChange={(event: any, value: any) => {
            setBodyLanguageScore(value);
          }}
          value={bodyLanguageScore}
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
            value={answer1}
            onChange={(event: any) => {
              setAwnser1(event.target.value);
            }}
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
            What was the most difficult question they asked?{" "}
          </Typography>
          <TextField
            value={answer2}
            onChange={(event: any) => {
              setAwnser2(event.target.value);
            }}
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
            value={answer3}
            onChange={(event: any) => {
              setAwnser3(event.target.value);
            }}
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
            value={answer4}
            onChange={(event: any) => {
              setAwnser4(event.target.value);
            }}
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
            value={answer5}
            onChange={(event: any) => {
              setAwnser5(event.target.value);
            }}
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
            value={answer6}
            onChange={(event: any) => {
              setAwnser6(event.target.value);
            }}
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
            onClick={(e) => clickHandler(e)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit review{" "}
          </Button>


            <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="InterReview Submitted" 
      />
    </div>

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
