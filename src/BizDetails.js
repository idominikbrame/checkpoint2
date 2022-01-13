import React from 'react';
import listings from "./API";
import {useParams} from "react-router";
import {makeStyles} from "@material-ui/core";
import {Container, Paper, Chip} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(20),
            width: theme.spacing(75),
            height: theme.spacing(40),
        },
    },
}));

const BizDetails = (props) => {
    const paperContainer = useStyles();
    let listid = Object.values(useParams())
    console.log(parseInt(listid))
    let result = listings.find(item => item.id === parseInt(listid))
    return (
        <Container className={paperContainer.root}>
            <Paper elevation={2}>
                <Container m={45}>
                    <h1>{result.name}</h1>
                    <h3> Description: {result.description}</h3>
                    <h3>Address: {result.address}</h3>
                </Container>
            </Paper>
        </Container>
    );
};

export default BizDetails;