import { useState } from "react";
import Auth from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

/**
 * 
 * email: phillip@fsspvn.org
 * password: admin123
 */

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Call to auth api
      const status = await Auth(form.email, form.password);

      if (status) {
        navigate("/");
      }
    } catch (err) {
      // Friendly error messages
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setError("User not found");
      } else if (err.code === "auth/invalid-credential") {
        setError("Email or password is incorrect.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <a href="/">Home</a>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-4xl text-black font-bold mb-4 text-center">Login</h2>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {error && (
          <p className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded text-center mb-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
