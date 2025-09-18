import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const host_url = import.meta.env.VITE_BACKEND_URL;

export default async function Auth(email, password) {
    let auth_status = false;

    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    );

    const idToken = await userCredential.user.getIdToken();

    await fetch(`${host_url}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${idToken}`
        },
        credentials: "include"
    }).then((res) => {
        return res.json();
    }).then((data) => {
        auth_status = data.status;
    });

    return await auth_status;
}