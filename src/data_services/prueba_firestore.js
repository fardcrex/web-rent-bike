import { db } from "@/firebase";

export const getDataPrueba = function() {
  return db
    .collection("config")
    .doc("init")
    .get();
};
