import { FormControl, InputLabel, Select, TextField, Typography } from "@mui/material"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import imgYesQr from '../assets/yesQr.png'; // Importa la imagen
import imgNoQr from '../assets/noQr.png'; // Importa la imagen

import Image from 'next/image';

const BASE_URL = 'https://robertorequena.mx/api/A007/guests';
const INIT = {
  name: '',
  email: '',
  guest: 0,
  guest_name: '',
  phone: '',
  message: ''
}
function FormConfirmationContainer() {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState(INIT)

  const [openImg, setOpenImg] = useState(false);
  const handleOpenImg = () => setOpenImg(true);
  const handleCloseImg = () => setOpenImg(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (name: string) => (e: { target: { value: string | number }; }) => {
    const { value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const isValid = () => {
    return (
      data.name.trim() !== '' &&
      data.email.trim() !== '' &&
      (data.guest !== 1 || data.guest_name.trim() !== '') && // Valida guest_name solo si data.guest es 1
      data.phone.trim() !== '' &&
      data.message.trim() !== ''
    );
  };

  const handleSave = async () => {
    handleClose()
    handleOpenImg();
    try {
      const response = await axios.post(BASE_URL, data);
      setData(INIT)
      return response.data; // Se asume que la respuesta contiene un `data` con los datos que necesitas
    } catch (error) {
      handleClose()
      console.error('Error posting guests:', error);
      throw error; // Re-lanza el error para manejo posterior
    }
  }

  interface ImageDialogProps {
    open: boolean;
    onClose: () => void;
  }

  const ImageDialog: React.FC<ImageDialogProps> = ({ open, onClose }) => {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogContent>
          {data.guest ?
            <Image src={imgYesQr} alt="Dialog" /> :
            <Image src={imgNoQr} alt="Dialog" />}
        </DialogContent>
      </Dialog>
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
            <form className="bg-white p-5 grid gap-3 w-72">
              <TextField size="small" label="Nombre(s)" variant="outlined" value={data.name} onChange={handleChange('name')} />
              <TextField size="small" label="Correo" type="email" variant="outlined" value={data.email} onChange={handleChange('email')} />
              <TextField size="small" label="Teléfono" variant="outlined" value={data.phone} onChange={handleChange('phone')} />

              <FormControl fullWidth>
                <InputLabel>Invitados confirmados</InputLabel>
                <Select
                  placeholder="Invitados confirmados"
                  label="Invitados confirmados"
                  onChange={handleChange('guest')}
                  value={data.guest}
                  size="small"
                >
                  <MenuItem value={0}>No asistire</MenuItem>
                  <MenuItem value={1}>Un invitado</MenuItem>
                </Select>
              </FormControl>

              {data.guest ? (
                <TextField size="small" label="Nombre del invitado" variant="outlined" value={data.guest_name} onChange={handleChange('guest_name')} />
              ) : null}

              <TextField size="small" label="Comentarios" variant="outlined" value={data.message} fullWidth
                margin="normal"
                multiline
                rows={2}
                onChange={handleChange('message')}

              />

            </form>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cencelar
          </Button>
          <Button onClick={handleSave} color="primary"
            disabled={!isValid()} // Deshabilitar si algún campo es inválido
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      <ImageDialog
        open={openImg}
        onClose={handleCloseImg}
      />

    </section>
  )
}

export default FormConfirmationContainer