import React, { useEffect, useState } from "react";
import bgPic from "../../../public/p1.jpg"; // Importing the image
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../redux/slice/user/getUserSlice";
// import { updateUser } from "../../redux/slice/user/updateUserSlice"; 
import { updateUserProfile } from "../../redux/slice/user/updateUserDetailsSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileEdit = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [existingProfilePic, setExistingProfilePic] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedData = {
      name,
      phone,
      profilePic,
    };

    try {
      // Dispatch the updateUser action
      const response = await dispatch(updateUserProfile(updatedData));
      if (response.meta.requestStatus === "fulfilled") {
        toast.success("Profile updated successfully!");
        // Optionally, you can re-fetch user details after update
        await callApiToGetUserDetails();
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      toast.error("Error updating profile: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const callApiToGetUserDetails = async () => {
    try {
      const result = await dispatch(getUserDetails());
      const user = result?.payload?.user;
      setName(user?.name);
      setPhone(user?.phone);
      setExistingProfilePic(user?.profilePic);
    } catch (error) {
      toast.error("Error fetching user details.");
    }
  };

  useEffect(() => {
    callApiToGetUserDetails();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center py-6 sm:py-12"
      style={{
        backgroundImage: `url(${bgPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ToastContainer />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <div className="relative px-8 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
            Edit Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center">
              {profilePic ? (
                <img
                  src={URL.createObjectURL(profilePic)}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full mb-4 shadow-md object-cover"
                />
              ) : existingProfilePic ? (
                <img
                  src={existingProfilePic}
                  alt="Existing Profile"
                  className="w-24 h-24 rounded-full mb-4 shadow-md object-cover"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center shadow-md">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
              <label className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-2 text-sm text-gray-600 focus:outline-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg transform hover:scale-105 transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
