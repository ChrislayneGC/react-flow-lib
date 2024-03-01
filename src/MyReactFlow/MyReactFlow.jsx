import React, { useCallback } from "react";
import ReactFlowRender, {
  addEdge,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
} from "react-flow-renderer";
import { nodes as initialNodes, edges as initialEdges } from "./elements";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function MyReactFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: ConnectionLineType.SmoothStep,
            animated: true,
            style: { stroke: "red" },
          },
          eds
        )
      ),
    [setEdges]
  );

  return (
    <div style={{ height: "100vh", margin: "10px" }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              label="Selecione"
              name="select"
              // value={nodeType}
              // onChange={(e) => setNodeType(e.target.value)}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="input">Input</MenuItem>
              <MenuItem value="output">Output</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Nome"
            // onChange={(event) => setnodeName(event.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Adicionar
          </Button>
        </Grid>
      </Grid>

      <ReactFlowRender
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        selectNodesOnDrag={false}
        fitView
      />
    </div>
  );
}

export default MyReactFlow;
