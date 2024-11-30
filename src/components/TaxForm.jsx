import React, { useState, useEffect } from "react";

const TaxForm = ({ formData, setFormData, handleNextStep }) => {
    // Load data from localStorage when the component mounts
    useEffect(() => {
        const savedData = localStorage.getItem("taxRegistrationFormData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, [setFormData]);

    // Save data to localStorage whenever formData changes
    useEffect(() => {
        localStorage.setItem("taxRegistrationFormData", JSON.stringify(formData));
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            tax: {
                ...prev.tax,
                [name]: value,
            },
        }));
    };

    const handleAddressChange = (e, type, field) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            tax: {
                ...prev.tax,
                [type]: {
                    ...prev.tax[type],
                    [field]: value,
                },
            },
        }));
    };

    return (
        <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
                Information Required for Tax Registration
            </h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
                {/* Contact Person Section */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1" htmlFor="contactPerson">
                        Contact person:
                    </label>
                    <input
                        id="contactPerson"
                        name="contactPerson"
                        type="text"
                        placeholder="Enter your Name"
                        value={formData.tax.contactPerson}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 ring-2 ring-[#008080] rounded-lg bg-transparent"
                    />
                </div>

                {/* Contact Phone */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1" htmlFor="contactPhone">
                        Contact phone:
                    </label>
                    <input
                        id="contactPhone"
                        name="contactPhone"
                        type="tel"
                        placeholder="Enter contact-phone"
                        value={formData.tax.contactPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 ring-2 ring-[#008080] rounded-lg bg-transparent"
                    />
                </div>

                {/* Main Business Address */}
                <div>
                    <h3 className="font-medium text-gray-700">
                        What is the main place of business address for the company?
                    </h3>
                    <div className="mt-4 space-y-3">
                        <input
                            type="text"
                            placeholder="Address"
                            value={formData.tax.businessAddress.address}
                            onChange={(e) => handleAddressChange(e, "businessAddress", "address")}
                            className="w-full px-4 py-2 ring-2 ring-[#008080] rounded-lg bg-transparent"
                        />
                        <input
                            type="text"
                            placeholder="City / Town"
                            value={formData.tax.businessAddress.city}
                            onChange={(e) => handleAddressChange(e, "businessAddress", "city")}
                            className="w-full px-4 py-2 ring-2 ring-[#008080] rounded-lg bg-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Post Code"
                            value={formData.tax.businessAddress.postCode}
                            onChange={(e) => handleAddressChange(e, "businessAddress", "postCode")}
                            className="w-full px-4 py-2 ring-2 ring-[#008080] rounded-lg bg-transparent"
                        />
                    </div>
                </div>

                {/* Postal Address */}
                <div>
                    <h3 className="font-medium text-gray-700">
                        For tax correspondence, what is the postal address for the company?
                    </h3>
                    <div className="mt-4 space-y-3">
                        <input
                            type="text"
                            placeholder="Address"
                            value={formData.tax.postalAddress.address}
                            onChange={(e) => handleAddressChange(e, "postalAddress", "address")}
                            className="w-full px-4 py-2 ring-2 ring-[#008080] rounded-lg bg-transparent"
                        />
                        <input
                            type="text"
                            placeholder="City / Town"
                            value={formData.tax.postalAddress.city}
                            onChange={(e) => handleAddressChange(e, "postalAddress", "city")}
                            className="w-full px-4 py-2 ring-2 ring-[#008080] rounded-lg bg-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Post Code"
                            value={formData.tax.postalAddress.postCode}
                            onChange={(e) => handleAddressChange(e, "postalAddress", "postCode")}
                            className="w-full px-4 py-2 ring-2 ring-[#008080] rounded-lg bg-transparent"
                        />
                    </div>
                </div>

                {/* Tax Agent */}
                <div>
                    <h3 className="font-medium text-gray-700">Tax agent</h3>
                    <p>Do you have an existing registered tax agent that you’d like to link this new company to?</p>
                    <div className="mt-2 space-y-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="taxAgent"
                                value="no"
                                checked={formData.tax.taxAgent === "no"}
                                onChange={handleInputChange}
                                className="form-radio text-blue-600"
                            />
                            <span className="ml-2">No</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="taxAgent"
                                value="yes"
                                checked={formData.tax.taxAgent === "yes"}
                                onChange={handleInputChange}
                                className="form-radio text-blue-600"
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                    </div>
                </div>

                {/* Fringe Benefits */}
                <div>
                    <h3 className="font-medium text-gray-700">Fringe benefits</h3>
                    <p>Will fringe benefits be paid to employees?</p>
                    <div className="mt-2 space-y-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="fringeBenefits"
                                value="no"
                                checked={formData.tax.fringeBenefits === "no"}
                                onChange={handleInputChange}
                                className="form-radio text-blue-600"
                            />
                            <span className="ml-2">No</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="fringeBenefits"
                                value="yes"
                                checked={formData.tax.fringeBenefits === "yes"}
                                onChange={handleInputChange}
                                className="form-radio text-blue-600"
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="px-6 py-2 ring-2 ring-white hover:ring-transparent text-white hover:text-black rounded-lg hover:bg-[#4cf0e5]"
                    >
                        Process
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaxForm;
