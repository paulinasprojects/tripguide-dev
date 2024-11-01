"use client"

import * as React from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"

interface Props {
  className?: string
}

export const DatePicker = ({className}: Props) => {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[250px] h-[70px] max-sm:w-[142px] max-sm:h-[60px] md:w-[180px] justify-start  text-left font-normal bg-[#f4f5f7]",
            !date && "text-muted-foreground",className
          )}
        >
        {!date && <CalendarIcon/>}
        {date ? format(date, "PPP") : <span className="mt-7 text-[#B1B5C3] text-md font-normal font-dm-sans"></span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
