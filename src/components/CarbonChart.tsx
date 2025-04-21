import React, { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import type { CarbonData } from '../data/infographicData';

interface CarbonChartProps {
  data: CarbonData[];
}

export const CarbonChart: FC<CarbonChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={350}>
    <BarChart
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="model" tick={{ fontSize: 12 }} interval={0} angle={-30} textAnchor="end" height={60} />
      <YAxis
        scale="log"                            
        domain={[0.01, 'dataMax']}            
        allowDataOverflow                     
        tickFormatter={v => v.toString()}     
        label={{
          value: 'CO₂e (t) (log scale)',
          angle: -90,
          position: 'insideLeft',
          offset: 10
        }}
      />
      <Tooltip formatter={(val: number) => `${val.toLocaleString()} t CO₂`} />
      <Bar dataKey="co2e" barSize={30} radius={[4, 4, 0, 0]}>
        {data.map((entry, idx) => (
          <Cell key={idx} fill={entry.color ?? '#6366f1'} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);
