import { SpendingFormType } from "../types/spendingForm.type";
import { SpendingType } from "../types/spenging.type";

export const fetchSpendings = async (url:string):Promise<SpendingType[]> => {

    const result = await fetch(
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


  export const postSpendings = async (url:string, spending: SpendingFormType)=> {

    const requestOptions:RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(spending)
  };
    const result = await fetch(
      url,
      requestOptions
    )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    // .then((spendings: SpendingType[]) => {
    //   return spendings;
    // })
    .catch((error) => error.message);
  return result;
  };