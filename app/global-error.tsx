"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#09090B",
          color: "#F1F5F9",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backgroundImage:
            "radial-gradient(rgba(129, 140, 248, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div style={{ maxWidth: "640px", width: "100%" }}>
          <p
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(244, 63, 94, 0.25)",
              backgroundColor: "rgba(244, 63, 94, 0.1)",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#fb7185",
              margin: 0,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "9999px",
                backgroundColor: "#fb7185",
              }}
            />
            Critical Error — Layout Down
          </p>

          <h1
            style={{
              marginTop: "1.5rem",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1,
              backgroundImage:
                "linear-gradient(135deg, #818CF8 0%, #A78BFA 40%, #E879F9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: "1.5rem 0 0 0",
              fontFamily: "ui-serif, Georgia, serif",
            }}
          >
            yikes
          </h1>

          <h2
            style={{
              marginTop: "1.5rem",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "#F1F5F9",
              fontFamily: "ui-serif, Georgia, serif",
              margin: "1.5rem 0 0 0",
              lineHeight: 1.2,
            }}
          >
            The whole layout walked off the job.
          </h2>

          <p
            style={{
              marginTop: "1rem",
              color: "#94A3B8",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Even the error boundary couldn&apos;t catch this one. It&apos;s a tough
            crowd up here. A refresh might be all it takes.
          </p>

          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem 1.25rem",
              borderRadius: "0.75rem",
              backgroundColor: "rgba(15, 15, 20, 0.6)",
              border: "1px solid rgba(148, 163, 184, 0.1)",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "0.875rem",
            }}
          >
            <p style={{ margin: 0 }}>
              <span style={{ color: "#818CF8" }}>$</span>{" "}
              <span style={{ color: "#CBD5E1" }}>portfolio --rebuild</span>
            </p>
            <p style={{ margin: "0.5rem 0 0 0", color: "#fb7185" }}>
              fatal: layout boundary collapsed
            </p>
            {error?.digest && (
              <p style={{ margin: "0.25rem 0 0 0", color: "#64748B" }}>
                digest: {error.digest}
              </p>
            )}
          </div>

          <button
            onClick={reset}
            style={{
              marginTop: "2rem",
              height: "48px",
              padding: "0 1.75rem",
              borderRadius: "0.5rem",
              border: "1px solid rgba(129, 140, 248, 0.4)",
              backgroundColor: "#6366F1",
              color: "#FFFFFF",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.25)",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#818CF8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#6366F1";
            }}
          >
            Reload the Page
          </button>
        </div>
      </body>
    </html>
  );
}
