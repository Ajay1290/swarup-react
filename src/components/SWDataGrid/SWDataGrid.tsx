import React, { useState } from 'react';
import './SWDataGrid.css';
import SWButton from '../SWButton/SWButton';

export interface SWDataGridProps {
  columns: string[];
  data: Record<string, any>[];
  configuration?: {
    showPagination?: boolean;
    showFiltering?: boolean;
    enableSorting?: boolean;
    enableSelection?: boolean;
    enableEditing?: boolean;
  };
  pageSize?: number;
}

const SearchBar: React.FC<{ showFiltering: boolean; setSearchTerm: React.Dispatch<React.SetStateAction<string>> }> = ({
  showFiltering,
  setSearchTerm,
}) => {
  return (
    <>
      {showFiltering && (
        <div className="sw-data-grid-toolbar">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
    </>
  );
};

const Pagination: React.FC<{ showPagination: boolean; currentPage: number; totalPages: number; handlePageChange: (page: number) => void }> = ({
  showPagination,
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const pageNumbersToShow: number[] = [];
  const maxPageNumbersToShow = 5; // You can adjust this as needed
  const middlePageNumber = Math.ceil(maxPageNumbersToShow / 2);
  const startPageNumber =
    currentPage > middlePageNumber ? currentPage - middlePageNumber + 1 : 1;
  const endPageNumber =
    startPageNumber + maxPageNumbersToShow - 1 > totalPages
      ? totalPages
      : startPageNumber + maxPageNumbersToShow - 1;

  for (let i = startPageNumber; i <= endPageNumber; i++) {
    pageNumbersToShow.push(i);
  }

  return (
    <>
      {showPagination && (
        <div className="sw-data-grid-pagination">
          
            {/* Previous button */}
            <SWButton
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </SWButton>
            {/* Page numbers */}
            <div className="page-numbers">
              {pageNumbersToShow.map((pageNumber) => (
                <SWButton
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={pageNumber === currentPage ? 'active' : ''}
                >
                  {pageNumber}
                </SWButton>
              ))}
            </div>
            {/* Next SWButton */}
            <SWButton
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </SWButton>
          
        </div>
      )}
    </>
  );
};



const SWDataGrid: React.FC<SWDataGridProps> = ({
  columns,
  data,
  configuration = {},
  pageSize = 10,
}) => {
  const {
    showPagination = true,
    showFiltering = true,
    enableSorting = true,
    enableSelection = true,
    enableEditing = true,
  } = configuration;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
  const [editingRow, setEditingRow] = useState<number | null>(null);

  const handleColumnClick = (column: string) => {
    if (enableSorting) {
      if (sortedColumn === column) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      } else {
        setSortedColumn(column);
        setSortOrder('asc');
      }
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowSelect = (rowId: number) => {
    setSelectedRows((prevSelected) => ({
      ...prevSelected,
      [rowId]: !prevSelected[rowId],
    }));
  };

  const handleEditRow = (rowId: number) => {
    setEditingRow(rowId);
  };

  const handleSaveRow = (rowId: number) => {
    setEditingRow(null);
    // Save the edited data
  };

  const handleCancelEdit = () => {
    setEditingRow(null);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Sorting logic
  let sortedData = [...data];
  if (enableSorting && sortedColumn !== null) {
    sortedData.sort((a, b) => {
      const aValue = a[sortedColumn];
      const bValue = b[sortedColumn];
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Filtering logic
  let filteredData = sortedData;
  if (showFiltering && searchTerm.trim() !== '') {
    filteredData = sortedData.filter((row) =>
      columns.some((column) =>
        String(row[column]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const visibleData = filteredData.slice(startIndex, endIndex);

  const columnsWithIndex = ['#', ...columns];
  const columnsWithSelection = [' ', ...columnsWithIndex];

  return (
    <div className="sw-data-grid-container">
      <SearchBar showFiltering={showFiltering} setSearchTerm={setSearchTerm} />
      <table className="sw-data-grid">
        <thead>
          <tr>
            {columnsWithSelection.map((column, columnIndex) => (
              <th
                key={column}
                onClick={() => handleColumnClick(column)}
                className={
                  enableSorting && column === sortedColumn
                    ? `sorted-${sortOrder}`
                    : ''
                }
              >
                {column}
                {enableSorting && column === sortedColumn && (
                  <span className="sort-icon">
                    {sortOrder === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
            ))}
            {enableEditing && <th>Edit</th>}
          </tr>
        </thead>
        <tbody>
          {visibleData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnsWithSelection.map((column, columnIndex) => (
                <td key={columnIndex} style={{ width: column === ' ' ? 10 : 'auto' }}>
                  {column === '#' ? rowIndex + 1 : // Render index
                  column === ' ' ? ( // Render selection checkbox
                    <input
                      type="checkbox"
                      checked={selectedRows[rowIndex]}
                      onChange={() => handleRowSelect(rowIndex)}
                    />
                  ) : (
                    row[column] // Render data cells
                  )}
                </td>
              ))}
             {enableEditing && (
                <td>
                  {editingRow === rowIndex ? (
                    <div>
                      <SWButton onClick={() => handleSaveRow(rowIndex)}>Save</SWButton>
                      <SWButton onClick={handleCancelEdit}>Cancel</SWButton>
                    </div>
                  ) : (
                    <SWButton onClick={() => handleEditRow(rowIndex)}>Edit</SWButton>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        showPagination={showPagination}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};




export default SWDataGrid;
