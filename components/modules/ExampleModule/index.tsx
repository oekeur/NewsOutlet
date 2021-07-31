import type ExampleModuleInterface from "./interface";

import styles from "./styles.module.scss";

export default function ExampleModule({
    title,
    description,
}: ExampleModuleInterface) {
    return (
        <section className={styles["example-module"]}>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    );
}
