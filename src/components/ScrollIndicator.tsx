import { memo } from 'react'
import { ChevronDown } from 'lucide-react'

const ScrollIndicator = memo(function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce-scroll">
      <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
        <ChevronDown className="w-5 h-5 text-white" />
      </div>
    </div>
  )
})

export default ScrollIndicator
