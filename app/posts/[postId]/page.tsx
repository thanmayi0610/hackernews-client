// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
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

// type Comment = {
//   id: string;
//   text: string;
//   createdAt: string;
//   user: {
//     username: string;
//   };
// };

// const PostDetailPage = () => {
//   const params = useParams();
//   const postId = params?.postId as string;
//   const { data } = betterAuthClient.useSession();
//   const [post, setPost] = useState<Post | null>(null);
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [newComment, setNewComment] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPostAndComments = async () => {
//       try {
//         const [postRes, commentRes] = await Promise.all([
//           fetch(`http://localhost:3000/posts/${postId}`, {
//             credentials: "include",
//           }),
//           fetch(`http://localhost:3000/comments/on/${postId}`, {
//             credentials: "include",
//           }),
//         ]);

//         const postData = await postRes.json();
//         const commentData = await commentRes.json();

//         setPost(postData.data);
//         setComments(commentData.data.comments);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Failed to load post or comments.");
//       }
//     };

//     fetchPostAndComments();
//   }, [postId]);

//   const handleCommentSubmit = async () => {
//     if (!newComment.trim()) return;

//     try {
//       const res = await fetch(`http://localhost:3000/comments/on/${postId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ text: newComment }),
//       });

//       if (res.ok) {
//         const result = await res.json();
//         setComments((prev) => [result.data, ...prev]);
//         setNewComment("");
//       } else {
//         const result = await res.json();
//         setError(result.message || "Failed to add comment.");
//       }
//     } catch (err) {
//       console.error("Comment failed:", err);
//       setError("Server error.");
//     }
//   };

//   if (!data?.user) {
//     return <p className="p-4">Please login to view this post.</p>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
//       {error && <p className="text-red-500">{error}</p>}

//       {post && (
//         <>
//           <h1 className="font-bold">{post.title}</h1>
//           {post.url && (
//             <a
//               href={post.url}
//               className="text-blue-600 underline text-sm"
//               target="_blank"
//             >
//               {post.url}
//             </a>
//           )}
//           <p className="text-xs text-gray-600 mb-4">
//             by {post.author.username} —{" "}
//             {new Date(post.createdAt).toLocaleString()}
//           </p>
//         </>
//       )}

//       <div className="mb-4">
//         <textarea
//           rows={3}
//           className="w-full border px-2 py-1"
//           placeholder="Add a comment..."
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         />
//         <button
//           onClick={handleCommentSubmit}
//           className="mt-1 bg-orange-500 text-white px-3 py-1 rounded"
//         >
//           post
//         </button>
//       </div>

//       <div>
//         <h2 className="font-semibold mb-2">Comments</h2>
//         {comments.length === 0 ? (
//           <p className="text-gray-500 text-sm">No comments yet.</p>
//         ) : (
//           <ul className="space-y-3">
//             {comments.map((c) => (
//               <li key={c.id} className="border-b pb-2">
//                 <p className="text-sm">{c.text}</p>
//                 <p className="text-xs text-gray-500">
//                   by {c.user.username} —{" "}
//                   {new Date(c.createdAt).toLocaleString()}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PostDetailPage;
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
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

// type Comment = {
//   id: string;
//   text: string;
//   createdAt: string;
//   user?: {
//     username: string;
//   };
// };

// const PostDetailPage = () => {
//   const params = useParams();
//   const postId = params?.postId as string;
//   const { data } = betterAuthClient.useSession();
//   const [post, setPost] = useState<Post | null>(null);
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [newComment, setNewComment] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPostAndComments = async () => {
//       try {
//         const [postRes, commentRes] = await Promise.all([
//           fetch(`http://localhost:3000/posts/${postId}`, {
//             credentials: "include",
//           }),
//           fetch(`http://localhost:3000/comments/on/${postId}`, {
//             credentials: "include",
//           }),
//         ]);

//         const postData = await postRes.json();
//         const commentData = await commentRes.json();

//         setPost(postData.data);
//         setComments(commentData.data.comments);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Failed to load post or comments.");
//       }
//     };

//     fetchPostAndComments();
//   }, [postId]);

//   const handleCommentSubmit = async () => {
//     if (!newComment.trim()) return;

//     try {
//       const res = await fetch(`http://localhost:3000/comments/on/${postId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ text: newComment }),
//       });

//       if (res.ok) {
//         const result = await res.json();
//         setComments((prev) => [result.data, ...prev]);
//         setNewComment("");
//       } else {
//         const result = await res.json();
//         setError(result.message || "Failed to add comment.");
//       }
//     } catch (err) {
//       console.error("Comment failed:", err);
//       setError("Server error.");
//     }
//   };

//   if (!data?.user) {
//     return <p className="p-4">Please login to view this post.</p>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
//       {error && <p className="text-red-500">{error}</p>}

//       {post && (
//         <>
//           <h1 className="font-bold">{post.title}</h1>
//           {post.url && (
//             <a
//               href={post.url}
//               className="text-blue-600 underline text-sm"
//               target="_blank"
//             >
//               {post.url}
//             </a>
//           )}
//           <p className="text-xs text-gray-600 mb-4">
//             by {post.author.username} —{" "}
//             {new Date(post.createdAt).toLocaleString()}
//           </p>
//         </>
//       )}

//       <div className="mb-4">
//         <textarea
//           rows={3}
//           className="w-full border px-2 py-1"
//           placeholder="Add a comment..."
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         />
//         <button
//           onClick={handleCommentSubmit}
//           className="mt-1 bg-orange-500 text-white px-3 py-1 rounded"
//         >
//           post
//         </button>
//       </div>

//       <div>
//         <h2 className="font-semibold mb-2">Comments</h2>
//         {comments.length === 0 ? (
//           <p className="text-gray-500 text-sm">No comments yet.</p>
//         ) : (
//           <ul className="space-y-3">
//             {comments.map((c) => (
//               <li key={c.id} className="border-b pb-2">
//                 <p className="text-sm">{c.text}</p>
//                 <p className="text-xs text-gray-500">
//                   by {c.user?.username || "unknown"} —{" "}
//                   {new Date(c.createdAt).toLocaleString()}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PostDetailPage;
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import betterAuthClient from "@/lib/integrations/better-auth";
import { formatDistanceToNow } from "date-fns"; // ✅ import date-fns

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

type Comment = {
  id: string;
  text: string;
  createdAt: string;
  user?: {
    username: string;
  };
};

const PostDetailPage = () => {
  const params = useParams();
  const postId = params?.postId as string;
  const { data } = betterAuthClient.useSession();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const [postRes, commentRes] = await Promise.all([
          fetch(`http://localhost:3000/posts/${postId}`, {
            credentials: "include",
          }),
          fetch(`http://localhost:3000/comments/on/${postId}`, {
            credentials: "include",
          }),
        ]);

        if (!postRes.ok) {
          const errorText = await postRes.text();
          console.error("Post fetch failed:", errorText);
          setError("Failed to load post.");
          return;
        }

        if (!commentRes.ok) {
          const errorText = await commentRes.text();
          console.error("Comments fetch failed:", errorText);
          setError("Failed to load comments.");
          return;
        }

        const postData = await postRes.json();
        const commentData = await commentRes.json();

        setPost(postData.data);
        setComments(commentData.data.comments);
      } catch (err) {
        console.error("Error:", err);
        setError("Failed to load post or comments.");
      }
    };

    fetchPostAndComments();
  }, [postId]);

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    try {
      const res = await fetch(`http://localhost:3000/comments/on/${postId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ text: newComment }),
      });

      if (res.ok) {
        const result = await res.json();
        setComments((prev) => [result.data, ...prev]);
        setNewComment("");
      } else {
        const result = await res.json();
        setError(result.message || "Failed to add comment.");
      }
    } catch (err) {
      console.error("Comment failed:", err);
      setError("Server error.");
    }
  };

  if (!data?.user) {
    return <p className="p-4">Please login to view this post.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
      {error && <p className="text-red-500">{error}</p>}

      {post && (
        <>
          <h1 className="font-bold">{post.title}</h1>
          {post.url && (
            <a
              href={post.url}
              className="text-blue-600 underline text-sm"
              target="_blank"
            >
              {post.url}
            </a>
          )}
          <p className="text-xs text-gray-600 mb-4">
            by {post.author.username} —{" "}
            {new Date(post.createdAt).toLocaleString()} {/* ✅ Still using local time for post */}
          </p>
        </>
      )}

      <div className="mb-4">
        <textarea
          rows={3}
          className="w-full border px-2 py-1"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-1 bg-orange-500 text-white px-3 py-1 rounded"
        >
          post
        </button>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500 text-sm">No comments yet.</p>
        ) : (
          <ul className="space-y-3">
            {comments.map((c) => (
              <li key={c.id} className="border-b pb-2">
                <p className="text-sm">{c.text}</p>
                <p className="text-xs text-gray-500">
                  by {c.user?.username || "unknown"} —{" "}
                  {formatDistanceToNow(new Date(c.createdAt), { addSuffix: true })}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PostDetailPage;
