import React from "react";
import { Button, Modal, TextField } from "@mui/material";

function FlowModal({ isModalVisible, onCancel, onOk }) {
  const [nodeName, setNodeName] = React.useState("");

  const handleOk = () => {
    if (nodeName.trim() !== "") {
      onOk({ nodeName });
      setNodeName("");
    }
  };

  return (
    <Modal open={isModalVisible} onClose={onCancel}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ backgroundColor: "white", padding: 10, width: 300 }}>
          <h2>Adicionar</h2>
          <TextField
            label="Nome"
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <div style={{ marginTop: 20, textAlign: "right" }}>
            <Button
              onClick={onCancel}
              variant="outlined"
              color="error"
              style={{ marginRight: 5 }}
            >
              Cancelar
            </Button>
            <Button variant="contained" color="primary" onClick={handleOk}>
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default FlowModal;
