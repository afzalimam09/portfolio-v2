"use client";

import { useEffect, useState } from "react";
// import { blogs } from "../constants";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID;

const Blog = () => {
    const [pageToken, setPageToken] = useState("");
    const [blogs, setBlogs] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(
                `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}${
                    pageToken ? `&pageToken=${pageToken}` : ""
                }`
            );
            setBlogs(() => [...blogs, ...data.items]);
            setPageToken(data.nextPageToken);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    console.log(blogs);

    const handleMoreArticle = () => {
        if (!pageToken) return;
        fetchBlogs();
    };

    useEffect(() => {
        fetchBlogs();
    }, []);
    return (
        <article className="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>

            {!loading ? (
                <section className="blog-posts">
                    <ul className="blog-posts-list">
                        {blogs.map((blog: any) => (
                            <li key={blog.id} className="blog-post-item">
                                <a href={blog.url} target="_blank">
                                    {/* <figure className="blog-banner-box">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        loading="lazy"
                                    />
                                </figure> */}

                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            {/* <p className="blog-category">
                                            {blog.labels[0]}
                                        </p> */}

                                            {/* <span className="dot"></span> */}

                                            <time dateTime="2022-02-23">
                                                {blog.updated
                                                    .split("T")[0]
                                                    .split("-")
                                                    .reverse()
                                                    .join("-")}
                                            </time>
                                        </div>

                                        <h3 className="h3 blog-item-title">
                                            {blog.title}
                                        </h3>

                                        <p className="blog-text">{blog.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={handleMoreArticle}
                        className="blog-more-btn"
                    >
                        {!pageToken ? "That's All" : "Load More"}
                    </button>
                </section>
            ) : (
                <p className="loading-text">Loading...</p>
            )}
        </article>
    );
};

export default Blog;
