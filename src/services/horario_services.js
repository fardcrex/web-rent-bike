import { db } from "@/firebase";

const db_name = "horarios";

export const getListHorarios = function(docF) {
  return db
    .collection(db_name)
    .orderBy("hourInit")
    .onSnapshot(docF);
};

export const cancelHorario = async function({ uidHorario, uidUser }) {
  if (!uidHorario || !uidUser) return;

  try {
    const docRef = db.collection(db_name).doc(uidHorario);

    await db.runTransaction(async function(transaction) {
      const document = await transaction.get(docRef);
      if (!document.exists) return;
      const data = await document.data();
      const array = data.id_users;

      const newArray = array.filter((value) => {
        return value != uidUser;
      });

      transaction.update(docRef, { id_users: newArray });
    });
    return true;
  } catch (error) {
    return false;
  }
};
export const selectlHorario = async function({ uidHorario, uidUser }) {
  if (!uidHorario || !uidUser) return;
  try {
    const docRef = db.collection(db_name).doc(uidHorario);

    await db.runTransaction(async function(transaction) {
      const document = await transaction.get(docRef);
      if (!document.exists) return;
      const data = await document.data();
      const setList = new Set(data.id_users);

      const newArray = setList.add(uidUser);

      transaction.update(docRef, { id_users: Array.from(newArray) });
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
