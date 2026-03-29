export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p
          className="font-mono-space text-xs tracking-widest mb-3"
          style={{ color: "var(--t3)", letterSpacing: "0.15em" }}
        >
          // COMMAND CENTRE
        </p>
        <h1
          className="font-syne text-5xl font-extrabold tracking-tight mb-4"
          style={{ color: "var(--t)" }}
        >
          PITCHIQ
        </h1>
        <p className="font-mono-space text-sm" style={{ color: "var(--t2)" }}>
          AI Cricket Command Centre — Loading...
        </p>
      </div>
    </main>
  );
}
