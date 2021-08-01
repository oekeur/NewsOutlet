import useSWR from "swr";

import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Article(content) {
    const router = useRouter();
    const { article } = router.query;
    const { data, error } = useSWR(`/api/article/${article}`, fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>This is the details for: {article}</h1>
        </div>
    );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}article/1`);
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
