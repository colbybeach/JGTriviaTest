import React, { useState } from 'react';

export default function BasicTable({edit, data, editKeys}) {


  const [tableData, setTableData] = useState(data);
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

  var tableKeys = Object.keys(tableData[0] || {});

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

            {edit &&
              <th className="px-4 py-2">Edit</th>
            }
          </tr>
        </thead>

        <tbody>

          {tableData.map((item) => (
            <tr key={item.id}>

              {tableKeys.map((key, index) => (
                editKeys.includes(index) ?
                <td key={key} className="border px-4 py-2">
                  {editMode && editedData.id === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={editedData[key] || ''}
                      onChange={handleInputChange}
                      className="input input-bordered w-full"
                      />
                  ) : (
                    item[key]
                  )}
                </td>
                :
                <td className="border px-4 py-2">{item[key]}</td>
                
              ))}



              {edit &&
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
              }


            </tr>
          ))}


        </tbody>
      </table>
    </div>
  );
}
