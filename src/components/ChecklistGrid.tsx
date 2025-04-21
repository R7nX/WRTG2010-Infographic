import React, { FC, useState } from 'react';
import { Card } from './ui/card';

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
}

interface ChecklistGridProps {
  items: ChecklistItem[];
}

const ChecklistGrid: FC<ChecklistGridProps> = ({ items }) => {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <Card
          key={item.id}
          onClick={() => toggle(item.id)}
          className={`p-4 cursor-pointer rounded-2xl shadow-lg transition-colors ${
            completed[item.id] ? 'bg-green-50' : 'bg-white'
          }`}
        >
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          <div className="mt-3">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={!!completed[item.id]}
                onChange={() => toggle(item.id)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="ml-2 text-sm">
                {completed[item.id] ? 'Completed' : 'Mark as complete'}
              </span>
            </label>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ChecklistGrid;
