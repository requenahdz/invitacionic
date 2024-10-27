import { FormControl, InputLabel, Select, TextField, Typography } from "@mui/material"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem } from '@mui/material';
import React, { useState } from 'react';
const INIT = {
  name: '',
  email: '',
  guest: '',
  guest_name: '',
  phone: '',
  message: ''
}
function FormConfirmationContainer() {
  const [open, setOpen] = useState<boolean>(false);

  const [data, setData] = useState(INIT)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (name: string) => (e: any) => {
    const { value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data)
  };

  const isValid = () => {
    // Comprobamos que todos los campos requeridos no estén vacíos
    return (
      data.name.trim() !== '' &&
      data.email.trim() !== '' &&
      data.guest &&
      data.guest_name.trim() !== '' &&
      data.phone.trim() !== '' &&
      data.message.trim() !== ''
    );
  };

  return (
    <section>


      <div className="m-auto shadow-md rounded-lg bg-white flex w-80 cursor-pointer my-5" onClick={handleClickOpen}>
        <p className="font-semibold p-3 text-center w-full">Confirma tu asistencia</p>
      </div>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirma tu asistencia</DialogTitle>
        <DialogContent>
          <Typography className="text-red-700">Evento no permitido con niños</Typography>
          <DialogContentText>
            <form className="bg-white p-5 grid grid-cols-1 gap-3 min-w-[400px]">
              <TextField label="Nombre(s)" variant="outlined" value={data.name} onChange={handleChange('name')} />
              <TextField label="Correo" type="email" variant="outlined" value={data.email} onChange={handleChange('email')} />
              <TextField label="Teléfono" variant="outlined" value={data.phone} onChange={handleChange('phone')} />

              <FormControl fullWidth>
                <InputLabel>Invitados confirmados</InputLabel>
                <Select
                  placeholder="Invitados confirmados"
                  label="Invitados confirmados"
                  onChange={handleChange('guest')}
                  value={data.guest}
                >
                  <MenuItem value={0}>No asistire</MenuItem>
                  <MenuItem value={1}>Un invitado</MenuItem>
                </Select>
              </FormControl>


              {data.guest ? (
                <TextField label="Nombre del invitado" variant="outlined" value={data.guest_name} onChange={handleChange('guest_name')} />
              ) : null}

              <TextField label="Comentarios" variant="outlined" value={data.message} fullWidth
                margin="normal"
                multiline
                rows={2}
                onChange={handleChange('message')} />

            </form>


          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cencelar
          </Button>
          <Button onClick={handleClose} color="primary"
            disabled={!isValid()} // Deshabilitar si algún campo es inválido
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

    </section>
  )
}

export default FormConfirmationContainer