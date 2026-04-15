import { collection, query, where, getDocs } from "firebase/firestore";
import { User, getIdTokenResult, signOut } from "firebase/auth";
import { auth, db } from "./firebase";

/**
 * Checks if a user is an admin based on the "admins" Firestore collection.
 * This is used for verification before allowing access or setting claims.
 */
export const checkAdminInFirestore = async (email: string | null): Promise<boolean> => {
  if (!email) return false;
  
  try {
    const q = query(collection(db, "admins"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking admin status in Firestore:", error);
    return false;
  }
};

/**
 * Checks if the user has the "admin" custom claim in their Firebase Auth token.
 * This is the production-preferred way to verify permissions.
 */
export const checkAdminClaim = async (user: User): Promise<boolean> => {
  try {
    // Force refresh the token to get the latest claims
    const tokenResult = await getIdTokenResult(user, true);
    return !!tokenResult.claims.admin;
  } catch (error) {
    console.error("Error checking custom claims:", error);
    return false;
  }
};

/**
 * Combined administrative security check.
 * If Firestore says they are admin but claims don't match, they might need a refresh.
 * If neither match, we sign them out.
 */
export const validateAdminAccess = async (user: User): Promise<boolean> => {
  // First check custom claims (fast, secure)
  const hasClaim = await checkAdminClaim(user);
  if (hasClaim) return true;

  // Fallback to Firestore (in case claims aren't set yet)
  const isRegisteredAdmin = await checkAdminInFirestore(user.email);
  
  if (!isRegisteredAdmin) {
    console.warn("Unauthorized access attempt by:", user.email);
    await signOut(auth);
    return false;
  }

  // If they are in Firestore but don't have the claim, 
  // in a real production app, a Cloud Function should have set this.
  // We'll allow access for now if Firestore confirms them.
  return true;
};
