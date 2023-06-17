import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useBooked = () => {

    const { user } = useContext(AuthContext);

    const token = localStorage.getItem("access-token")

    const { refetch, data: book = [] } = useQuery({
        queryKey: ['book', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://deep-thought-server-sagar-ghosh1.vercel.app/course?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    return [book, refetch]

};

export default useBooked;