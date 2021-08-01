import parse from "html-react-parser";
import Head from "next/head";
import layout from "../../styles/base/layout.module.scss";
import articleStyles from "../../styles/base/article.module.scss";
import articles from "../../mock/articles";

export default function Article(content) {
    const headerImage = {
        width: "100%",
        height: "400px",
        backgroundImage: `url(${content.urlToImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

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
            <div style={headerImage} />
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
    const paths = [];
    articles.data.forEach((article) => {
        paths.push({ params: { article: article.title } });
    });

    return {
        paths,
        fallback: true,
    };
}
