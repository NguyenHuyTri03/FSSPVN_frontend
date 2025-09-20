const host_url = `${import.meta.env.VITE_BACKEND_URL}/api/cat`;

export default async function getAllCat() {
    let cats = [];

    await fetch(`${host_url}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            cats = data;
        });

    return cats;
}