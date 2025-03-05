export default function ScorecardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Scorecard</h1>
      <p className="text-muted-foreground">
        View your performance metrics and analytics.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border p-4 shadow-sm">
          <h3 className="text-lg font-medium">Performance</h3>
          <div className="mt-2 text-3xl font-bold">92%</div>
          <p className="text-xs text-muted-foreground">+2.5% from last period</p>
        </div>
        
        <div className="rounded-lg border p-4 shadow-sm">
          <h3 className="text-lg font-medium">Efficiency</h3>
          <div className="mt-2 text-3xl font-bold">87%</div>
          <p className="text-xs text-muted-foreground">+1.2% from last period</p>
        </div>
        
        <div className="rounded-lg border p-4 shadow-sm">
          <h3 className="text-lg font-medium">Quality</h3>
          <div className="mt-2 text-3xl font-bold">95%</div>
          <p className="text-xs text-muted-foreground">+3.7% from last period</p>
        </div>
      </div>
      
      <div className="rounded-lg border p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Detailed Metrics</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Code Quality</span>
              <span className="font-medium">95%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '95%' }}></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Test Coverage</span>
              <span className="font-medium">87%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '87%' }}></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Documentation</span>
              <span className="font-medium">78%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 