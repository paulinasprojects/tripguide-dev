interface FilterNameProps {
  name: string;
}

const FilterName = ({name}: FilterNameProps) => {
  return (
    <div className="mb-[16px]">
    <span className="text-lg font-medium font-dm-sans">{name}</span>
  </div>
  )
}

export default FilterName