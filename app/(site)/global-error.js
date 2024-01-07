"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p className="text-[8px]">{error}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
