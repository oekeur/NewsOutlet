import Link from "next/link";
import type Article from "../../../interfaces/article";
import styles from "./card.module.scss";

export default function Card({ post }) {
    return (
        <div className={styles.card}>
            <Link href={`/article/${encodeURIComponent(post.id)}`}>
                <div>
                    <img src={post.urlToImage} alt={post.title} />
                    <h2>
                        <a>{post.title}</a>
                    </h2>
                    <a>{post.description}</a>
                </div>
            </Link>
        </div>
    );
}
