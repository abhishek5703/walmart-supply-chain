import React, { useEffect, useState } from "react";
import Axios from "../utils/Axios";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  IdentificationIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("/auth/user")
      .then((res) => {
        setUser(res.data);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setError(
          err.response?.data?.message || "Failed to fetch user data."
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-gray-100 via-slate-100 to-white flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-xl bg-white/80 backdrop-blur-md shadow-2xl border border-gray-200 rounded-3xl p-8 transition hover:shadow-purple-200">
        <div className="flex flex-col items-center mb-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-green-500 to-blue-500 flex items-center justify-center text-white text-5xl font-semibold shadow-md mb-4">
            {user?.name?.[0] || "?"}
          </div>

          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <UserIcon className="h-7 w-7 text-purple-600" />
            User Profile
          </h1>
          <p className="text-gray-500 text-sm">Welcome to your profile account </p>
        </div>

        {loading && (
          <p className="text-center text-gray-500">Loading profile...</p>
        )}

        {!loading && error && (
          <div className="flex items-center gap-2 text-red-600 font-medium mb-4 justify-center">
            <ExclamationCircleIcon className="h-5 w-5" />
            <span>{error}</span>
          </div>
        )}

        {!loading && user && (
          <div className="space-y-5 text-gray-800 text-base">
            <div className="flex items-center gap-3">
              <UserIcon className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">Name:</span> {user.name}
            </div>

            <div className="flex items-center gap-3">
              <EnvelopeIcon className="h-5 w-5 text-green-600" />
              <span className="font-semibold">Email:</span> {user.email}
            </div>

            <div className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-purple-600" />
              <span className="font-semibold">Phone:</span> {user.phone}
            </div>

            {user._id && (
              <div className="flex items-center gap-3">
                <IdentificationIcon className="h-5 w-5 text-indigo-500" />
                <span className="font-semibold">User ID:</span> {user._id}
              </div>
            )}

            {user.createdAt && (
              <div className="flex items-center gap-3">
                <CalendarIcon className="h-5 w-5 text-orange-500" />
                <span className="font-semibold">Joined:</span>{" "}
                {new Date(user.createdAt).toLocaleDateString()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
