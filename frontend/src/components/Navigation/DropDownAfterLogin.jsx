import React from "react";
import { Link } from "react-router-dom";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";



const DropDownAfterLogin = ({userInfo}) => {
    const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
    
    const handleLogOut = async () => {
        try {
            const response = await fetch(`${VITE_API_URL}/logout`, {
                method: "GET",
                credentials: "include"
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                console.error("Logout failed:", data.message);
            } else {
                console.log("Logout successful:", data.message);
                // You might want to redirect or clear any local state
                window.location.reload(); // Refresh the page or redirect
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };
    
	return (
		
			<DropdownMenu className="outline-none mt-20">
				<DropdownMenuTrigger className="focus:outline-none">
					{userInfo.username}
				</DropdownMenuTrigger>
				<DropdownMenuContent className="focus:outline-none mt-6">
					<DropdownMenuLabel className="focus:outline-none">
						My Account
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="focus:outline-none">
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem className="focus:outline-none">
                        <Link to= {`/userPost/${userInfo._id}`} >
                          My Post
                        </Link>
					</DropdownMenuItem>
					<DropdownMenuItem className="focus:outline-none">
                        <Link to= "/showitems">
                          See All Post
                        </Link>
					</DropdownMenuItem>
					<DropdownMenuItem className="focus:outline-none" onClick={handleLogOut}>
						Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
	);
};

export default DropDownAfterLogin;
