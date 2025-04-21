import { FC } from 'react';
import { Sankey, Tooltip, ResponsiveContainer } from 'recharts';
import type { SankeyData } from '../data/infographicData';  
import React from 'react';

interface SankeyDiagramProps {
  data: SankeyData;
}

const SankeyDiagram: FC<SankeyDiagramProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <Sankey
      data={data}
      nodePadding={50}
      link={{ stroke: '#8884d8', strokeWidth: 2 }}
      node={{ stroke: '#555', strokeWidth: 1 }}
    >
      <Tooltip />
    </Sankey>
  </ResponsiveContainer>
);

export default SankeyDiagram;
