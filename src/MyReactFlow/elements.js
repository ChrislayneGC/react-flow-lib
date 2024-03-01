import React from "react";
import { MarkerType } from "reactflow";

export const nodes = [
  {
    id: "1",
    type: "input",
    style: {
      background: "#F53340",
      color: "#fff",
      border: "1px solid #F53340",
      width: 180,
    },
    data: {
      label: (
        <>
          Bem-vindos ao <strong>React Flow!</strong>
        </>
      ),
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    data: {
      label: (
        <>
          Este é um <strong>Card "default"</strong>
        </>
      ),
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    data: {
      label: (
        <>
          Este tem um <strong>Estilo "custom"</strong>
        </>
      ),
    },
    position: { x: 450, y: 90 },
    style: {
      background: "#00178A",
      color: "#D6D5E6",
      border: "1px solid #00178A",
      width: 100,
    },
  },
  {
    id: "4",
    position: { x: 250, y: 200 },
    data: {
      label: "Card Padrão",
    },
  },
  {
    id: "5",
    data: {
      label: "Card Padrão",
    },
    position: { x: 250, y: 325 },
  },
  {
    id: "6",
    type: "output",
    data: {
      label: (
        <>
          Um Card<strong> "output"</strong>
        </>
      ),
    },
    position: { x: 100, y: 480 },
  },
  {
    id: "7",
    type: "output",
    data: { label: "Card Saída" },
    position: { x: 400, y: 450 },
  },
];

export const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "edge",
  },
  { id: "e1-3", source: "1", target: "3" },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    label: "animada",
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    label: "ponta de seta",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "smoothstep",
    label: "passo suave",
  },
  {
    id: "e5-7",
    source: "5",
    target: "7",
    type: "step",
    style: { stroke: "#F53340" },
    label: "passo",
    animated: true,
    labelStyle: { fill: "#F53340", fontWeight: 700 },
  },
];
