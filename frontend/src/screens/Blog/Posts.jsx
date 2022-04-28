import Post from "./Post";
import "./posts.css";
import React from "react";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://www.burpee.com/media/catalog/product/8/6/86f8ebdc85899533455be28ae60e288fc00070f13b930fede9c71a1d488f09d2.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000&canvas=1000:1320" />
      <Post img="https://www.burpee.com/media/catalog/category/BEE-Cat2.jpg" />
      <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://www.burpee.com/media/catalog/category/BEE-Cat1.jpg"/>
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
  );
}