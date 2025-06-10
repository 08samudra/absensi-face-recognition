import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// Simpan data absensi
export async function saveAttendance(name, timestamp) {
  try {
    await addDoc(collection(db, "absensi"), {
      name,
      timestamp,
    });
    return true;
  } catch (err) {
    console.error("Gagal simpan absensi:", err);
    return false;
  }
}

// Ambil data absensi
export async function getAttendanceList() {
  const snapshot = await getDocs(collection(db, "absensi"));
  return snapshot.docs.map((doc) => doc.data());
}
