const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

/**
 * Sets the 'admin' custom claim for a specific user by email.
 * @param {string} email 
 */
async function setAdminClaim(email) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    console.log(`Successfully assigned admin claim to: ${email}`);
    
    // Also add to Firestore collection for redundancy/checking
    const db = admin.firestore();
    await db.collection('admins').doc(user.uid).set({
      email: email,
      assignedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log(`Successfully added to 'admins' Firestore collection.`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error setting admin claim:', error);
    process.exit(1);
  }
}

// Usage: node set-admin.js your-email@example.com
const emailArg = process.argv[2];
if (emailArg) {
  setAdminClaim(emailArg);
} else {
  console.log('Please provide an email address: node set-admin.js <email>');
}
