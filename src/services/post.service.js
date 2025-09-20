const host_url = `${import.meta.env.VITE_BACKEND_URL}/api/posts`;

export default async function PostCreate(form) {
    await fetch(`${host_url}/create`, {
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

export async function FetchAllPosts(catId) {
    const posts = [];
    await fetch(`${host_url}`)
}