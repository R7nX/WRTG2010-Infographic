import { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import type { CarbonData } from '../data/infographicData';
import React from 'react';

interface CarbonChartProps {
  data: CarbonData[];
}

export const CarbonChart: FC<CarbonChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <XAxis dataKey="model" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="carbon_ton" barSize={20} radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);
