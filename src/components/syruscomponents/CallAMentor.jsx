import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CallAMentor = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    teamName: "",
    tableNumber: "",
    queryCategory: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const queryCategories = [
    "Technical Issue",
    "Idea Validation",
    "Project Guidance",
    "Resource Access",
    "Presentation Help",
    "Others",
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const closeModal = () => {
    setDropdownOpen(false);
    setIsSubmitting(false);
    setIsSubmitted(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.teamName.trim()) {
      newErrors.teamName = "Team Name is required";
    }
    if (!formData.tableNumber.trim()) {
      newErrors.tableNumber = "Table Number is required";
    }
    if (!formData.queryCategory) {
      newErrors.queryCategory = "Query Category is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log(formData);
      setFormData({
        teamName: "",
        tableNumber: "",
        queryCategory: "",
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[10000] p-4"
      onClick={closeModal}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-gray-900 text-white p-6 rounded-2xl w-full max-w-md relative shadow-[0_0_15px_rgba(239,68,68,0.6)]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          className="absolute top-3 right-3 text-gray-400 text-3xl hover:text-white focus:outline-none before:content-[''] before:absolute before:-inset-1 before:bg-transparent"
          onClick={closeModal}
        >
          &times;
        </button>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="text-xl md:text-2xl font-bold text-red-500">
              Request Submitted
            </h2>
            <p className="text-gray-300 mt-2">
              A mentor has been notified and will arrive at your table shortly
              to assist you.
            </p>
            <button
              className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold"
              onClick={closeModal}
            >
              Ok
            </button>
          </motion.div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-center text-red-500 md:text-2xl">
              Call A Mentor
            </h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium">Team Name</label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 md:p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.teamName && (
                  <p className="text-red-500 text-xs mt-1">{errors.teamName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Table Number
                </label>
                <input
                  type="text"
                  name="tableNumber"
                  value={formData.tableNumber}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 md:p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.tableNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.tableNumber}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Query Category
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full mt-1 p-2 md:p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex justify-between items-center"
                  >
                    {formData.queryCategory || "Select a category"}
                    <span className="text-gray-400">▼</span>
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute w-full bg-gray-800 border border-gray-600 rounded-lg mt-1 z-10 max-h-40 overflow-y-auto modal-scrollbar">
                      {queryCategories.map((category) => (
                        <li
                          key={category}
                          className="p-2 hover:bg-gray-700 cursor-pointer text-sm md:text-base"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              queryCategory: category,
                            });
                            setDropdownOpen(false);
                            setErrors({ ...errors, queryCategory: "" });
                          }}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {errors.queryCategory && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.queryCategory}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 py-[0.65rem] md:py-3 rounded-lg text-sm md:text-lg font-semibold !text-white"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default CallAMentor;
