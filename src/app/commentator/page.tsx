import React from "react";
import styles from "./page.module.css";
import Link from "next/link";


interface dataType {
    id: number,
    title: string,
    author: string,
    context: string
}

async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

const Blog = async () => {
    const data = await getData();
    const handleSubmit = () => { }

    return (
        <div className={styles.mainContainer}>
            {data.map((item: dataType) => (
                <Link href={`/commentator/${item.id}`} className={styles.container} key={item.id}>

                    <div className={styles.content}>
                        <h4 className={styles.title}>title: {item.title}</h4>
                        <h5 className={styles.title}>author: {item.author}</h5>
                        <p className={styles.desc}>post: {item.context}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Blog;
