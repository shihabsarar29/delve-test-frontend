import React from "react";

interface Column {
  header: string;
  accessor: string | ((row: any) => React.ReactNode);
}

interface TableProps {
  columns: Column[];
  data: any[];
  loadingText?: string;
  error?: string | null;
}

const Table: React.FC<TableProps> = ({ columns, data, loadingText = "Loading...", error }) => {
  return (
    <div>
      {error ? (
        <p className="text-red-500 text-center mb-4">{error}</p>
      ) : data.length > 0 ? (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {columns.map((column, idx) => (
                <th key={idx} className="py-2 px-4 border-b">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 border-b">
                    {typeof column.accessor === "function"
                      ? column.accessor(row)
                      : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">{loadingText}</p>
      )}
    </div>
  );
};

export default Table;
