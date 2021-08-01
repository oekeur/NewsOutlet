import parse from "html-react-parser";

export default function Article(content) {
    return (
        <div>
            <h1>This is the details for: {article}</h1>
            <span>This is the details for: {article}</span>
            <h1>This is the details for: {article}</h1>
        </div>
    );
}

// This function gets called at build time on server-side.
export async function getStaticProps(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}article/${id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}

// Fallback/static generation
export async function getStaticPaths() {
    return {
        paths: ["/article/1"],
        fallback: true,
    };
}
