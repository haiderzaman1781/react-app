import React from "react";

const AddressForm = ({ formData, setFormData, handleNextStep }) => {

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            address: { ...prev.address, [name]: value },
        }));
    };


    return (
            <>
            <form className="space-y-6 bg-[] shadow-2xl px-5 py-10 rounded-xl" onSubmit={(e) => {
                e.preventDefault();
                handleNextStep();
            }} >
                    <h2 className="text-xl font-semibold text-gray-800">Enter Address Details</h2>

                    <label className="block text-gray-700 font-medium">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.address.email}
                        onChange={(e) => handleAddressChange(e, "address")}
                        className="bg-transparent ring-2 ring-[#008080] shadow-2xl  w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <h3 className="text-lg font-medium">Registered Office Address</h3>
                    <label className="block text-gray-700 font-medium">Care of</label>
                    <input
                        type="text"
                        name="careOf"
                        value={formData.address.careOf}
                        onChange={(e) => handleAddressChange(e, "address")}
                        className="bg-transparent ring-2 ring-[#008080] shadow-2xl  w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="block text-gray-700 font-medium">Street Address</label>
                    <input
                        type="text"
                        name="streetAddress"
                        value={formData.address.streetAddress}
                        onChange={(e) => handleAddressChange(e, "address")}
                        className="bg-transparent ring-2 ring-[#008080] shadow-2xl  w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <label className="block text-gray-700 font-medium">City/Town</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.address.city}
                        onChange={(e) => handleAddressChange(e, "address")}
                        className="bg-transparent ring-2 ring-[#008080] shadow-2xl  w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <label className="block text-gray-700 font-medium">Postcode</label>
                    <input
                        type="text"
                        name="postCode"
                        value={formData.address.postCode}
                        onChange={(e) => handleAddressChange(e, "address")}
                        className="bg-transparent ring-2 ring-[#008080] shadow-2xl  w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <h3 className="text-lg font-medium">Other Address Options</h3>
                    <label className="block text-gray-700 font-medium">Is the service address the same as the registered office?</label>
                    <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="serviceAddressSame"
                                checked={formData.address.serviceAddressSame}
                                onChange={() => setFormData((prev) => ({ ...prev, address: { ...prev.address, serviceAddressSame: true } }))}
                            />
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="serviceAddressSame"
                                checked={!formData.address.serviceAddressSame}
                                onChange={() => setFormData((prev) => ({ ...prev, address: { ...prev.address, serviceAddressSame: false } }))}
                            />
                            <span>No</span>
                        </label>
                    </div>

                    <label className="block text-gray-700 font-medium">Is the communication address the same as the registered office?</label>
                    <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="communicationAddressSame"
                                checked={formData.address.communicationAddressSame}
                                onChange={() => setFormData((prev) => ({ ...prev, address: { ...prev.address, communicationAddressSame: true } }))}
                            />
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="communicationAddressSame"
                                checked={!formData.address.communicationAddressSame}
                                onChange={() => setFormData((prev) => ({ ...prev, address: { ...prev.address, communicationAddressSame: false } }))}
                            />
                            <span>No</span>
                        </label>
                    </div>

                    <div className="text-right">
                        <button
                            type=" submit"
                        className="px-6 py-2 ring-2 ring-white hover:ring-transparent  text-white hover:text-black rounded-lg hover:bg-[#4cf0e5]"
                        >
                            Process
                        </button>
                    </div>
                </form>

            </>
        )
    }

    export default AddressForm;