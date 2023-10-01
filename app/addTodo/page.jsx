"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTodo() {
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description) {
      alert("Description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({description }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a todo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
  
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
