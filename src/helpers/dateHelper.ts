export const formatDate = (date: string) => {
    //date string should be checked if it is a date or passed in as Date object
    const parsedDate = new Date(date);
    const hour = parsedDate.getHours();
    const minutes = parsedDate.getMinutes();
    const month = new Intl.DateTimeFormat('en-US',  {month: "long"}).format(parsedDate);
    const day = parsedDate.getDay()
    const year = parsedDate.getFullYear();

    const formattedDate = `${hour}:${minutes} - ${month} ${day}, ${year}`
    
    return formattedDate;
}