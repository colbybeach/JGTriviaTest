import React, { useState } from 'react';

export default function EditableTable() {

  const stockTableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  const [tableData, setTableData] = useState(stockTableData);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState([]);

  const handleEdit = (id) => {
    const rowToEdit = tableData.find((item) => item.id === id);
    setEditedData({ ...rowToEdit });
    setEditMode(true);
  };

  const handleSave = () => {
    const updatedData = tableData.map((item) => {
      if (item.id === editedData.id) {
        return { ...editedData };
      }
      return item;
    });
    setTableData(updatedData);
    setEditMode(false);
    setEditedData([]);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedData([]);
  };

  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-full overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">
                {editMode && editedData.id === item.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedData.name}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                ) : (
                  item.name
                )}
              </td>
              <td className="border px-4 py-2">
                {editMode && editedData.id === item.id ? (
                  <input
                    type="text"
                    name="email"
                    value={editedData.email}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                ) : (
                  item.email
                )}
              </td>
              <td className="border px-4 py-2">
                {!editMode || editedData.id !== item.id ? (
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
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-link ml-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
