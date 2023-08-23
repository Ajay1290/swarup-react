import React, { ReactNode } from "react";

interface SWCellProps {
    column: string;
    rowIndex: number;
    rowData: Record<string, any>;
    children?: ReactNode
  }
  
export const SWCell: React.FC<SWCellProps> = ({ column, rowData, rowIndex }) => {
    const cellValue = column === '#' ? rowIndex + 1 : rowData[column];
  
    return <td style={{ width: column === ' ' ? 10 : 'auto' }}>{cellValue}</td>;
  };
  