import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {FormControl, Button} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './UserForm.css';
import Paper from "@material-ui/core/Paper";
// import FormValidation from '../util/FormValidation';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '35ch',
            textAlign: 'center'
        },

    },
}));


export default function UserForm() {
    

    const [git_error,set_giterror]=React.useState(false);
    const [git_name,set_gitname]=React.useState(false);
    const [git_city,set_gitcity]=React.useState(false);
    const [git_coll,set_gitcoll]=React.useState(false);
    const [git_name1,set_gitname1]=React.useState(false);
    const [git_name2,set_gitname2]=React.useState(false);
    

    const classes = useStyles();
    const [name, setName] = React.useState("");
    const [git, setGithub] = React.useState("");
    const [city, setCity] = React.useState("");
    const [git1, setGit1] = React.useState("");
    const [git2, setGit2] = React.useState("");
    const [git3, setGit3] = React.useState("");
    const [git4, setGit4] = React.useState("");

    const [clg, setClg] = React.useState('JK Lakshmipat University');

    const handleChange = (event) => {
        if(event.target.value===""){
            set_gitcoll(true);
        }
        setClg(event.target.value);
    };
    const getName = (event) => {
        if(event.target.value===""){
            set_gitname(true);
        }
        
        setName(event.target.value);
        
        
    };
    const getGit = (event) => {
        if(event.target.value===""){
            set_giterror(true);
        }
      
         setGithub(event.target.value);
        
                    
    };
    const getCity = (event) => {
        if(event.target.value===""){
            set_gitcity(true);
        }
        
        setCity(event.target.value);
    };
    const getGit1 = (event) => {
        if(event.target.value===""){
            set_gitname1(true);
        }
        setGit1(event.target.value);
    };
    const getGit2 = (event) => {
        if(event.target.value===""){
            set_gitname2(true);
        }
        setGit2(event.target.value);
    };
    const getGit3 = (event) => {
        setGit3(event.target.value);
    };
    const getGit4 = (event) => {
        setGit4(event.target.value);
    };
    const allValues = () => {
        console.log(git, name, city, clg, git1, git2, git3, git4);
        if(git==="" || name==="" || city==="" || clg==="" || git1==="" || git2===""){
            if(git==""){
                set_giterror(true);
            }
            if(name===""){
                set_gitname(true);
            }
            if(city===""){
                set_gitcity(true);
            }
            if(clg===""){
                set_gitcoll(true);
            }
            if(git1===""){
                set_gitname1(true);
            }
            if(git2==""){
                set_gitname2(true);
            }
        }   
        // FormValidation(git, clg, git1, git2, git3, git4, city, name);
      
    };
    const clearAll=()=>{
        setGithub("");
        setName("");
        setCity("");
        setGit1("");
        setGit2("");
        setGit3("");
        setGit4("");
    }
    

    return (
        <div>
            <div className="starter">
                <div>
                    <form className="text">
                        <p>Registration</p>
                    </form>
                </div>
                <div className="">
                    <div className="form-style">
                        <div className="designform">

                            <form className={classes.root}>
                                <TextField  required id="outlined-basic" label="GitHub Username" value={git}
                                   error={git_error} onChange={getGit} name="git" type="text" variant="outlined"/>
                            </form>
                            <form className={classes.root}>
                                <TextField required id="outlined-search" label="Name" value={name} onChange={getName}
                                       error={git_name}    name="name" type="text" variant="outlined"/>
                            </form>
                            <form className={classes.root}>
                                <TextField id="outlined-basic" label="City" value={city} onChange={getCity} name="city"
                                        error={git_city}   type="text" variant="outlined"/>
                            </form>
                            <form className={classes.root}>
                                <TextField
                                    id="standard-multiline-flexible"
                                    name="college"
                                    variant="outlined"
                                    label="University/College"
                                    value={clg}
                                    error={git_coll}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </form>
                        </div>
                    </div>

                    <div className="designform">
                        <form className="subtext">
                            <p>Add Friends</p>
                        </form>
                        <form className={classes.root}>
                            <TextField required id="outlined-basic" label="GitHub Username" value={git1}
                                error={git_name1}       onChange={getGit1} name="city" type="text" variant="outlined"/>
                        </form>
                        <form className={classes.root}>
                            <TextField required id="outlined-basic" label="GitHub Username" value={git2}
                             error={git_name2}  onChange={getGit2} name="city" type="text" variant="outlined"/>
                        </form>
                        <form className={classes.root}>
                            <TextField id="outlined-basic" label="GitHub Username" value={git3} onChange={getGit3}
                                       name="city" type="text" variant="outlined"/>
                        </form>
                        <form className={classes.root}>
                            <TextField id="outlined-basic" label="GitHub Username" value={git4} onChange={getGit4}
                                       name="city" type="text" variant="outlined"/>
                        </form>
                        <div className="">

                            <Button variant="contained" color="primary" onClick={allValues}>SUBMIT</Button>
                            <Button/>
                            <Button variant="contained" color="primary" onClick={clearAll}>CLEAR</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}