import { ArrowRight } from 'lucide-react'

export function TripRoute({ route, compact = false }: { route: string[]; compact?: boolean }) {
  return (
    <div className={compact ? 'trip-route trip-route-compact' : 'trip-route'} aria-label="Route">
      {route.map((place, index) => (
        <span className="route-step" key={`${place}-${index}`}>
          <span>{place}</span>
          {index < route.length - 1 && <ArrowRight aria-hidden="true" size={14} strokeWidth={1.5} />}
        </span>
      ))}
    </div>
  )
}
