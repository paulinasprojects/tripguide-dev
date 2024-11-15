import { transactionsChipData } from "@/lib/data"

const TransactionChips = () => {
  return (
    <div className="md:flex gap-2 items-center max-sm:grid max-sm:grid-cols-3">
      {transactionsChipData.map((chip) => (
        <span key={chip.id} className="text-md font-normal font-dm-sans text-[#3B3E44] bg-[#F4F5F6] rounded-[20px] px-4 py-1.5">
          {chip.name}
        </span>
      ))}
    </div>
  )
}

export default TransactionChips