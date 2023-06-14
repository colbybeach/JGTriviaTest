import React, { useState } from 'react';

export default function BasicTable({ edit, data, editKeys, rowsPerPage }) {
  const [tableData, setTableData] = useState(data);
  const [editedData, setEditedData] = useState({});

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const handleEdit = (id) => {
    const rowToEdit = tableData.find((item) => item.id === id);
    setEditedData({ ...rowToEdit });
    setTableData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, editing: true } : item))
    );
  };

  const handleSave = (id) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, editing: false } : item
      )
    );
    setEditedData({});
  };

  const handleCancel = (id) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, editing: false } : item
      )
    );
    setEditedData({});
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const tableKeys = Object.keys(data[0] || {});

  const renderTableRows = currentRows.map((item) => (
    <tr key={item.id}>
      {tableKeys.map((key, index) => (
        editKeys.includes(index) ? (
          <td key={key} className="border px-4 py-2">
            {item.editing ? (
              <input
                type="text"
                name={key}
                value={editedData[key] || ''}
                onChange={(e) => handleInputChange(e, item.id)}
                className="input input-bordered w-full"
              />
            ) : (
              item[key]
            )}
          </td>
        ) : (
          <td className="border px-4 py-2" key={key}>
            {item[key]}
          </td>
        ))
      )}

      {edit && (
        <td className="border px-4 py-2">
          {!item.editing ? (
            <button
              className="btn btn-link"
              onClick={() => handleEdit(item.id)}
            >
              Edit
            </button>
          ) : (
            <>
              <button
                className="btn btn-link"
                onClick={() => handleSave(item.id)}
              >
                Save
              </button>
              <button
                className="btn btn-link ml-2"
                onClick={() => handleCancel(item.id)}
              >
                Cancel
              </button>
            </>
          )}
        </td>
      )}
    </tr>
  ));

  const renderPagination = (
    <div className='mt-5 space-x-5'>

      {Array.from({ length: totalPages }, (_, i) => (
        <button 
          key={i + 1}
          className={`btn ${i + 1 === currentPage ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setCurrentPage(i + 1)}

        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="max-w-full overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {tableKeys.map((header) => (
              <th key={header} className="px-4 py-2 capitalize">
                {header}
              </th>
            ))}

            {edit && <th className="px-4 py-2">Edit</th>}
          </tr>
        </thead>

        <tbody>{renderTableRows}</tbody>
      </table>

      {totalPages > 1 && renderPagination}
    </div>
  );
}
