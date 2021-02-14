import { db } from "@/firebase";

export const getDataPrueba = function() {
  return db.collection("data").get();
};
