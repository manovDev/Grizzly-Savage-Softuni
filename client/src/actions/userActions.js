import { SIGNIN, VERIFY, SIGNOUT } from "./actionTypes";

import firebase from "../firebase";
import { storage } from "../firebase";

import {
	signUp as singUpService,
	signIn as singInService,
	verifyUser,
} from "../services/userService";

export const signInSuccess = (userData) => ({
	type: SIGNIN,
	payload: userData,
});

export const signOutSuccess = () => ({
	type: SIGNOUT,
});

export const verify = () => ({
	type: VERIFY,
});

export const signUp = (data, profileImageFile) => async (dispatch) => {
	const response = await singUpService(data);
	const responseJSON = await response.json();

	const ref = storage.ref(responseJSON._id + "/" + data.profileImage);

	await ref.put(profileImageFile);

	if (responseJSON.error) {
		return { error: responseJSON.error };
	} else {
		return responseJSON;
	}
};

export const verifyAuth = () => (dispatch) => {
	return firebase.auth().onAuthStateChanged(async (user) => {
		if (user) {
			const uid = user.uid;
			const idToken = user.Aa;

			const response = await verifyUser(uid, idToken);

			const userData = await response.json();

			console.log("verifyAuth");
			console.log(userData);

			// console.log(JSON.stringify(user));
			if (userData._id) {
				userData.idToken = idToken;

				if (userData.profileImage) {
					const ref = storage.ref(userData._id + "/");

					var storageRef = ref.child(userData.profileImage);

					return storageRef
						.getDownloadURL()
						.then((profileImgUrl) => {
							userData.profileImage = profileImgUrl;

							localStorage.setItem("user", JSON.stringify(userData));

							return dispatch(signInSuccess({ user: userData }));
						})
						.catch((err) => {
							return err;
						});
				} else {
					localStorage.setItem("user", JSON.stringify(userData));

					return dispatch(signInSuccess({ user: userData }));
				}
			}
		} else {
			dispatch(verify());
		}
	});
};

export const signIn = (email, password) => async (dispatch) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((firebaseRes) => {
			const uid = firebaseRes.user.uid;
			// const idToken = firebaseRes.user.za;
			const idToken = firebaseRes.user.Aa;

			return singInService(uid, idToken).then((userData) => {
				userData.idToken = idToken;

				return userData;
			});
		})
		.then((res) => res.json())
		.then((user) => {
			if (user.profileImage) {
				const ref = storage.ref(user._id + "/");
				var storageRef = ref.child(user.profileImage);

				storageRef
					.getDownloadURL()
					.then((profileImgUrl) => {
						user.profileImage = profileImgUrl;

						localStorage.setItem("user", JSON.stringify(user));

						return dispatch(signInSuccess({ user }));
					})
					.catch((err) => {
						return err;
					});
			} else {
				localStorage.setItem("user", JSON.stringify(user));

				return dispatch(signInSuccess({ user }));
			}
		});
};

export const signOut = () => async (dispatch) => {
	await firebase.auth().signOut();

	localStorage.removeItem("user");

	dispatch(signOutSuccess());
};
