import React from 'react';
import { Sankey, Tooltip, ResponsiveContainer } from 'recharts';
import { detailedSankey } from '../data/sankeyData';

const COLORS = ['#1abc9c', '#3498db', '#9b59b6', '#e67e22', '#e74c3c'];

export default function SankeyDiagram() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <Sankey
        data={detailedSankey}
        nodePadding={20}
        link={{ stroke: '#888', strokeOpacity: 0.5 }}
        node={{ stroke: '#333', strokeWidth: 1, width: 20 }}
      >
        <Tooltip
          content={({ payload }) => {
            // If there's no payload or it's empty, render nothing
            if (!payload || payload.length === 0) {
              return null;
            }
            const item = payload[0];
            if (item.value == null) {
              return (
                <div style={{ background: '#fff', padding: '0.5rem', borderRadius: '4px' }}>
                  <strong>{item.name}</strong><br />
                  Value: N/A
                </div>
              );
            }
            const formatted = (item.value as number).toLocaleString();
            return (
              <div style={{ background: '#fff', padding: '0.5rem', borderRadius: '4px' }}>
                <strong>{item.name}</strong><br />
                Value: {item.value.toLocaleString()}
                Value: {formatted}
              </div>
            );
          }}
        />
      </Sankey>
    </ResponsiveContainer>
  );
}