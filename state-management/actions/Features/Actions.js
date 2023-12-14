import {
  POST_JOB,
  GET_ERRORS,
  GET_JOBS,
  MY_JOBS,
  VIEW_JOB,
  MY_APPLICATIONS,
  APPLY_TO_JOB,
  UPDATEJOB,
  APPLIEDJOB,
} from "../../types/types";
import * as firebase from "firebase";

export const getJobs = (setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    db.collection("jobs").onSnapshot((querySnapshot) => {
      var jobs = [];
      querySnapshot.forEach((doc) => {
        let arr = doc.data();
        arr.id = doc.id;
        jobs.push(arr);
      });
      dispatch({ type: GET_JOBS, payload: jobs });
      setLoading(false);
    });
  } catch (e) {
    console.log(e.message)
    dispatch({ type: GET_ERRORS, payload: e.message });
    setLoading(false);
  }
};

export const viewJob = (id, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    var docRef = db.collection("jobs").doc(id);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          dispatch({ type: VIEW_JOB, payload: doc.data() });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e.message });
    setLoading(false);
  }
};

export const searchJob = (skill, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    db.collection("jobs")
      .where("skills", "array-contains", skill)
      .get()
      .then((querySnapshot) => {
        var jobs = [];
        querySnapshot.forEach((doc) => {
          let arr = doc.data();
          arr.id = doc.id;
          jobs.push(arr);
        });
        dispatch({ type: GET_JOBS, payload: jobs });
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        setLoading(false);
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e.message });
    setLoading(false);
    console.log(e.message);
  }
};

export const postJob = (data, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    db.collection("jobs")
      .add(data)
      .then((docRef) => {
        dispatch({ type: POST_JOB, payload: "Job Posted Succesfully" });
        setLoading(false);
        alert("Congrats Your job is live now");
      })
      .catch((error) => {
        dispatch({ type: GET_ERRORS, payload: e.message });
        setLoading(false);
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e.message });
    setLoading(false);
    console.log("empty");
  }
};
export const myJobs = (email, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    db.collection("jobs")
      .where("author", "==", email)
      .onSnapshot((querySnapshot) => {
        var jobs = [];
        querySnapshot.forEach((doc) => {
          jobs.push(doc.data());
        });
        dispatch({ type: MY_JOBS, payload: jobs });
        setLoading(false);
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e.message });
    setLoading(false);
  }
};
export const appliedJobs = (email, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    db.collection("jobs")
      .where("applicants", "array-contains", email)
      .onSnapshot((querySnapshot) => {
        var jobs = [];
        querySnapshot.forEach((doc) => {
          jobs.push(doc.data());
        });
        dispatch({ type: APPLIEDJOB, payload: jobs });
        setLoading(false);
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e.message });
    setLoading(false);
  }
};

export const myApplications = (email, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    db.collection("applications")
      .where("author", "==", email)
      .onSnapshot((querySnapshot) => {
        var applications = [];
        querySnapshot.forEach((doc) => {
          applications.push(doc.data());
        });
        dispatch({ type: MY_APPLICATIONS, payload: applications });
        setLoading(false);
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e.message });
    setLoading(false);
  }
};

export const applyToJob =
  (data, setLoading, setSubmitted) => async (dispatch) => {
    var db = firebase.firestore();
    try {
      if (data.applicantDocs) {
        const response = await fetch(data.applicantDocs);
        const blob = await response.blob();
        var imgName = data.applicant + data.jobId;
        let imageRef = firebase
          .storage()
          .ref("images/applications/" + imgName + ".jpg");
        imageRef
          .put(blob)
          .then((snapshot) => {
            //You can check the image is now uploaded in the storage bucket
            imageRef
              .getDownloadURL()
              .then((url) => {
                data.applicantDocs = url;
                db.collection("applications")
                  .add(data)
                  .then(function (res) {
                    db.collection("jobs")
                      .doc(data.jobId)
                      .update({
                        applicants: data.applicants,
                      })
                      .then(function (res) {
                        dispatch({
                          type: APPLY_TO_JOB,
                          payload: "Applied to job",
                        });
                        setLoading(false);
                        setSubmitted(true);
                      })
                      .catch((e) => {
                        dispatch({ type: GET_ERRORS, payload: e.message });
                        setLoading(false);
                      });
                  })
                  .catch((e) => {
                    dispatch({ type: GET_ERRORS, payload: e.message });
                    setLoading(false);
                  });
              })
              .catch((e) =>
                console.log("getting downloadURL of image error => ", e)
              );
          })
          .catch((e) => console.log("uploading image error => ", e));
      } else {
        db.collection("applications")
          .add(data)
          .then(function (res) {
            db.collection("jobs")
              .doc(data.jobId)
              .update({
                applicants: data.applicants,
              })
              .then(function (res) {
                dispatch({ type: APPLY_TO_JOB, payload: "Applied to job" });
                setLoading(false);
                setSubmitted(true);
              })
              .catch((e) => {
                dispatch({ type: GET_ERRORS, payload: e.message });
                setLoading(false);
              });
          })
          .catch((e) => {
            dispatch({ type: GET_ERRORS, payload: e.message });
            setLoading(false);
          });
      }
    } catch (e) {
      dispatch({ type: GET_ERRORS, payload: e.message });
      setLoading(false);
      console.log(e.message);
    }
  };

export const updateJob = (data, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    db.collection("jobs")
      .doc(data.id)
      .update(data)
      .then(function (res) {
        dispatch({ type: UPDATEJOB, payload: "Updated" });
        setLoading(false);
        alert("Updated");
      })
      .catch((e) => {
        dispatch({ type: GET_ERRORS, payload: e.message });
        setLoading(false);
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e.message });
    setLoading(false);
    console.log(e.message);
  }
};

export const addJobToFavourites =
  (id, author, applicants, user, setLoading) => async (dispatch) => {
    var db = firebase.firestore();
    let data = {
      jobId: id,
      author: author,
      applicants: applicants,
      instructor: user,
    };
    try {
      db.collection("favourites")
        .add(data)
        .then(function (res) {
          setLoading(false);
        })
        .catch((e) => {
          dispatch({ type: GET_ERRORS, payload: e.message });
          setLoading(false);
        });
    } catch (e) {
      dispatch({ type: GET_ERRORS, payload: e.message });
      setLoading(false);
      console.log(e.message);
    }
  };

export const updateFavourite = (data) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    db.collection("jobs")
      .doc(data.id)
      .update(data)
      .then(function (res) {})
      .catch((e) => {
        dispatch({ type: GET_ERRORS, payload: e.message });
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e.message });
    console.log(e.message);
  }
};

export const addSkills = (data, id, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    var doc = db.collection("users").doc(id);
    return doc
      .update({
        skills: data,
      })
      .then(() => {
        setLoading(false);
        alert("Skills Updated");
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message);
      });
  } catch (e) {
    setLoading(false);
    console.log(e.message);
  }
};

export const updateProfile = (data, id, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    if (data.profile) {
      const response = await fetch(data.profile);
      const blob = await response.blob();
      let imageRef = firebase.storage().ref("images/" + id + ".jpg");
      imageRef
        .put(blob)
        .then((snapshot) => {
          //You can check the image is now uploaded in the storage bucket
          imageRef
            .getDownloadURL()
            .then((url) => {
              var doc = db.collection("users").doc(id);
              return doc
                .update({
                  name: data.name,
                  contact: data.contact,
                  profile: url,
                })
                .then(() => {
                  setLoading(false);
                  alert("Profile Updated");
                })
                .catch((e) => {
                  setLoading(false);
                  console.log(e.message);
                });
            })
            .catch((e) =>
              console.log("getting downloadURL of image error => ", e)
            );
        })
        .catch((e) => console.log("uploading image error => ", e));
    } else {
      var doc = db.collection("users").doc(id);
      return doc
        .update({
          name: data.name,
          contact: data.contact,
        })
        .then(() => {
          setLoading(false);
          alert("Profile Updated");
        })
        .catch((e) => {
          setLoading(false);
          console.log(e.message);
        });
    }
  } catch (e) {
    setLoading(false);
    console.log(e.message);
  }
};

export const uploadDocument = () => async (dispatch) => {};
