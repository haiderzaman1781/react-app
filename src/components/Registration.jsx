import React, { useState } from "react";
import Swal from 'sweetalert2';
import AddressForm from "./Addressform";
import DirectorForm from "./DirectorForm";
import TaxForm from "./TaxForm";
import { useNavigate } from 'react-router-dom';


import "../index.css";
import { Navigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const [currentStep, setCurrentStep] = useState(1);
    const [showForm, setShowForm] = useState(false);


    // Extra form
    const [activity, setActivity] = useState("");
    const [customerType, setCustomerType] = useState("");
    const [constitution, setConstitution] = useState("");
    const [ultimateHolding, setUltimateHolding] = useState("");



    const [formData, setFormData] = useState({
        basics: {
            companyName: "",
            tradingNames: [""],
            taxOptions: {
                IRD: true,
                GST: true,
            },
            bankOption: "",
        },
        address: {
            email: "",
            careOf: "",
            streetAddress: "",
            city: "",
            postCode: "",
            serviceAddressSame: true,
            communicationAddressSame: true,
        },
        directors: [
            { firstName: '', lastName: '', email: '', address: '', city: '', postCode: '', country: 'NEW ZEALAND' },
        ],
        shares: {
            totalShares: 100,
            allocatedShares: "0",
            selectedDirector: "",
        },
        extra: {}, // Add fields as necessary
        tax: {
            contactPerson: "",
            contactPhone: "",
            businessAddress: {
                address: "",
                city: "",
                postCode: "",
            },
            postalAddress: {
                address: "",
                city: "",
                postCode: "",
            },
            taxAgent: "",
            fringeBenefits: "",
        }, // Add fields as necessary
    });

    const handleInputChange = (e, step, index = null) => {
        const { name, value } = e.target;

        if (step === "basics") {
            setFormData((prev) => ({
                ...prev,
                basics: { ...prev.basics, [name]: value },
            }));
        } else if (step === "address") {
            setFormData((prev) => ({
                ...prev,
                address: { ...prev.address, [name]: value },
            }));
        } else if (step === "director") {
            const updatedDirectors = [...formData.directors];
            updatedDirectors[index] = { ...updatedDirectors[index], [name]: value };
            setFormData((prev) => ({
                ...prev,
                directors: updatedDirectors,
            }));
        }
    };


    const handleAddTradingName = () => {
        setFormData((prev) => ({
            ...prev,
            basics: {
                ...prev.basics,
                tradingNames: [...prev.basics.tradingNames, ""],
            },
        }));
    };

    const handleTradingNameChange = (index, value) => {
        const updatedTradingNames = [...formData.basics.tradingNames];
        updatedTradingNames[index] = value;
        setFormData((prev) => ({
            ...prev,
            basics: { ...prev.basics, tradingNames: updatedTradingNames },
        }));
    };
    const handleRemoveTradingName = (index) => {
        const updatedTradingNames = tradingNames.filter((_, i) => i !== index);
        setTradingNames(updatedTradingNames);
    };

    const handleNextStep = () => {
        if (currentStep < 7) {
            setCurrentStep((prev) => prev + 1);
        }
    };


    const handleAllocateShares = () => {
        const selectedIndex = formData.shares.selectedDirector;
        const allocatedShares = parseInt(formData.shares.allocatedShares);

        if (selectedIndex !== "" && allocatedShares > 0 && allocatedShares <= formData.shares.totalShares) {
            const updatedDirectors = [...formData.directors];
            updatedDirectors[selectedIndex].allocatedShares = (updatedDirectors[selectedIndex].allocatedShares || 0) + allocatedShares;

            setFormData((prev) => ({
                ...prev,
                directors: updatedDirectors,
                shares: {
                    ...prev.shares,
                    totalShares: prev.shares.totalShares - allocatedShares,
                    allocatedShares: 0,
                    selectedDirector: "",
                },
            }));
        } else {
            alert("Please select a director and ensure the number of shares is valid.");
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost/php_project/project-3/react-app/src/components/api.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    html: 'Welcome <strong>' + formData.basics.companyName + '</strong>',
                    showConfirmButton: true,
                    background: 'linear-gradient(0deg, #ffffff 0%, #7bd1d1 50%, #008080 100%)',
                    confirmButtonText: 'Cool',
                }).then((result) => {
                    if (result.isConfirmed) {
                        setFormData({}); // Reset the form data
                        navigate('/hero'); // Navigate to the specified route
                    }
                });
            }
            else {
                const error = await response.json();
                alert(error.message || 'Submission failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit the form.');
        }
    };
    const navigateToStep = (step) => {
        setCurrentStep(step); // Update the current step
    };



    // Director database data

    return (
        <div className=" flex items-center justify-center">
            <div className="w-full max-w-5xl bg-transparent  pl-10 my-10 shadow-2xl rounded-xl p-4 lg:flex justify-center items-center"
                style={{
                    backgroundImage: "linear-gradient(90deg, #ffffff 0%, #7bd1d1 50%, #008080 100%);"

                }}
            >



                {/* Sidebar Tabs */}
                <div className="lg:w-1/4 w-full bg-[--Teal] min-h-fit flex justify-start items-center shadow-xl rounded-lg p-4 py-[100px] ">
                    <div className="lg:flex lg:flex-col space-y-9 space-x-0 text-center">
                        {Array.from({ length: 7 }, (_, index) => (
                            <button
                                key={index}
                                className={`font-semibold transform transition-transform duration-300 ease-in-out border-2 border-[--Teal] px-5
                                ${currentStep === index + 1 ? "text-neutral-800 lg:translate-x-10 rounded-xl" : "text-white lg:translate-x-0 translate-y-0"}
                                hover:scale-105`}
                                onClick={() => setCurrentStep(index + 1)}
                                disabled={index + 1 > currentStep}
                            >
                                {["BASICS", "ADDRESS", "DIRECTORS", "SHARE", "EXTRA", "TAX", "CONFIRM"][index]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Form Content */}
                <div className="lg:w-3/4 p-8 bg-transparent" >
                    {/* Step 1: Basics */}
                    {currentStep === 1 && (
                        <form className="space-y-6 px-5 py-10 rounded-xl shadow-2xl" onSubmit={(e) => { e.preventDefault(); handleNextStep(); }} id="step1">
                            <h2 className="text-xl font-semibold text-gray-800">Basic Company Details</h2>

                            {/* Company Name */}
                            <div className="shadow-2xl rounded-xl p-4">
                                <label className="block text-gray-700 font-medium">Company Name</label>
                                <div className="flex items-center space-x-2 ">
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.basics.companyName}
                                        onChange={(e) => handleInputChange(e, "basics")}
                                        className="w-full px-4  py-2 shadow-2xl  rounded-lg focus:outline-none ring-2 ring-white focus:ring-2 focus:ring-white bg-transparent"
                                        required
                                    />
                                    <span className="text-gray-100">Limited*</span>
                                </div>
                            </div>

                            {/* Trading Names */}
                            <div className="shadow-2xl p-4 rounded-xl">
                                <h3 className="text-lg font-medium">Trading Names</h3>
                                <button
                                    type="button"
                                    className="text-blue-800 text-[20px] font-medium flex items-center space-x-1"
                                    onClick={handleAddTradingName}
                                >
                                    + Add a trading name
                                </button>
                                {formData.basics.tradingNames.map((name, index) => (
                                    <div key={index} className="flex items-center space-x-2 mt-2">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => handleTradingNameChange(index, e.target.value)}
                                            className="w-full px-4  py-2 shadow-2xl  rounded-lg focus:outline-none ring-2 ring-white focus:ring-2 focus:ring-white bg-transparent"
                                        />
                                        <button
                                            type="button"
                                            className="text-[--Ivory] hover:text-[--Ivory] font-bold px-3 py-1"
                                            onClick={() => handleRemoveTradingName(index)}
                                        >
                                            ✖
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Tax Registration */}
                            <div className="shadow-2xl rounded-xl p-4">
                                <h3 className="text-lg font-medium">Tax Registration</h3>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input

                                            type="checkbox"
                                            checked={formData.basics.taxOptions.IRD}
                                        />
                                        <span>IRD Number</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={formData.basics.taxOptions.GST}
                                        />
                                        <span>GST Number</span>
                                    </label>
                                </div>
                            </div>

                            {/* Bank Account */}
                            <div className="shadow-2xl rounded-xl p-4">
                                <h3 className="text-lg font-medium">Need a New Business Bank Account?</h3>
                                <div className="flex flex-col space-y-2">
                                    {["ASB", "Westpac", "BNZ", "Kiwibank", "ANZ", "Not Required"].map((bank) => (
                                        <label key={bank} className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name="bank-option"
                                                value={bank}
                                                checked={formData.basics.bankOption === bank}
                                                onChange={(e) => setFormData((prev) => ({ ...prev, basics: { ...prev.basics, bankOption: e.target.value } }))}
                                            />
                                            <span>{bank}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="px-7 py-3 text-[20px] bg-transparent border-2 hover:border-[#4BEFE4] text-white hover:text-black rounded-lg hover:bg-[#4BEFE4]"
                                >
                                    Process
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Step 2: Address */}
                    {currentStep === 2 && (
                        <AddressForm
                            formData={formData}
                            setFormData={setFormData}
                            handleNextStep={handleNextStep}

                        />

                    )}

                    {/* Step 3: Directors */}
                    {currentStep === 3 && (
                        <DirectorForm
                            formData={formData}
                            setFormData={setFormData}
                            handleNextStep={handleNextStep}

                        />


                    )}

                    {/* Step 4: Shares */}
                    {currentStep === 4 && (
                        <div className="w-full max-w-4xl mt-8  rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Allocate Shares</h2>
                            <p className="text-lg text-gray-600 mb-4 ">
                                Remaining shares: {formData.shares.totalShares}
                            </p>
                            {currentStep === 4 && (
                                <div className="w-full max-w-4xl mt-8  shadow-2xl rounded-lg p-6">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Allocate Shares</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Remaining shares: {formData.shares.totalShares}
                                    </p>
                                    <form onSubmit={(e) => { e.preventDefault(); handleAllocateShares(); }}>
                                        <div className="mb-4">
                                            <label className="block font-medium text-gray-700 mb-1">
                                                Select Director:
                                            </label>
                                            <select
                                                name="selectedDirector"
                                                value={formData.shares.selectedDirector}
                                                onChange={(e) => setFormData((prev) => ({ ...prev, shares: { ...prev.shares, selectedDirector: e.target.value } }))}
                                                className="w-full px-4 py-2 shadow-2xl bg-transparent text-black ring-2 ring-[#008080] rounded-md"
                                                required
                                            >
                                                <option value="">Choose a director</option>
                                                {formData.directors.map((director, index) => (
                                                    <option key={index} value={index}>
                                                        {director.firstName} {director.lastName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block font-medium text-gray-700 mb-1">
                                                Number of Shares:
                                            </label>
                                            <input
                                                type="number"
                                                name="allocatedShares"
                                                value={formData.shares.allocatedShares}
                                                onChange={(e) => setFormData((prev) => ({ ...prev, shares: { ...prev.shares, allocatedShares: e.target.value } }))}
                                                className="bg-transparent ring-2 ring-[#008080] focus:ring-[#008080] w-full px-4 py-2 shadow-2xl rounded-md"
                                                min="1"
                                                required
                                            />
                                        </div>
                                        <div className="text-right">
                                            <button
                                                type="submit"
                                                className="px-6 py-2 bg-[--Teal] text-white rounded-md hover:bg-[#06a8a8]"
                                            >
                                                Allocate Shares
                                            </button>
                                        </div>
                                    </form>

                                    {/* Render Directors in the Share Form */}
                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Directors</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {formData.directors.map((director, index) => (
                                                <div
                                                    key={index}
                                                    className={`p-4 rounded-md ${formData.shares.selectedDirector === `${index}` ? "bg-[#4cf0e5] shadow-2xl" : "bg-gray-100"}`}
                                                    onClick={() => setFormData((prev) => ({ ...prev, shares: { ...prev.shares, selectedDirector: `${index}` } }))}
                                                >
                                                    <h2 className="text-lg font-bold">
                                                        {director.firstName} {director.lastName}
                                                    </h2>
                                                    <p className="text-gray-700">
                                                        <b>Email:</b> {director.email}
                                                    </p>
                                                    <p className="text-gray-700">
                                                        <b>Country:</b> {director.country}
                                                    </p>
                                                    <p className="text-gray-700">
                                                        <b>Allocated Shares:</b> {director.allocatedShares || 0} shares
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    <div className="text-right mt-4">
                                        <button
                                            type="button"
                                            className="px-6 py-2 ring-2 ring-white hover:ring-transparent  text-white hover:text-black rounded-lg hover:bg-[#4cf0e5]"
                                            onClick={() => {
                                                if (formData.shares.totalShares === 0) {
                                                    handleNextStep();
                                                } else {
                                                    alert("Shares are not fully allocated!");
                                                }
                                            }}
                                        >
                                            Process
                                        </button>
                                    </div>

                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 5: Extra */}
                    {currentStep === 5 && (
                        <form className="space-y-6 shadow-2xl px-5 py-10 rounded-xl" onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
                            <h2 className="text-xl font-semibold text-gray-800">Extra Information</h2>

                            {/* Activity Section */}
                            <div className="mb-6  shadow-2xl p-4">
                                <label className="block text-lg font-medium text-gray-700">
                                    What is the purpose of this new company?
                                </label>
                                <p className="text-gray-500 mb-2">Clearly specify the type(s) of activity this new company will be carrying out:</p>
                                <input
                                    required
                                    type="text"
                                    value={activity}
                                    onChange={(e) => setActivity(e.target.value)}
                                    placeholder="Enter company activity"
                                    className="w-full p-2 bg-transparent rounded-md shadow-sm ring-[#008080] focus:outline-none ring-2 focus:ring-[#008080]"
                                />
                            </div>

                            {/* Customer Section */}
                            <div className="mb-6 shadow-2xl p-4">
                                <label className="block text-lg font-medium text-gray-700">
                                    Who is the customer?
                                </label>
                                <p className="text-gray-500 mb-2">Specify who the customer is (the person completing this application).</p>
                                <div className="flex items-center mb-2">
                                    <input
                                        required
                                        type="radio"
                                        name="customerType"
                                        value="commercial"
                                        onChange={(e) => setCustomerType(e.target.value)}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-700">Someone else</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        name="customerType"
                                        value="individual"
                                        onChange={(e) => setCustomerType(e.target.value)}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-700">Myself</span>
                                </div>
                            </div>

                            {/* Constitution Section */}
                            <div className="mb-6 shadow-2xl p-4">
                                <label className="block text-lg font-medium text-gray-700">
                                    Would you like to adopt a constitution?
                                </label>
                                <div className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        name="constitution"
                                        value="yes"
                                        onChange={(e) => setConstitution(e.target.value)}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="constitution"
                                        value="no"
                                        onChange={(e) => setConstitution(e.target.value)}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-700">No</span>
                                </div>
                            </div>

                            {/* Ultimate Holding Section */}
                            <div className="mb-6 shadow-2xl p-4">
                                <label className="block text-lg font-medium text-gray-700">
                                    Does this company have an ultimate holding company?
                                </label>
                                <div className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        name="ultimateHolding"
                                        value="yes"
                                        onChange={(e) => setUltimateHolding(e.target.value)}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="ultimateHolding"
                                        value="no"
                                        onChange={(e) => setUltimateHolding(e.target.value)}
                                        className="mr-2"
                                    />
                                    < span className="text-gray-700">No</span>
                                </div>
                            </div>

                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="px-6 py-2 ring-2 ring-white hover:ring-transparent  text-white hover:text-black rounded-lg hover:bg-[#4cf0e5]"
                                >
                                    Process
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Step 6: Tax */}
                    {currentStep === 6 && (
                        <TaxForm
                            handleNextStep={handleNextStep}
                        />
                    )}

                    {/* Step 7: Confirm */}
                    {currentStep === 7 && (
                        <div className="lg:px-5 py-10 rounded-xl w-full" >
                            <h2 className="text-xl font-semibold text-gray-800">Confirm Your Information</h2>

                            {/* Display the form data */}


                            {/* Links to edit each step */}
                            <div className="space-y-4 space-x-0 gap-2 grid lg:grid-cols-2 grid-cols-1 justify-center items-center text-center mb-10">
                                <div className="container border border-black hover:border-transparent hover:shadow-2xl hover:bg-[#008080] hover:text-white rounded-2xl px-5 py-3 ">
                                    <ul className="list-disc list-inside">
                                        <h2 className="text-[20px] mb-10 ">Basic Form</h2>
                                        <li className="">
                                            <a
                                                href="#step1"
                                                className="hover:underline"
                                                onClick={() => navigateToStep(1)}
                                            >
                                                Edit You Basic Form Data
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="container border border-black hover:border-transparent hover:shadow-2xl hover:bg-[#008080] hover:text-white rounded-2xl px-5 py-3 ">
                                    <ul className="list-disc list-inside">
                                        <h2 className="text-[20px] mb-10 ">Address Form</h2>
                                        <li className="">
                                            <a
                                                href="#step2"
                                                className="hover:underline"
                                                onClick={() => navigateToStep(2)}
                                            >
                                                Edit You Address Form Data
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="container border border-black hover:border-transparent hover:shadow-2xl hover:bg-[#008080] hover:text-white rounded-2xl px-5 py-3 ">
                                    <ul className="list-disc list-inside">
                                        <h2 className="text-[20px] mb-10 ">Director's Form</h2>
                                        <li className="">
                                            <a
                                                href="#step3"
                                                className="hover:underline"
                                                onClick={() => navigateToStep(3)}
                                            >
                                                Edit You Director's Form Data
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="container border border-black hover:border-transparent hover:shadow-2xl hover:bg-[#008080] hover:text-white rounded-2xl px-5 py-3 ">
                                    <ul className="list-disc list-inside">
                                        <h2 className="text-[20px] mb-10 ">Share's Form</h2>
                                        <li className="">
                                            <a
                                                href="#step4"
                                                className="hover:underline"
                                                onClick={() => navigateToStep(4)}
                                            >
                                                Edit You Share's Form Data
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="container border border-black hover:border-transparent hover:shadow-2xl hover:bg-[#008080] hover:text-white rounded-2xl px-5 py-3 ">
                                    <ul className="list-disc list-inside">
                                        <h2 className="text-[20px] mb-10 ">Extra; info Form</h2>
                                        <li className="">
                                            <a
                                                href="#step5"
                                                className="hover:underline"
                                                onClick={() => navigateToStep(5)}
                                            >
                                                Edit You Extra; info Form Data
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="container border border-black hover:border-transparent hover:shadow-2xl hover:bg-[#008080] hover:text-white rounded-2xl px-5 py-3 ">
                                    <ul className="list-disc list-inside">
                                        <h2 className="text-[20px] mb-10 ">Tax Form</h2>
                                        <li className="">
                                            <a
                                                href="#step6"
                                                className="hover:underline"
                                                onClick={() => navigateToStep(6)}
                                            >
                                                Edit You Tax Form Data
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Submit button */}
                            <div className="text-right">
                                <button
                                    onClick={handleSubmit}
                                    className="px-6 py-2 bg-[--Teal] text-white hover:text-black rounded-lg hover:bg-[#4cf0e5]"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                    )}

                </div>
            </div>
        </div>
    );
};

export default Registration;