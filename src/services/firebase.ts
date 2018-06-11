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
    console.log('response', response);
    const value = await response.val();
    console.log('response', response);
    return response;
}
// export const getData = () => ref.once('value');

export const setData = data => {
    console.log('ref', ref, data);
    
    return ref.set(data);
    // const request = await ref.set(data);
    // console.log('request', request);
}