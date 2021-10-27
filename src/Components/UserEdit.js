import React from 'react'
import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
export default function UserEdit({currentUser}) {

console.log(currentUser)
    const [username, setUsername] = useState(currentUser.username)
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState(currentUser.password)
    const [checkUsername, setCheckUsername] = useState(true)
    const [checkName, setCheckName] = useState(true)
    const [checkEmail, setCheckEmail] = useState(true)
    const [checkPassword, setCheckPassword] = useState(true)
    const [error, setErrors] = useState("");
console.log(checkUsername)
console.log(checkName)
console.log(checkEmail)
console.log(checkPassword)
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/users/${currentUser.id}`, {
            credentials: 'include',
            method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            password: password,
            
          })
        })
        .then(res => {
          if (res.ok) {
            window.location.reload(true);
        } else {
            res.json().then((errors) => {
              console.log(errors);
              setErrors(errors);
            })
          }
        })
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    
    return (
        <div>
        <Button style={{backgroundColor: '#009994', color: '#ffff'}} variant="outlined" onClick={handleClickOpen}>
       Edit Account Info
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Info Below</DialogTitle>
        <p>{error ? (
            <>
              {error.errors.map((error) => (
                <Alert variant="outlined" severity="error" style={{color: "red"}}>{error}</Alert>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
        <DialogContent>
          <DialogContentText>
            Please Check the field you'd like to update.
          </DialogContentText>
          
          <Stack
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Stack direction="row">
        <Checkbox onChange={(e) => setCheckName(!checkName)}  /> 
      <TextField
        disabled={checkName}
        id="standard-required"
        label="Full Name"
        defaultValue="full name"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     </Stack>
     <Stack direction="row">

     <Checkbox onChange={(e) => setCheckUsername(!checkUsername)} />  
      <TextField
        disabled={checkUsername}
        id="standard-required"
        label="Username"
        defaultValue="username"
        variant="standard"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />  
    </Stack>
    <Stack direction="row">
       <Checkbox onChange={(e) => setCheckEmail(!checkEmail)}/>
          <TextField
          disabled={checkEmail}
        id="standard-required"
        label="Email"
        defaultValue="Email"
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </Stack>
     <Stack direction="row">
     <Checkbox onChange={(e) => setCheckPassword(!checkPassword)} /> 
      <TextField
      disabled={checkPassword}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </Stack>
      </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}
