// — carbon chart data —  
export interface CarbonData {
  color: string;
  model: string;
  co2e: number;
}

export const carbonData: CarbonData[] = [
  { color: '#1f77b4', model: 'BERT‑Base', co2e: 0.05 },
  { color: '#ff7f0e', model: 'BERT‑Large', co2e: 0.6 },
  { color: '#2ca02c', model: 'GPT‑2 (small)', co2e: 0.1 },
  { color: '#d62728', model: 'GPT‑3 (175B)', co2e: 0.55 },
  { color: '#9467bd', model: 'T5‑Base', co2e: 0.2 },
  { color: '#8c564b', model: 'T5‑11B', co2e: 6.3 },
  { color: '#e377c2', model: 'PaLM (540B)', co2e: 1.0 },
  { color: '#7f7f7f', model: 'GPT‑4', co2e: 2.0 },
];

// — sankey diagram types —  
export interface SankeyNode {
  name: string;
}

export interface SankeyLink {
  source: number;
  target: number;
  value: number;
}

export interface SankeyData {
  nodes: SankeyNode[];
  links: SankeyLink[];
}

// (optional) example sankey data you used in App.tsx
export const exampleSankey: SankeyData = {
  nodes: [
    { name: 'Mining' },
    { name: 'Manufacturing' },
    { name: 'Shipping' },
  ],
  links: [
    { source: 0, target: 1, value: 100 },
    { source: 1, target: 2, value: 100 },
  ],
};
