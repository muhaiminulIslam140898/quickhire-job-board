import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ApplyJob() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [message, setMessage] = useState("");

  const submitApplication = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/applications", {
        job_id: id,
        name,
        email,
        cover_note: coverNote,
      });

      setMessage("✅ Application submitted successfully!");
      setName("");
      setEmail("");
      setCoverNote("");
    } catch (error) {
      setMessage("❌ Error submitting application");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Apply for Job</h1>

      {message && (
        <div className="mb-4 p-3 bg-gray-100 rounded">{message}</div>
      )}

      <form onSubmit={submitApplication} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <textarea
          placeholder="Cover Note"
          value={coverNote}
          onChange={(e) => setCoverNote(e.target.value)}
          className="border p-2 rounded"
          rows={4}
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplyJob;