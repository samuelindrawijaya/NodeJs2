export const fetchData = async(urlParam, method) => {
    try
    {
        const response = await fetch(urlParam,
            {
                method : method ?? 'GET'
            }
        );
        if(!response.ok)
        {
            throw new Error("Could not fetch resource");
        }
        //convert to json
        const data = await response.json();
        return data;

    }
    catch(error)
    {
        let messageError = error.message;
        return messageError;
    }

}

