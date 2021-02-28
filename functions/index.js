const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");

const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex("users");

exports.addUserToAlgolia = functions.firestore
  .document("users/{userId}")
  .onCreate((snapshot) => {
    const data = snapshot.data();
    const objectID = snapshot.id;
    data.objectID = objectID;

    return index.saveObject(data);
  });

exports.updateUserInAlgolia = functions.firestore
  .document("users/{userId}")
  .onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;
    newData.objectID = objectID;

    return index.saveObject(newData);
  });

exports.deleteUserFromAlgolia = functions.firestore
  .document("users/{userId}")
  .onDelete((snapshot) => {
    index.deleteObject(snapshot.id);
  });
