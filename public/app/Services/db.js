var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getFirestore, collection, doc, query, where, getDocs, addDoc, deleteDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
const firebaseConfig = {
    apiKey: 'AIzaSyAVUXywVQkdQvdUzzePlP5LR2L7TCDVZZs',
    authDomain: 'dcatest-a9d15.firebaseapp.com',
    projectId: 'dcatest-a9d15',
    storageBucket: 'dcatest-a9d15.appspot.com',
    messagingSenderId: '206737488420',
    appId: '1:206737488420:web:e6626c49031c08ae6576b1',
    measurementId: 'G-WCSQ82CL7M'
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, 'users');
const postsRef = collection(db, 'posts');
export const queryUser = ({ password, username, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = query(usersRef, where('username', '==', username), where('password', '==', password));
        const querySnapshot = yield getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
        if (querySnapshot.empty) {
            return false;
        }
        else {
            return true;
        }
        return !querySnapshot.empty;
    }
    catch (error) {
        return false;
    }
});
export const addUser = ({ username, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, 'users'), {
            password,
            username,
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
export const addPost = ({ name, username, location, caption, mainimg, profileimg, likes, time, comments, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, 'posts'), {
            username,
            location,
            caption,
            mainimg,
            profileimg,
            likes,
            time,
            comments,
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
export const listenPosts = (cb) => {
    try {
        onSnapshot(collection(db, 'posts'), (docus) => {
            const posts = docus.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
            cb(posts);
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield deleteDoc(doc(db, 'posts', id));
    }
    catch (error) {
        console.log(error);
    }
});
