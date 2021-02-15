import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "@/config";

firebase.initializeApp(firebaseConfig);
const db_firestore = firebase.firestore();
// if (location.hostname === "localhost") {
if (process.env.NODE_ENV !== "production") {
  db_firestore.settings({
    host: "localhost:8086",
    ssl: false,
  });
}

export const db = db_firestore;
export const auth = firebase.auth();
