// — carbon chart data —  
export interface CarbonData {
    model: string;
    carbon_ton: number;
  }
  
  export const carbonData: CarbonData[] = [
    { model: 'Small NLP', carbon_ton: 0.5 },
    { model: 'GPT-sized', carbon_ton: 650 },
    { model: 'PaLM', carbon_ton: 1200 },
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
  