import { SortUrlParamsType } from "../types/spenging.type";

export const rootURL = "https://polygence-spendtracker.herokuapp.com/spendings/"

export type CreateUrlAction = | {type: "ROOT"} | {type: "SORT", params:SortUrlParamsType} 

export const createUrl = (action: CreateUrlAction) => {
  switch(action.type){
    case "ROOT": {
      return rootURL;
    }
    case "SORT": {
      return `${rootURL}?currency=${action.params.currency}&order=${action.params.orderBy}`;
    }
    default:
       return rootURL;
    
  }
}