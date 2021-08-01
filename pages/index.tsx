import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home(posts) {
    const { data, error } = useSWR("/api/home", fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>This is the homepage</h1>
        </div>
    );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}home`);
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}
