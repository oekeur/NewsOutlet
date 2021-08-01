import Head from "next/head";
import Link from "next/link";
import pages from "../mock/pages";

export default function Home({ posts, homepageContent }) {
    const { title, description } = homepageContent;
    posts = Object.values(posts);

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
            <h1>{title}</h1>
            <p>{description}</p>
            <ul>
                {posts.map(function (item) {
                    return (
                        <li key={item.id}>
                            <Link
                                href={`/article/${encodeURIComponent(item.id)}`}
                            >
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
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
