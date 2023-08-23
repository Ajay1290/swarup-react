import React from "react";
import { SWCell } from "./SWCell";
import SWButton from "../SWButton/SWButton";

interface SWRowProps {
    rowIndex: number;
    rowData: Record<string, any>;
    columns: string[];
    enableSelection: boolean;
    enableEditing: boolean;
    selectedRows: Record<string, boolean>;
    editingRow: number | null;
    onRowSelect: (rowId: number) => void;
    onEditRow: (rowId: number) => void;
    onSaveRow: (rowId: number) => void;
    onCancelEdit: () => void;
  }
  
export const SWRow: React.FC<SWRowProps> = ({
    rowIndex,
    rowData,
    columns,
    enableSelection,
    enableEditing,
    selectedRows,
    editingRow,
    onRowSelect,
    onEditRow,
    onSaveRow,
    onCancelEdit,
  }) => {
    return (
      <tr key={rowIndex}>
        {/* Render cells for each column */}
        {columns.map((column, columnIndex) => (
          <SWCell
            key={columnIndex}
            column={column}
            rowIndex={rowIndex}
            rowData={rowData}
          />
        ))}
  
        {/* Render selection cell */}
        {enableSelection && (
          <SWCell key="selection" column=" " rowData={{}} rowIndex={rowIndex}>
            <input
              type="checkbox"
              checked={selectedRows[rowIndex]}
              onChange={() => onRowSelect(rowIndex)}
            />
          </SWCell>
        )}
  
        {/* Render editing cell */}
        {enableEditing && (
          <SWCell key="edit" rowData={{}} rowIndex={3} column=" ">
            {editingRow === rowIndex ? (
              <div>
                <SWButton onClick={() => onSaveRow(rowIndex)}>Save</SWButton>
                <SWButton onClick={onCancelEdit}>Cancel</SWButton>
              </div>
            ) : (
              <SWButton onClick={() => onEditRow(rowIndex)}>Edit</SWButton>
            )}
          </SWCell>
        )}
      </tr>
    );
  };
  