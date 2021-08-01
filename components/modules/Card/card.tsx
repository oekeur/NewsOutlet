import Link from "next/link";
import type Article from "../../../interfaces/article";
import styles from "./card.module.scss";

export default function Card({ post, gridPos }) {
    return (
        <div className={`${styles.card} ${gridPos}`}>
            <Link href={`/article/${encodeURIComponent(post.id)}`}>
                <div>
                    <img src={post.urlToImage} alt={post.title} />
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
