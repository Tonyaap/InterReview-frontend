import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Interview, Questions } from "../types/types";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },

  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 50,
    textAlign: "left",
    borderWidth: 2,
    borderStyle: "solid",
    margin: 80,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    color: "#26359a",
    fontSize: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 3,
    borderBottomStyle: "solid",
  },

  question: { fontSize: 16, color: "red" },

  answer: { fontSize: 14, color: "black" },

  pos: {
    fontSize: 16,
    color: "black",
    marginBottom: 12,
  },
});

export default function Interviews() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  

  const interviews = user.user.Interviews;


  return (
    <div className={classes.root}>
      {interviews ? (
        interviews.map((i: Interview) => {
          return (
            
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {i.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  bodylanguageScore:{i.bodylanguageScore}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  nervousScore:{i.nervousScore}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  rapportScore:{i.rapportScore}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  preparationScore:{i.preparationScore}
                </Typography>
               <div className={classes.root}>
                   <Accordion>
        <AccordionSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Button color="secondary"
              variant="contained" >Show Questions</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             {i.questions.map((q: Questions) => {
                  return (
                    <div style={{ margin: 20 }}>
                      <p className={classes.question}> • {q.Question}</p>{" "}
                      <p className={classes.answer}>{q.Answer}</p>
                    </div>
                  );
                })}
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

               
              </CardContent>
            </Card>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
