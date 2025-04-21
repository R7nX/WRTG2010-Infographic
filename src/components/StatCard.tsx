import { Card } from "./ui/card";
import React, { FC } from 'react';
import { LucideIcon } from 'lucide-react';


interface StatCardProps {
    icon: LucideIcon;
    value: string;
    label: string;
    onClick?: () => void;
    className?: string;          
}

const StatCard: FC<StatCardProps> = ({
    icon: Icon,
    value,
    label,
    className = '',
    onClick,
  }) => (
    <Card
      className={`p-4 flex flex-col items-center justify-center space-y-3 shadow-lg rounded-2xl ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
       <Icon className="h-8 w-8 text-indigo-600" />
       <div>
         <p className="text-2xl font-bold">{value}</p>
         <p className="text-sm text-gray-600">{label}</p>
       </div>
     </Card>
   );

export default StatCard;
