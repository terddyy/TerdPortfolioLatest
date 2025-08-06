import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`
            relative h-7 w-14 rounded-full p-1 transition-colors duration-200
            ${isDark ? 'bg-slate-700' : 'bg-slate-200'}
            border border-border
          `}
        >
          <div
            className={`
              absolute top-1 left-1 flex h-5 w-5 items-center justify-center
              rounded-full transition-transform duration-200
              ${isDark ? 'translate-x-7 bg-transparent' : 'translate-x-0 bg-white'}
            `}
          >
            {isDark ? (
              <Moon className="h-4 w-4 text-yellow-200" />
            ) : (
              <Sun className="h-4 w-4 text-yellow-500" />
            )}
          </div>
          <span className="sr-only">Toggle theme</span>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Toggle theme</p>
      </TooltipContent>
    </Tooltip>
  )
} 