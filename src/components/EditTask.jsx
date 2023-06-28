import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// ICONS
import { VscEdit } from "react-icons/vsc";

export default function EditTask({ editTask, taskItem, closeOption }) {
    const [open, setOpen] = useState(false);
    const [newText, setNewText] = useState("");

    // ESTA FUNCION ABRE EL DIALOGO
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <p
                className="w-full hover:bg-neutral-100 py-2 px-4 cursor-pointer"
                onClick={handleClickOpen}
            >
                Editar
            </p>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edita tu tarea</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tarea"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={taskItem.name}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            handleClose();
                            closeOption();
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => {
                            if (newText.length > 0) {
                                editTask(taskItem.id, newText);
                            }
                            handleClose();
                            closeOption();
                        }}
                    >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
