import { SpendingFormType } from "../types/spendingForm.type";
import { SpendingType } from "../types/spenging.type";

export const fetchSpendings = (url:string):Promise<SpendingType[]> => {

    const result =  fetch(
        url
        )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((spendings: SpendingType[]) => {
        return spendings;
      })
      .catch((error) => error.message);
    return result;
  };


  export const postSpendings = (url:string, spending: SpendingFormType)=> {

    const requestOptions:RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(spending)
  };
    const result = fetch(
      url,
      requestOptions
    )
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      }
    })
    .catch((error) => error.message);
  return result;
  };

  export const deleteSpending = (url:string)=> {

    const requestOptions:RequestInit = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
  };
    const result = fetch(
      url,
      requestOptions
    )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => error.message);
  return result;
  };