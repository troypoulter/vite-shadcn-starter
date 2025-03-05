import { Monitor, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-1 rounded-xl border bg-background p-1">
      <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 rounded-xl ${theme === "light" ? "bg-primary/10" : ""}`}
        onClick={() => setTheme("light")}
        title="Light mode"
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Light mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 rounded-xl ${theme === "system" ? "bg-primary/10" : ""}`}
        onClick={() => setTheme("system")}
        title="System mode"
      >
        <Monitor className="h-4 w-4" />
        <span className="sr-only">System mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 rounded-xl ${theme === "dark" ? "bg-primary/10" : ""}`}
        onClick={() => setTheme("dark")}
        title="Dark mode"
      >
        <Moon className="h-4 w-4" />
        <span className="sr-only">Dark mode</span>
      </Button>
    </div>
  )
}
