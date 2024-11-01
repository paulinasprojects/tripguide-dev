import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const HotelGuests = () => {
  return (
    <div className='flex flex-col gap-[12px]'>
      <label htmlFor="" className='text-md text-[#84878B] font-medium font-dm-sans'>Guests</label>
      <Select>
        <SelectTrigger className='w-[335px] h-[44px] rounded-[10px] bg-[#F4F5F6]'>
          <SelectValue placeholder="2 Adults, 1 Child"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='2 adult 1 children'>2 Adults, 1 Child</SelectItem>
          <SelectItem value='1 adult 1 child'>1 Adult, 1 Child</SelectItem>
          <SelectItem value='1 adult'>1 Adult</SelectItem>
          <SelectItem value='2 adults'>2 Adults</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default HotelGuests