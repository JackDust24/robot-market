/* 
    Helper fle for formatting price to THB currency and the date.
*/

import React from "react";

export const formatPrice = (price) => {
  if (!price) {
    return "No Payment";
  }
  const realPrice = parseInt(price);
  return realPrice.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
};

export const formatDate = (createdDate) => {
    const date = new Date(createdDate)
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return formattedDate;
};
