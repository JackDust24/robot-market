import {formatDate, formatPrice} from "./format"

/*
    This data helper file helps to mutate the data receved by the API, by formatting the
    values and adding a unique ID
*/
import React from "react";

// To meet our requirements we wish to do the following with the data:
// 1. Add a unique ID to each record, 2. Format the price to THB and 3. Format the date.
export const mutateAndFormatTheData = async (data) => {
    //TODO: Error Handling
    const dataWithUniqueId = addUniqueIDToReturnedData(data);
    return dataWithUniqueId;

}


// Add a unique ID to the data so that we can use this for rendering and selecting by ID.
const addUniqueIDToReturnedData = (jsonData) => {
    jsonData.data.map((obj, index) => {
      obj.id = index;
    });
  
    return jsonData;
};

// Add a unique ID to the data so that we can use this for rendering and selecting by ID.
// const formatTheData = (data) => {
//     data.data.map((obj, index) => {
//       obj.id = index; // Add the unique ID
//       obj.price = formatPrice(obj.price);
//       obj.createdAt = formatDate(obj.createdAt);
//     });
  
//     return data;
// };
  