'use client'

interface Props {
  allTags: string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
}

export function TagFilter({ allTags, selectedTags, onTagToggle }: Props) {
  if (allTags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {allTags.map(tag => {
        const isSelected = selectedTags.includes(tag)
        return (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              isSelected
                ? 'bg-accent-cyan text-bg-primary font-semibold'
                : 'bg-bg-card text-text-secondary hover:bg-bg-elevated hover:text-accent-cyan border border-border'
            }`}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}
