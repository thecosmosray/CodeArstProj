import React, { useEffect,  type ChangeEvent } from "react";
import Nav from "../components/nav";
import { useAuth } from "../context/AuthContext"; 
import type { Services } from "../context/AuthReducer";
import { useNavigate } from "react-router-dom";

const Admincrud: React.FC = () => {
  const { state, dispatch } = useAuth();
  
   const navigate=useNavigate();

  const { services,servicesName, description, editingingindex } = state;

  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  const handleAddOrUpdate = () => {
    dispatch({ type: "ADD_OR_UPDATE_SERVICE" });
  };

  const handleEdit = (index: number) => {
    dispatch({ type: "EDIT_SERVICE", payload: index });
  };

  const handleDelete = (index: number) => {
    dispatch({ type: "DELETE_SERVICE", payload: index });
  };

  const handleChange =
    (type: "SET_SERVICE_NAME" | "SET_DESCRIPTION") =>
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type, payload: e.target.value });
    };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
     navigate("/login");
  };
  return (  
    <>
      <Nav />
       <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-1 rounded text-sm"
      >
        Logout
      </button>
      <div className="w-[94%] mx-auto my-8 p-6 bg-veryPaleRed rounded-full">
        <h2 className="border-pink-600 font-sans font-bold">Manage IT Services</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-6 mt-2">
          <input
            className="p-2 border border-gray-300 rounded-md w-full"
            type="text"
            placeholder="Name of Service"
            value={servicesName}
            onChange={handleChange("SET_SERVICE_NAME")}
          />
          <input
            className="p-2 border border-gray-300 rounded-md w-full"
            type="text"
            placeholder="Description of Service"
            value={description}
            onChange={handleChange("SET_DESCRIPTION")}
          />
          <button
            className="bg-brightRed text-white px-6 py-2 rounded-full hover:bg-brightRedLight"
            onClick={handleAddOrUpdate}
          >
            {editingingindex !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* Services List */}
        <div>
          {services.length === 0 ? (
            <p>No services yet</p>
          ) : (
            <ul>
              {services.map((service:Services, index:number) => (
                <li
                  key={service.id}
                  className="bg-white p-4 rounded-md shadow flex flex-col md:flex-row md:justify-between md:items-center gap-2 border border-brightRedSupLight"
                >
                  <div>
                    <p className="font-extrabold mb-2 text-darkBlue">{service.name}</p>
                    <p className="mt-1 font-medium text-gray-950">{service.description}</p>
                  </div>
                  <div className="flex justify-between gap-2">
                    <button
                      className="bg-brightRed text-white px-6 py-2 rounded-md hover:bg-brightRedLight"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-brightRed text-white px-6 py-2 rounded-md hover:bg-brightRedLight"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Admincrud;
