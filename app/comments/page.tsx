// "use client";

// import { useEffect, useState } from "react";
// import betterAuthClient from "@/lib/integrations/better-auth";

// type Comment = {
//   id: string;
//   text: string;
//   createdAt: string;
//   user: {
//     username: string;
//   };
//   postId: string;
// };

// const AllCommentsPage = () => {
//   const { data } = betterAuthClient.useSession();
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchAllComments = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/comments/all", {
//           credentials: "include",
//         });
//         const result = await res.json();
//         setComments(result.data || []);
//       } catch (err) {
//         console.error("Error loading comments:", err);
//         setError("Failed to fetch comments.");
//       }
//     };

//     fetchAllComments();
//   }, []);

//   if (!data?.user) {
//     return <p className="p-4">Please login to view comments.</p>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
//       <h1 className="font-bold mb-4">All Comments</h1>
//       {error && <p className="text-red-500">{error}</p>}
//       {comments.length === 0 ? (
//         <p className="text-sm text-gray-500">No comments yet.</p>
//       ) : (
//         <ul className="space-y-3">
//           {comments.map((c) => (
//             <li key={c.id} className="border-b pb-2">
//               <p>{c.text}</p>
//               <p className="text-xs text-gray-600">
//                 by {c.user.username} on post {c.postId} —{" "}
//                 {new Date(c.createdAt).toLocaleString()}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AllCommentsPage;

// "use client";

// import { useEffect, useState } from "react";
// import betterAuthClient from "@/lib/integrations/better-auth";

// type Comment = {
//   id: string;
//   text: string;
//   createdAt: string;
//   user?: {
//     username: string;
//   };
//   postId: string;
// };

// const AllCommentsPage = () => {
//   const { data } = betterAuthClient.useSession();
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchAllComments = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/comments/all", {
//           credentials: "include",
//         });
//         const result = await res.json();
//         setComments(result.data || []);
//       } catch (err) {
//         console.error("Error loading comments:", err);
//         setError("Failed to fetch comments.");
//       }
//     };

//     fetchAllComments();
//   }, []);

//   if (!data?.user) {
//     return <p className="p-4">Please login to view comments.</p>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
//       <h1 className="font-bold mb-4">All Comments</h1>
//       {error && <p className="text-red-500">{error}</p>}
//       {comments.length === 0 ? (
//         <p className="text-sm text-gray-500">No comments yet.</p>
//       ) : (
//         <ul className="space-y-3">
//           {comments.map((c) => (
//             <li key={c.id} className="border-b pb-2">
//               <p>{c.text}</p>
//               <p className="text-xs text-gray-600">
//                 by {c.user?.username || "unknown"} on post {c.postId} —{" "}
//                 {new Date(c.createdAt).toLocaleString()}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AllCommentsPage;
"use client";

import { useEffect, useState } from "react";
import betterAuthClient from "@/lib/integrations/better-auth";
import { formatDistanceToNow } from "date-fns"; // ✅ import added

type Comment = {
  id: string;
  text: string;
  createdAt: string;
  user?: {
    username: string;
  };
  postId: string;
};

const AllCommentsPage = () => {
  const { data } = betterAuthClient.useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllComments = async () => {
      try {
        const res = await fetch("http://localhost:3000/comments/all", {
          credentials: "include",
        });
        const result = await res.json();
        setComments(result.data || []);
      } catch (err) {
        console.error("Error loading comments:", err);
        setError("Failed to fetch comments.");
      }
    };

    fetchAllComments();
  }, []);

  if (!data?.user) {
    return <p className="p-4">Please login to view comments.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
      <h1 className="font-bold mb-4">All Comments</h1>
      {error && <p className="text-red-500">{error}</p>}
      {comments.length === 0 ? (
        <p className="text-sm text-gray-500">No comments yet.</p>
      ) : (
        <ul className="space-y-3">
          {comments.map((c) => (
            <li key={c.id} className="border-b pb-2">
              <p>{c.text}</p>
              <p className="text-xs text-gray-600">
                by {c.user?.username || "unknown"} on post {c.postId} —{" "}
                {formatDistanceToNow(new Date(c.createdAt), { addSuffix: true })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllCommentsPage;
