const host_url = import.meta.env.VITE_BACKEND_URL;

export default async function PostCreate(form) {
    console.log("[POST FORM] ", form);

    await fetch(`${host_url}/api/post/create`, {
        method: "POST",
        "credentials": "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log("[POST STAT]", data.status);
    });
}