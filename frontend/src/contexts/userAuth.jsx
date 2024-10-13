import { createContext, useState, useEffect, useContext } from "react";

// Create a context for User Authentication
export const UserAuthContext = createContext();

// Provider component to wrap around your app
export const UserAuthContextProvider = ({ children }) => {
    const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
    const [userId, setUserId] = useState(null); // State to store userId
    const [loading, setLoading] = useState(true); // Loading state to manage fetch status
    const [error, setError] = useState(null); // Error state to handle issues

    // Function to fetch the user ID using the JWT token stored in cookies
    const fetchUserId = async () => {
        try {
            const response = await fetch(`${VITE_API_URL}/getuserId`, {
                method: "GET",
                credentials: "include", // Important for sending cookies
            });

            if (!response.ok) {
                throw new Error("Failed to fetch user ID"); // Error if response is not successful
            }

            const data = await response.json();

            if (data?.userId) {
                setUserId(data.userId); // Set userId if fetched successfully
            } else {
                setUserId(null); // If token is invalid or no userId, clear state
            }
        } catch (err) {
            console.error("Error fetching user ID:", err);
            setError(err.message);
            setUserId(null); // Ensure userId is null if there's an error
        } finally {
            setLoading(false); // Set loading to false after fetch completes
        }
    };

    useEffect(() => {
        fetchUserId(); // Fetch user ID on component mount
    }, []);

    // Provide userId and fetchUserId to the consuming components
    return (
        <UserAuthContext.Provider value={{ userId, fetchUserId, loading, error }}>
            {children}
        </UserAuthContext.Provider>
    );
};

// Custom hook to use the UserAuthContext
export const useUserAuthContext = () => {
    return useContext(UserAuthContext);
};
