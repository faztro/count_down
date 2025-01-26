"use client";

import { FaHeart } from "react-icons/fa";
import { StyledLikeButton } from "@/styles/styled-components";
import { useEffect, useState } from "react";

export const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch initial likes
  useEffect(() => {
    fetch("/api/likes")
      .then((res) => res.json())
      .then((data) => setLikes(data.likes))
      .catch((error) => console.error("Error fetching likes:", error));
  }, []);

  const handleLike = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setLikes(data.likes);
    } catch (error) {
      console.error("Error updating likes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledLikeButton
      onClick={handleLike}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      disabled={isLoading}
      style={{ opacity: isLoading ? 0.7 : 1 }}
    >
      <FaHeart />
      <span>{likes}</span>
    </StyledLikeButton>
  );
};
