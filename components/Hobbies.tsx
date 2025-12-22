import { hobbies } from '@/lib/data'

export function Hobbies() {
  return (
    <section id="hobbies" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            When I&apos;m <span className="gradient-text">Not Coding</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            A few things that keep me busy outside of work
          </p>
        </div>

        {/* Hobby Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="bg-bg-card border border-border rounded-2xl p-6 text-center hover:-translate-y-1 hover:border-accent-cyan transition-all group relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bg scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              
              <span className="text-5xl block mb-4 group-hover:animate-bounce-once">
                {hobby.icon}
              </span>
              <h3 className="font-semibold mb-2">{hobby.title}</h3>
              <p className="text-text-muted text-sm">{hobby.description}</p>
            </div>
          ))}
        </div>

        {/* Gallery Placeholder */}
        <div className="mt-12 p-12 border-2 border-dashed border-border rounded-2xl text-center">
          <h4 className="text-text-secondary text-lg mb-2">
            📸 Photo Gallery Coming Soon
          </h4>
          <p className="text-text-muted">
            Add your hobby photos here — Lego builds, 3D prints, homelab setup, and more!
          </p>
        </div>
      </div>
    </section>
  )
}
