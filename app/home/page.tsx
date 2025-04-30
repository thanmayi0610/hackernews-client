// app/new/page.tsx
// "use client";

// import React, { useEffect, useState } from "react";
// import betterAuthClient from "@/lib/integrations/better-auth";

// type Post = {
//   id: string;
//   title: string;
//   content: string;
//   url?: string;
//   createdAt: string;
//   author: {
//     username: string;
//   };
// };

// const NewPostsPage = () => {
//   const { data } = betterAuthClient.useSession();
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/posts", {
//           credentials: "include",
//         });

//         if (!res.ok) {
//           const result = await res.json();
//           setError(result.message || "Failed to load posts.");
//           return;
//         }

//         const result = await res.json();
//         setPosts(result.data.posts);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError("Something went wrong.");
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (!data?.user) {
//     return (
//       <div className="p-4">
//         <p>Please <a href="/login" className="text-blue-600 underline">login</a> to view posts.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
//       <h1 className="font-bold mb-4">New Posts</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {posts.length === 0 ? (
//         <p>No posts yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {posts.map((post) => (
//             <li key={post.id} className="border-b pb-2">
//               <h2 className="font-semibold">{post.title}</h2>
//               {post.url ? (
//                 <a
//                   href={post.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 underline"
//                 >
//                   {post.url}
//                 </a>
//               ) : (
//                 <p>{post.content}</p>
//               )}
//               <p className="text-xs text-gray-600 mt-1">
//                 by <span className="font-mono">{post.author.username}</span> —{" "}
//                 {new Date(post.createdAt).toLocaleString()}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NewPostsPage;
// app/new/page.tsx

//important code>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import betterAuthClient from "@/lib/integrations/better-auth";

// type Post = {
//   id: string;
//   title: string;
//   content: string;
//   url?: string;
//   createdAt: string;
//   author: {
//     username: string;
//   };
// };

// const NewPostsPage = () => {
//   const { data } = betterAuthClient.useSession();
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/posts", {
//           credentials: "include",
//         });

//         if (!res.ok) {
//           const result = await res.json();
//           setError(result.message || "Failed to load posts.");
//           return;
//         }

//         const result = await res.json();
//         setPosts(result.data.posts);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError("Something went wrong.");
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (!data?.user) {
//     return (
//       <div className="p-4">
//         <p>Please <a href="/login" className="text-blue-600 underline">login</a> to view posts.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
//       <h1 className="font-bold mb-4">New Posts</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {posts.length === 0 ? (
//         <p>No posts yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {posts.map((post) => (
//             <li key={post.id} className="border-b pb-2">
//               <h2 className="font-semibold">{post.title}</h2>
//               {post.url ? (
//                 <a
//                   href={post.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 underline"
//                 >
//                   {post.url}
//                 </a>
//               ) : (
//                 <p>{post.content}</p>
//               )}
//               <p className="text-xs text-gray-600 mt-1">
//                 by <span className="font-mono">{post.author.username}</span> —{" "}
//                 {new Date(post.createdAt).toLocaleString()}{" "}
//                 | <Link href={`/posts/${post.id}`} className="text-gray-500 hover:underline">discuss</Link>
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NewPostsPage;
//VVVVIMPORTANT CODE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa"; // ✅ imported thumbs icons
// import betterAuthClient from "@/lib/integrations/better-auth";
// import { formatDistanceToNow } from "date-fns"; 
// type Post = {
//   id: string;
//   title: string;
//   content: string;
//   url?: string;
//   createdAt: string;
//   author: {
//     username: string;
//   };
// };

// const NewPostsPage = () => {
//   const { data } = betterAuthClient.useSession();
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [likes, setLikes] = useState<Record<string, number>>({});
//   const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/posts", {
//           credentials: "include",
//         });

//         if (!res.ok) {
//           const result = await res.json();
//           setError(result.message || "Failed to load posts.");
//           return;
//         }

//         const result = await res.json();
//         setPosts(result.data.posts);

//         // After posts, fetch likes for all posts
//         result.data.posts.forEach(async (post: Post) => {
//           const likeRes = await fetch(`http://localhost:3000/likes/on/${post.id}`, {
//             credentials: "include",
//           });

//           if (likeRes.ok) {
//             const likeData = await likeRes.json();
//             setLikes((prev) => ({ ...prev, [post.id]: likeData.data.totalLikes }));
            
//             // Check if the current user has already liked
//             const userLiked = likeData.data.likes.some(
//               (like: any) => like.user.id === data?.user?.id
//             );
//             setLikedPosts((prev) => ({ ...prev, [post.id]: userLiked }));
//           }
//         });
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError("Something went wrong.");
//       }
//     };

//     fetchPosts();
//   }, [data?.user?.id]); // wait for user session

//   const toggleLike = async (postId: string) => {
//     const isLiked = likedPosts[postId];

//     try {
//       const url = `http://localhost:3000/likes/on/${postId}`;
//       const res = await fetch(url, {
//         method: isLiked ? "DELETE" : "POST",
//         credentials: "include",
//       });

//       if (res.ok) {
//         setLikes((prev) => ({
//           ...prev,
//           [postId]: isLiked ? (prev[postId] || 1) - 1 : (prev[postId] || 0) + 1,
//         }));
//         setLikedPosts((prev) => ({ ...prev, [postId]: !isLiked }));
//       } else {
//         console.error("Failed to toggle like.");
//       }
//     } catch (err) {
//       console.error("Error liking/unliking:", err);
//     }
//   };

//   if (!data?.user) {
//     return (
//       <div className="p-4">
//         <p>Please <a href="/login" className="text-blue-600 underline">login</a> to view posts.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
//       <h1 className="font-bold mb-4">New Posts</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {posts.length === 0 ? (
//         <p>No posts yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {posts.map((post) => (
//             <li key={post.id} className="border-b pb-2">
//               <h2 className="font-semibold">{post.title}</h2>
//               {post.url ? (
//                 <a
//                   href={post.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 underline"
//                 >
//                   {post.url}
//                 </a>
//               ) : (
//                 <p>{post.content}</p>
//               )}

//               <div className="flex items-center text-xs text-gray-600 mt-1 space-x-2">
//                 <button
//                   onClick={() => toggleLike(post.id)}
//                   className="flex items-center space-x-1"
//                 >
//                   {likedPosts[post.id] ? (
//                     <FaThumbsUp className="text-blue-600" />
//                   ) : (
//                     <FaRegThumbsUp className="text-gray-400" />
//                   )}
//                 </button>
//                 <span>{likes[post.id] || 0}</span>

//                 <span>
//                   by <span className="font-mono">{post.author.username}</span> —{" "}
//                   {/* {new Date(post.createdAt).toLocaleString()} */}
//                   {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//                 </span>
//                 <span> | </span>
//                 <Link href={`/posts/${post.id}`} className="text-gray-500 hover:underline">
//                   discuss
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NewPostsPage;
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa"; // ✅ imported thumbs icons
import betterAuthClient from "@/lib/integrations/better-auth";
import { formatDistanceToNow } from "date-fns";

type Post = {
  id: string;
  title: string;
  content: string;
  url?: string;
  createdAt: string;
  author: {
    username: string;
  };
};

const NewPostsPage = () => {
  const { data } = betterAuthClient.useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:3000/posts", {
          credentials: "include",
        });

        if (!res.ok) {
          const result = await res.json();
          setError(result.message || "Failed to load posts.");
          return;
        }

        const result = await res.json();
        setPosts(result.data.posts);

        // After posts, fetch likes for all posts
        result.data.posts.forEach(async (post: Post) => {
          const likeRes = await fetch(`http://localhost:3000/likes/on/${post.id}`, {
            credentials: "include",
          });

          if (likeRes.ok) {
            const likeData = await likeRes.json();
            setLikes((prev) => ({ ...prev, [post.id]: likeData.data.totalLikes }));

            // Check if the current user has already liked
            const userLiked = likeData.data.likes.some(
              (like: any) => like.user.id === data?.user?.id
            );
            setLikedPosts((prev) => ({ ...prev, [post.id]: userLiked }));
          }
        });
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Something went wrong.");
      }
    };

    fetchPosts();
  }, [data?.user?.id]); // wait for user session

  const toggleLike = async (postId: string) => {
    const isLiked = likedPosts[postId];

    try {
      const url = `http://localhost:3000/likes/on/${postId}`;
      const res = await fetch(url, {
        method: isLiked ? "DELETE" : "POST",
        credentials: "include",
      });

      if (res.ok) {
        setLikes((prev) => ({
          ...prev,
          [postId]: isLiked ? (prev[postId] || 1) - 1 : (prev[postId] || 0) + 1,
        }));
        setLikedPosts((prev) => ({ ...prev, [postId]: !isLiked }));
      } else {
        console.error("Failed to toggle like.");
      }
    } catch (err) {
      console.error("Error liking/unliking:", err);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
  
    try {
      const res = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: "DELETE",
        credentials: "include",
      });
  
      if (res.ok) {
        // ✅ If successful, update UI
        setPosts((prev) => prev.filter((p) => p.id !== postId));
      } else {
        // ✅ If failed, read TEXT not JSON
        const text = await res.text();
        console.error("Failed to delete post:", text);
      }
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };
  

  if (!data?.user) {
    return (
      <div className="p-4">
        <p>Please <a href="/login" className="text-blue-600 underline">login</a> to view posts.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
      <h1 className="font-bold mb-4">New Posts</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border-b pb-2">
              <h2 className="font-semibold">{post.title}</h2>
              {post.url ? (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {post.url}
                </a>
              ) : (
                <p>{post.content}</p>
              )}

              <div className="flex items-center text-xs text-gray-600 mt-1 space-x-2">
                <button
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center space-x-1"
                >
                  {likedPosts[post.id] ? (
                    <FaThumbsUp className="text-blue-600" />
                  ) : (
                    <FaRegThumbsUp className="text-gray-400" />
                  )}
                </button>
                <span>{likes[post.id] || 0}</span>

                <span>
                  by <span className="font-mono">{post.author.username}</span> —{" "}
                  {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                </span>
                <span>|</span>
                <Link href={`/posts/${post.id}`} className="text-gray-500 hover:underline">
                  discuss
                </Link>
                {data.user.username === post.author.username && (
                  <>
                    <span>|</span>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="text-red-500 hover:underline"
                    >
                      delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewPostsPage;
