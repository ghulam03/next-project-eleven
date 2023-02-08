import React,{useState} from "react";

import Router from "next/router";
import styles from "./form.module.css"

function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content, authorEmail };
      await fetch(`/api/pform`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/index");
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <>

<div className={styles.page}>
        <form
          onSubmit={submitData}>
          <h1>Form</h1>
          <input
            autoFocus
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <input
            onChange={e => setAuthorEmail(e.target.value)}
            placeholder="Author (email address)"
            type="text"
            value={authorEmail}
          />
          <textarea className={styles.textarea}

            cols={50}
            onChange={e => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <input
            disabled={!content || !title || !authorEmail}
            type="submit"
            value="Create"
          />
          <a className={styles.back} href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
  </>
      )
    
}

export default Form;
