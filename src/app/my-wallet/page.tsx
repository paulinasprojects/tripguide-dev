import Breadcrumb from '@/components/breadcrumb'
import WalletBalance from '@/components/wallet/wallet-balance'
import WalletTransactions from '@/components/wallet/wallet-transactions'

const MyWallet = () => {
  return (
    <div className="my-[50px] xl:mx-[135px] lg:mx-5 max-sm:mx-5 md:mx-5 max-sm:my-5">
       <Breadcrumb
        label="Wallet"
        href="/my-wallet"
      />
      <div className="mt-[50px] max-sm:mt-5">
      <span className="text-headlineOne font-bold font-dm-sans max-sm:text-[30px]">Wallet</span>
      </div>
      <div className='mt-[34px]'>
       <div className='flex gap-5 max-sm:flex-col'>
        <WalletBalance/>
        <WalletTransactions/>
       </div>
      </div>
    </div>
  )
}

export default MyWallet