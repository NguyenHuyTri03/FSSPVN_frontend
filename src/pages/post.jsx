import DOMPurify from "dompurify";

export default function Post({ post }) {
    const cleanHtml = DOMPurify.sanitize(post.content);

    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
        </div>
    );
}