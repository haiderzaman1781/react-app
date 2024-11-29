import React, { useState } from "react";

const DirectorForm = ({ formData, setFormData, handleNextStep }) => {
    const [showForm, setShowForm] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);  // State to track which director is being edited

    const handleAddDirector = () => {
        setShowForm(true);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedDirectors = [...formData.directors];
        updatedDirectors[index] = { ...updatedDirectors[index], [name]: value };
        setFormData((prev) => ({
            ...prev,
            directors: updatedDirectors,
        }));
    };

    const handleAddToCard = (e) => {
        e.preventDefault();
        const lastDirector = formData.directors[formData.directors.length - 1] || {};
        
        setFormData((prevData) => ({
            ...prevData,
            directors: [
                ...prevData.directors,
                { firstName: "", lastName: "", email: "", address: "", city: "", postCode: "", country: "NEW ZEALAND" },
            ],
        }));
    }
    const handleDeleteDirector = (index) => {
        setFormData((prev) => ({
            ...prev,
            directors: prev.directors.filter((_, i) => i !== index),
        }));
    };

    const handleEditDirector = (index) => {
        // Set the form data to the director being edited
        setEditingIndex(index);
        setShowForm(true);
    };

    const handleUpdateDirector = (e) => {
        e.preventDefault();
        const updatedDirectors = [...formData.directors];
        updatedDirectors[editingIndex] = formData.directors[editingIndex];
        setFormData((prevData) => ({
            ...prevData,
            directors: updatedDirectors,
        }));
        setEditingIndex(null);
        alert("Director updated successfully!");
        setShowForm(false);  // Hide the form after update
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[] shadow-2xl px-5 py-10 rounded-xl">
            {!showForm && (
                <button
                    className="px-6 py-3 bg-[--Teal] shadow-2xl text-white font-medium rounded-md hover:bg-[#06a8a8]"
                    onClick={() => {
                        handleAddDirector();
                        setFormData((prev) => ({
                            ...prev,
                            directors: [
                                ...prev.directors,
                                { firstName: "", lastName: "", email: "", address: "", city: "", postCode: "", country: "NEW ZEALAND" },
                            ],
                        }));
                    }}
                >
                    Add a New Director
                </button>
            )}

            {showForm && (
                <form className="w-full max-w-4xl mt-4" onSubmit={editingIndex !== null ? handleUpdateDirector : handleAddToCard}>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        {editingIndex !== null ? "Edit Director" : "Provide the full name of the new director"}
                    </h1>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">First name:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.directors[editingIndex]?.firstName || formData.directors[formData.directors.length - 1]?.firstName || ""}
                                onChange={(e) => handleInputChange(e, editingIndex !== null ? editingIndex : formData.directors.length - 1)}
                                className="bg-transparent ring-2 ring-[--Teal] w-full px-4 py-2 shadow-2xl  rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Last name(s):</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.directors[editingIndex]?.lastName || formData.directors[formData.directors.length - 1]?.lastName || ""}
                                onChange={(e) => handleInputChange(e, editingIndex !== null ? editingIndex : formData.directors.length - 1)}
                                className="bg-transparent ring-2 ring-[--Teal] w-full px-4 py-2 shadow-2xl  rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.directors[editingIndex]?.email || formData.directors[formData.directors.length - 1]?.email || ""}
                            onChange={(e) => handleInputChange(e, editingIndex !== null ? editingIndex : formData.directors.length - 1)}
                            className="bg-transparent ring-2 ring-[--Teal] w-full px-4 py-2 shadow-2xl  rounded-md"
                            required
                        />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">What is the residential address for this director?</h2>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Street address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.directors[editingIndex]?.address || formData.directors[formData.directors.length - 1]?.address || ""}
                            onChange={(e) => handleInputChange(e, editingIndex !== null ? editingIndex : formData.directors.length - 1)}
                            className="bg-transparent ring-2 ring-[--Teal] w-full px-4 py-2 shadow-2xl  rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">City / Town:</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.directors[editingIndex]?.city || formData.directors[formData.directors.length - 1]?.city || ""}
                            onChange={(e) => handleInputChange(e, editingIndex !== null ? editingIndex : formData.directors.length - 1)}
                            className="bg-transparent ring-2 ring-[--Teal] w-full px-4 py-2 shadow-2xl  rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Post code:</label>
                        <input
                            type="text"
                            name="postCode"
                            value={formData.directors[editingIndex]?.postCode || formData.directors[formData.directors.length - 1]?.postCode || ""}
                            onChange={(e) => handleInputChange(e, editingIndex !== null ? editingIndex : formData.directors.length - 1)}
                            className="bg-transparent ring-2 ring-[--Teal] w-full px-4 py-2 shadow-2xl  rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Country:</label>
                        <select
                            name="country"
                            value={formData.directors[editingIndex]?.country || formData.directors[formData.directors.length - 1]?.country || "NEW ZEALAND"}
                            onChange={(e) => handleInputChange(e, editingIndex !== null ? editingIndex : formData.directors.length - 1)}
                            className="bg-transparent ring-2 ring-[--Teal] shadow-2xl w-full px-4 py-2  rounded-md"
                            required
                        >
                            <option value="NEW ZEALAND">NEW ZEALAND</option>
                        </select>
                    </div>
                   
                </form>
            )}

            {showForm && (
            <div className="w-full max-w-4xl mt-8">
                {formData.directors.map((director, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 relative">
                        <button
                            className="absolute bottom-2 right-2 bg-[#008080] text-white hover:text-black px-2 py-1 rounded-md hover:bg-[#4cf0e5]"
                            onClick={() => handleDeleteDirector(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="absolute bottom-2 right-20 bg-[#4cf0e5] text-black hover:text-white px-2 py-1 rounded-md hover:bg-[#008080]"
                            onClick={() => handleEditDirector(index)}
                        >
                            Edit
                        </button>
                        <h2 className="text-xl font-bold">
                            {director.firstName} {director.lastName}
                        </h2>
                        <p className="text-gray-700"><b>Email:</b> {director.email}</p>
                        <p className="text-gray-700"><b>Address:</b> {director.address}</p>
                        <p className="text-gray-700"><b>City:</b> {director.city}</p>
                        <p className="text-gray-700"><b>Post Code:</b> {director.postCode}</p>
                        <p className="text-gray-700"><b>Country:</b> {director.country}</p>
                    </div>
                ))}
                    <div className="text-right">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleNextStep();
                            }}
                            className="px-6 py-2 ring-2 ring-white hover:ring-transparent  text-white hover:text-black rounded-lg hover:bg-[#4cf0e5]"
                        >
                            Process
                        </button>
                    </div>
            </div>
                )}
        </div>
    );
};

export default DirectorForm;
