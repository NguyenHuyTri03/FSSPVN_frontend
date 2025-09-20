import { useEffect, useState } from "react";
import PostCreate from "../../../services/post.service";
import getAllCat from "../../../services/category.service";

export default function CreatePost() {
    const host_url = import.meta.env.VITE_BACKEND_URL;
    const [form, setForm] = useState({
        title: "",
        content: "",
        categoryId: 0,
        coverImg: ""
    });
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const cat = await getAllCat();
                setCat(cat);
            } catch (e) {
                console.error(e);
            }
        }

        fetchCat();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === "categoryId" ? Number(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(form);
            const postDat = {
                ...form,
                createdAt: new Date().toISOString()
            }
            const status = await PostCreate(postDat);
            if (status) {
                alert("Post created successfully!");
                setForm({ title: "", content: "", categoryId: 0, coverImg: "" });
            }
        } catch (err) {
            console.error(err);
            alert("Error creating post");
        }
    };

    return (
        <div style={{ width: "90%", height: "100%", margin: "2rem auto", padding: "1rem" }}>
            <a href="/">Home</a>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", color: "black", flexDirection: "column", gap: "1rem" }}>
                {/* Title */}
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "0.5rem", color: "black", backgroundColor: "white", border: "1px solid", borderRadius: "7px" }}
                    />
                </div>

                {/* Content */}
                <div>
                    <label>Content</label>
                    <textarea
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        rows={20}
                        required
                        style={{ width: "100%", padding: "0.5rem", color: "black", backgroundColor: "white", border: "1px solid", borderRadius: "7px" }}
                    />
                </div>

                {/* Category */}
                <div>
                    <label>Category</label>
                    <select
                        name="categoryId"
                        value={form.categoryId}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "0.5rem", color: "black", backgroundColor: "white", border: "1px solid", borderRadius: "7px" }}
                    >
                        <option value={0} disabled>Select a category</option>
                        {cat.map((item) => (
                            <option key={item.id} value={item.id}>{item.vn}</option>
                        ))}

                    </select>
                </div>

                {/* Cover Image */}
                <div>
                    <label>Cover Image URL</label>
                    <input
                        type="text"
                        name="coverImg"
                        value={form.coverImg}
                        onChange={handleChange}
                        placeholder="https://example.com/cover.jpg"
                        style={{ width: "100%", padding: "0.5rem", color: "black", backgroundColor: "white", border: "1px solid", borderRadius: "7px" }}
                    />
                </div>

                {/* Preview */}
                {form.coverImg && (
                    <div>
                        <label>Preview:</label>
                        <img src={form.coverImg} alt="Cover Preview" style={{ width: "300px", height: "200px", marginTop: "0.5rem", borderRadius: "6px", color: "black" }} />
                    </div>
                )}

                {/* Submit */}
                <button type="submit" style={{ padding: "0.75rem", background: "black", color: "white", border: "none", borderRadius: "7px" }}>
                    Create Post
                </button>
            </form>
        </div>
    );
}
