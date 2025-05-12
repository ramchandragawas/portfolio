import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "Design Patterns in React",
      excerpt: "Implement common design patterns for scalable React apps.",
      date: "2023-10-01",
      link: "https://example.com/blog/design-patterns-react"
    },
    {
      title: "Improving Web App Performance",
      excerpt: "Learn techniques to optimize your web applications.",
      date: "2023-09-15",
      link: "https://example.com/blog/web-performance"
    }
  ];

  return (
    <section id="blog" className="section">
      <div className="container">
        <h2>Blog</h2>
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <small>{post.date}</small>
            <br />
            <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;