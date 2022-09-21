import React from "react";
import { formatDate } from "./dateHelper";
import { createUrl } from "./urlHelper";

const dateString = "2020-08-26T15:23:16Z";
const rootUrl = "https://polygence-spendtracker.herokuapp.com/spendings/";
const sortUrl =
  "https://polygence-spendtracker.herokuapp.com/spendings/?currency=HUF&order=amount";

test("date format", () => {
  const formattedDate = formatDate(dateString);
  expect(formattedDate).toBe("17:23 - August 3, 2020");
});

test("create root url helper", () => {
  const getUrl = createUrl({ type: "ROOT" });
  expect(getUrl).toBe(rootUrl);
});

test("create sort url helper", () => {
  const getUrl = createUrl({
    type: "SORT",
    params: { currency: "HUF", orderBy: "amount" },
  });
  expect(getUrl).toBe(sortUrl);
});
