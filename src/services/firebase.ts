import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCyWtf2wr0uuio-A3OgbH3kTUc5U2Nw8xA",
    authDomain: "multi-neo-waleet.firebaseapp.com",
    databaseURL: "https://multi-neo-waleet.firebaseio.com",
    projectId: "multi-neo-waleet",
    storageBucket: "",
    messagingSenderId: "159944970622"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();

export const getData = async () => {
    const response = await ref.once("value");
    const value = await response.val();
    return value;
}

export const setData = data => {
    return ref.set(data);
    // const request = await ref.set(data);
    // console.log('request', request);
}