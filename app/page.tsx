export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Database Visualization
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Visualize database table<br />
          <span className="text-[#58a6ff]">relationships instantly</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect to PostgreSQL or MySQL, upload a SQL file, and get an interactive
          dependency graph of your schema in seconds. No more guessing how tables relate.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $29/mo
        </a>
        <div className="mt-16 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-xs text-[#8b949e]">schema_graph.sql</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <p><span className="text-[#ff7b72]">CREATE TABLE</span> <span className="text-[#79c0ff]">users</span> <span className="text-[#c9d1d9]">(id SERIAL PRIMARY KEY, email TEXT);</span></p>
            <p><span className="text-[#ff7b72]">CREATE TABLE</span> <span className="text-[#79c0ff]">orders</span> <span className="text-[#c9d1d9]">(id SERIAL, user_id INT</span> <span className="text-[#ffa657]">REFERENCES users(id)</span><span className="text-[#c9d1d9]">);</span></p>
            <p><span className="text-[#ff7b72]">CREATE TABLE</span> <span className="text-[#79c0ff]">products</span> <span className="text-[#c9d1d9]">(id SERIAL PRIMARY KEY, name TEXT);</span></p>
            <p><span className="text-[#ff7b72]">CREATE TABLE</span> <span className="text-[#79c0ff]">order_items</span> <span className="text-[#c9d1d9]">(order_id INT</span> <span className="text-[#ffa657]">REFERENCES orders(id)</span><span className="text-[#c9d1d9]">, product_id INT</span> <span className="text-[#ffa657]">REFERENCES products(id)</span><span className="text-[#c9d1d9]">);</span></p>
          </div>
          <div className="mt-4 pt-4 border-t border-[#30363d] flex flex-wrap gap-3 text-xs">
            <span className="px-2 py-1 rounded bg-[#0d1117] border border-[#58a6ff] text-[#58a6ff]">users</span>
            <span className="text-[#8b949e] self-center">→</span>
            <span className="px-2 py-1 rounded bg-[#0d1117] border border-[#ffa657] text-[#ffa657]">orders</span>
            <span className="text-[#8b949e] self-center">→</span>
            <span className="px-2 py-1 rounded bg-[#0d1117] border border-[#ffa657] text-[#ffa657]">order_items</span>
            <span className="text-[#8b949e] self-center">↔</span>
            <span className="px-2 py-1 rounded bg-[#0d1117] border border-[#3fb950] text-[#3fb950]">products</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-[#8b949e] mb-6">Everything you need to understand your database schema.</p>
          <ul className="space-y-3 mb-8">
            {[
              'PostgreSQL & MySQL support',
              'SQL file upload & parsing',
              'Interactive D3.js graph',
              'Foreign key detection',
              'Export as PNG or SVG',
              'Unlimited schemas'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Visualizing
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which databases are supported?',
              a: 'PostgreSQL and MySQL are fully supported. You can connect via a connection string or upload a .sql dump file directly.'
            },
            {
              q: 'Is my database connection secure?',
              a: 'Connections are encrypted in transit and credentials are never stored. Queries are read-only and limited to schema introspection.'
            },
            {
              q: 'Can I export the generated graph?',
              a: 'Yes. You can export your dependency graph as a PNG or SVG file to include in documentation or share with your team.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} DB Graph. All rights reserved.
      </footer>
    </main>
  )
}
