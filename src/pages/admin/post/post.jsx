import { useState } from "react";
import PostCreate from "../../../services/post.service";

export default function CreatePost() {
    const host_url = import.meta.env.VITE_BACKEND_URL;
    const [form, setForm] = useState({
        title: "",
        content: "",
        categoryId: "",
        coverImg: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const postDat = {
                ...form,
                createdAt: new Date().toISOString()
            }
            const status = await PostCreate(postDat);
            if (status) {
                alert("Post created successfully!");
                setForm({ title: "", content: "", category: "", coverImg: "" });
            }
        } catch (err) {
            console.error(err);
            alert("Error creating post");
        }
    };

    return (
        <div style={{ width: "90%", margin: "2rem auto", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
            <a href="/">Home</a>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Title */}
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "0.5rem", backgroundColor: "white", border: "1px solid", borderRadius: "7px" }}
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
                        style={{ width: "100%", padding: "0.5rem", backgroundColor: "white", border: "1px solid", borderRadius: "7px" }}
                    />
                </div>

                {/* Category */}
                <div>
                    <label>Category</label>
                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "0.5rem", backgroundColor: "white", border: "1px solid", borderRadius: "7px" }}
                    >
                        <option value="">Select Category</option>
                        <option value="tech">Tech</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="travel">Travel</option>
                        <option value="news">News</option>
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
                        style={{ width: "100%", padding: "0.5rem", backgroundColor: "white", border: "1px solid", borderRadius: "7px" }}
                    />
                </div>

                {/* Preview */}
                {form.coverImg && (
                    <div>
                        <label>Preview:</label>
                        <img src={form.coverImg} alt="Cover Preview" style={{ width: "100%", marginTop: "0.5rem", borderRadius: "6px" }} />
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
