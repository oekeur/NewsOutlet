import Link from "next/link";
import type Article from "../../../interfaces/article";
import styles from "./card.module.scss";

export default function Card({ post, gridPos }) {
    const headerImage = {
        width: "100%",
        height: "300px",
        backgroundImage: `url(${post.urlToImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <div className={`${styles.card} ${gridPos}`}>
            <Link
                href={`/article/${encodeURIComponent(post.title)}`}
                as={`/article/${encodeURIComponent(post.title)}`}
            >
                <div>
                    <div style={headerImage} />
                    <div className={styles.content}>
                        <h2>
                            <a>{post.title}</a>
                        </h2>
                        <a>{post.description}</a>
                    </div>
                </div>
            </Link>
        </div>
    );
}
