import Head from "next/head";
import { useState } from "react";
import pages from "../mock/pages";
import Card from "../components/modules/Card/card";
import layout from "../styles/base/layout.module.scss";
import homepageStyles from "../styles/base/home.module.scss";

const getPublishers = (posts) => {
    const sources = [];
    posts.forEach((post) => sources.push(post.source.name));
    const uniqueSources = [...new Set(sources)];
    uniqueSources.sort((a, b) => a.localeCompare(b, "en"));
    uniqueSources.unshift("All");
    return uniqueSources;
};

export default function Home({ posts, homepageContent }) {
    const [order, setOrder] = useState("ASC");
    const [publisher, setPublisher] = useState("All");

    const { title, description } = homepageContent;
    posts = Object.values(posts);
    posts.sort((a, b) => {
        const sort = a.title.localeCompare(b.title, "en");
        return order === "ASC" ? sort : sort * -1;
    });

    const uniqueSources = getPublishers(posts);

    const filtered_posts = posts.filter((item) => {
        return publisher === "All" ? true : publisher === item.source.name;
    });

    return (
        <div className={layout.container}>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content={description} />
            </Head>
            <div className={homepageStyles.header}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
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
            <div className={layout.gridParent}>
                {filtered_posts.map(function (post, index) {
                    return (
                        <Card
                            key={post.id}
                            post={post}
                            gridPos={layout[`div${index}`]}
                        />
                    );
                })}
            </div>
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
