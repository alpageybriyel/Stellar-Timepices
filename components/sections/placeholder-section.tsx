export function PlaceholderSection({
  title = "Section title",
  children,
}: {
  title?: string
  children?: React.ReactNode
}) {
  return (
    <section className="mt-10 rounded-2xl border border-[rgb(var(--border))] p-6">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="mt-2 text-sm text-[rgb(var(--muted-foreground))]">
        {children ?? "Replace this with your real content."}
      </div>
    </section>
  )
}
