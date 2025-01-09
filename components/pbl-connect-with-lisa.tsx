"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function ConnectWithLisa() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      toast.success("Welcome to the Pilates by Lisa community!", {
        description:
          "You'll receive updates about new classes and exclusive offers.",
        duration: 5000,
      });
      setEmail("");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to subscribe";
      toast.error("Subscription failed", {
        description: message,
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sm:col-span-6 md:col-span-4 lg:col-span-6">
      <h4 className="text-sm text-slate-50 font-bold mb-2">
        Connect with Lisa
      </h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-3 py-2 text-sm text-slate-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
          required
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full inline-flex items-center justify-center px-6 py-2 text-sm text-white bg-purple-500 hover:bg-purple-600 rounded transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Connecting...
            </>
          ) : (
            "CONNECT WITH LISA"
          )}
        </button>
        <p className="text-xs text-slate-400">
          By clicking submit, you agree to our Privacy Policy.
        </p>
      </form>
    </div>
  );
}
