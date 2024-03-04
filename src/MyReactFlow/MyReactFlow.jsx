import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
} from "react-flow-renderer";
import { nodes as initialNodes, edges as initialEdges } from "./elements";
import FlowModal from "./FlowModal";
import { Button } from "@mui/material";

function MyReactFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isModalVisible, setIsModalVisible] = useState(false);
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
  const getNodeId = () => Math.random();

  const onAdd = useCallback(
    (data) => {
      const maxX = nodes.reduce(
        (max, node) => (node.position.x > max ? node.position.x : max),
        0
      );

      const newX = maxX + 30;

      const newNode = {
        id: String(getNodeId()),
        data: { label: data },
        position: {
          x: newX,
          y: 0,
        },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes, nodes]
  );

  function displayCustomNamedNodeModal() {
    setIsModalVisible(true);
  }
  function handleCancel() {
    setIsModalVisible(false);
  }
  function handleOk(data) {
    onAdd(data.nodeName);
    setIsModalVisible(false);
  }

  return (
    <div style={{ height: "100vh", margin: "10px" }}>
      <FlowModal
        isModalVisible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
      />

      <Button
        variant="contained"
        color="success"
        onClick={displayCustomNamedNodeModal}
      >
        NOVO CARD
      </Button>

      <ReactFlow
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
