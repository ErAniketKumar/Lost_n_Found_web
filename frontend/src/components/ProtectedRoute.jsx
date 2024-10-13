import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuthContext } from "../contexts/userAuth";

const ProtectedRoute = ({ children }) => {
    const { userId, loading } = useUserAuthContext();

    // Show a loading spinner or similar while checking authentication state
    if (loading) {
        return <div>Loading...</div>; // You can customize this
    }

    // If userId is null, redirect to login
    if (!userId) {
        return <Navigate to="/login" />;
    }

    // If authenticated, render the children
    return children;
};

export default ProtectedRoute;
