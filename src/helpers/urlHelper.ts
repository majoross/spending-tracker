import { SortUrlParamsType } from "../types/spenging.type";

export const rootURL = "https://polygence-spendtracker.herokuapp.com/spendings/"

export type CreateUrlAction = | {type: "ROOT"} | {type: "SORT", params:SortUrlParamsType} |{type: "DELETE", id:number}

export const createUrl = (action: CreateUrlAction) => {
  switch(action.type){
    case "ROOT": {
      return rootURL;
    }
    case "SORT": {
      return `${rootURL}?currency=${action.params.currency}&order=${action.params.orderBy}`;
    }
    case "DELETE": {
      return `${rootURL}${action.id}`;
    }
    default:
       return rootURL;
    
  }
}