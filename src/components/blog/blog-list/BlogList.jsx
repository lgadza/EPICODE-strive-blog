import React from "react";
import { Col, Row } from "react-bootstrap";
// import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect } from "react";

const BlogList = (props) => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getPosts();
  }, []);
  let getPosts = async () => {
    try {
      const URL = process.env.REACT_APP_BE_DEV_URL;
      const response = await fetch(`${URL}/blogPosts`);
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row>
      {posts && (
        <Row>
          {posts.map((post) => (
            <Col
              md={4}
              style={{
                marginBottom: 50,
              }}
            >
              <BlogItem key={post.title} {...post} />
            </Col>
          ))}
        </Row>
      )}
    </Row>
  );
};

export default BlogList;
