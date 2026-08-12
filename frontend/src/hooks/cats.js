import { useEffect, useState } from "react";
import { getAllCats } from "../service/cats/crudCats";

export function useGetCats(){
    const [ cats, setCats ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
            async function getCats(){
                try{
                    setLoading(true);
                    const result = await getAllCats();
                    setCats(result);
                }catch(err){
                    setError(err.message);
                } finally{
                    setLoading(false);
                }
            }
        getCats();
    }, []);

    return { cats, loading, error };
}