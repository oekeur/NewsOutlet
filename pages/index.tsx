import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import pages from "../mock/pages";

export default function Home({ posts, homepageContent }) {
    const [order, setOrder] = useState("ASC");
    const [publisher, setPublisher] = useState("All");

    const { title, description } = homepageContent;
    posts = Object.values(posts);
    posts.sort((a, b) => {
        const sort = a.title.localeCompare(b.title, "en");
        return order === "ASC" ? sort : sort * -1;
    });
    const sources = [];
    posts.forEach((post) => sources.push(post.source.name));
    const uniqueSources = [...new Set(sources)];
    uniqueSources.sort((a, b) => a.localeCompare(b, "en"));
    uniqueSources.unshift("All");

    const filtered_posts = posts.filter((item) => {
        return publisher === "All" ? true : publisher === item.source.name;
    });

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
            <select
                onChange={(e) => {
                    const { value } = e.currentTarget;
                    setOrder(value);
                }}
                value={order}
            >
                <option value="ASC">A-Z</option>
                <option value="DESC">Z-A</option>
            </select>
            <select
                onChange={(e) => {
                    const { value } = e.currentTarget;
                    setPublisher(value);
                }}
                value={publisher}
            >
                {uniqueSources.map(function (item, index) {
                    return (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    );
                })}
            </select>
            <ul>
                {filtered_posts.map(function (item) {
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
