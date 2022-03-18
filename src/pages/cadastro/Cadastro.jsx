import React, { useState } from "react";
import "./styles.css"
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button"

const Cadastro = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = async () => {

    }

    return (
        <form>
            {/* //error helperText="Email incorreto." */}
            <Box display="flex" justifyContent="center" flexDirection="column" sx={{ height: "100vh", alignItems: "center" }}>
                <div className="container-title">
                    <h1>Realize seu cadastro</h1>
                </div>

                <div className="container cont-name">
                    <TextField id="outlined-basic" size="small" label="Nome do Usuário" variant="outlined" color="info" value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="container cont-email">
                    <TextField id="outlined-basic2" size="small" label="Email" type="email" variant="outlined" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="container cont-password">
                    <TextField size="small" id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <Button onClick={handleForm} variant="outlined">Enviar</Button>
            </Box>
        </form>
    )
}
export default Cadastro;