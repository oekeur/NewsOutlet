import parse from "html-react-parser";
import Head from "next/head";
import layout from "../../styles/base/layout.module.scss";
import articleStyles from "../../styles/base/article.module.scss";

export default function Article(content) {
    return (
        <div className={layout.container}>
            <Head>
                <title>{content.title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content={content.description} />
            </Head>
            <div className={articleStyles.header}>
                <h1>{content.title}</h1>
                <span>
                    {content.author} - {content.source.name}
                    fixed;
                </span>
            </div>
            <div className={articleStyles.content}>
                {parse(content.content)}
            </div>
        </div>
    );
}

// This function gets called at build time on server-side.
export async function getStaticProps({ params }) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ROOT}article/${params.article}`
    );
    const post = await res.json();
    return {
        props: {
            ...post,
        },
    };
}

// Fallback/static generation
export async function getStaticPaths() {
    return {
        paths: [{ params: { article: "1" } }, { params: { article: "2" } }],
        fallback: true,
    };
}
