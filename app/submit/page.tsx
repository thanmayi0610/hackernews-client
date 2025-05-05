"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import betterAuthClient from "@/lib/integrations/better-auth";
import { serverUrl } from "@/environment";

const SubmitPage = () => {
  const router = useRouter();
  const { data } = betterAuthClient.useSession();
  const [form, setForm] = useState({
    title: "",
    url: "",
    content: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }

    try {
      const res = await fetch(`${serverUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // VERY important for session auth
        body: JSON.stringify({
          title: form.title,
          content: form.url || form.content, // logic: if url provided, content is optional
          url: form.url || null,
        }),
      });

      if (!res.ok) {
        const result = await res.json();
        setError(result.message || "Something went wrong.");
        return;
      }

      // redirect to homepage or /new
      router.push("/");
    } catch (err) {
      console.error("Failed to submit:", err);
      setError("Error submitting post.");
    }
  };

  if (!data?.user) {
    return <p className="p-4">Please <a href="/login" className="text-blue-600 underline">login</a> to submit a post.</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-4 font-sans text-sm">
      <h1 className="font-bold text-base mb-2">Submit</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <label className="block mb-2">
        <span className="block mb-1">title</span>
        <input
          type="text"
          className="w-full border px-2 py-1"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </label>

      <label className="block mb-2">
        <span className="block mb-1">url</span>
        <input
          type="text"
          className="w-full border px-2 py-1"
          value={form.url}
          onChange={(e) => setForm({ ...form, url: e.target.value })}
        />
      </label>

      <label className="block mb-4">
        <span className="block mb-1">text</span>
        <textarea
          rows={5}
          className="w-full border px-2 py-1"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
      </label>

      <button
        onClick={handleSubmit}
        className="border px-3 py-1 bg-gray-100 hover:bg-gray-200"
      >
        submit
      </button>

      <p className="text-xs text-gray-600 mt-2">
        Leave url blank to submit a question for discussion. If there is no url, text will appear at the top of the thread. If there is a url, text is optional.
      </p>
    </div>
  );
};

export default SubmitPage;
