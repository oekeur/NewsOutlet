import Head from "next/head";
import pages from "../mock/pages";

export default function Home({ posts, homepageContent }) {
    const { title, description } = homepageContent;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content={description} />
            </Head>
            <h1>This is the homepage</h1>
        </div>
    );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}home`);
    const posts = await res.json();
    const homepageContent = pages.data[0];

    return {
        props: {
            posts,
            homepageContent,
        },
    };
}
