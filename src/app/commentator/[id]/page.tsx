'use client'

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IParams {params: {id: number}}

const BlogPost: React.FC<IParams> = ({ params }) => {
  const [data, setData] = useState([]);
  const [dataComments, setDataComents] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {

      const comment = await fetch(`/api/comments/${params.id}?id=${params.id}`, {
        cache: "no-store",
      });
      
      if (!comment.ok) { setErr(true) }
      const postComments = await comment.json()

      setData(postComments);

      setIsLoading(false);
    };
    getData()
  }, []);

  const handleSubmit = async (e: React.BaseSyntheticEvent) => { 
    e.preventDefault();
    const post_id = params.id
    const commentator = null
    const comment = e.target[1].value;
    const context = e.target[0].value;
    console.log('oooooooo', comment, context, params.id);
    try {
      await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          post_id, comment, commentator
        }),
      });
      //mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}><div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h2 className={styles.title}>{'Your comment to shosen post'}</h2>
        </div>
      </div>

      <div className={styles.content}></div>

    </div>

      <div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Comment</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <textarea
            placeholder="Comment"
            className={styles.textArea}
          //cols="30" rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
