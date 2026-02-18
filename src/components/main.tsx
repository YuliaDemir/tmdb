export const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="pointer-events-none fixed inset-0 opacity-60 [background:radial-gradient(1200px_circle_at_20%_0%,rgba(250,204,21,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(239,68,68,0.16),transparent_55%)]" />

        {children}
        </main>
    );
}