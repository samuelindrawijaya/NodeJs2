export const fetchData = async (urlParam) => {
    try
    {
        const response = await fetch(urlParam);
        if(!response.ok)
        {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        return data;

    }
    catch(error)
    {
        console.log(error);
        let messageError = 'error while trying to get data ';
        return messageError;
    }
}