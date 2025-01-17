interface FilterProps {
    label: string;
    numberOfFacilities?: number;
}


const Filter = ({ label, numberOfFacilities}: FilterProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-[15px]">
      <input type="checkbox" id="checkbox" className="size-6 rounded-[7px] accent-blue80 cursor-pointer" />
      <label htmlFor="checkbox" className="text-sm font-normal font-dm-sans">{label}</label>
        <span className="ml-auto text-md text-[#84878B] font-normal font-dm-sans">{numberOfFacilities}</span>
      </div>
    </div>
  )
}

export default Filter