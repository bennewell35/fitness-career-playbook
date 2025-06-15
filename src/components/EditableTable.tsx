
import { FC, useState } from "react";

interface EditableTableProps {
  defaultData: string[][];
  headers: string[];
}

const EditableTable: FC<EditableTableProps> = ({ defaultData, headers }) => {
  const [data, setData] = useState(defaultData);

  const handleChange = (row: number, col: number, value: string) => {
    setData((d) =>
      d.map((r, i) => (i === row ? r.map((cell, j) => (j === col ? value : cell)) : r))
    );
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm max-w-full">
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="py-2 px-3 bg-gradient-to-r from-pink-100 via-blue-100 to-green-100 text-slate-900 font-semibold text-center"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-t border-slate-100">
              {row.map((cell, colIdx) => (
                <td key={colIdx} className="p-1 text-center">
                  <input
                    className="px-1 py-1 rounded bg-slate-100 border border-slate-200 w-24 text-center text-slate-900 font-medium"
                    value={cell}
                    onChange={(e) => handleChange(rowIdx, colIdx, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
