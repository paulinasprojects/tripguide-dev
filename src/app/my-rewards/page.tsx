import Breadcrumb from '@/components/breadcrumb'
import RewardsTabContent from '@/components/rewards-tab-content'

const MyRewards = () => {
  return (
    <div className='my-[70px] xl:mx-[135px] lg:mx-5 max-sm:mx-5 md:mx-5 max-sm:my-5'>
      <Breadcrumb
        label='My Rewards'
        href='/my-rewards'
      />
      <div className='mt-[70px]'>
        <RewardsTabContent/>
      </div>
    </div>
  )
}

export default MyRewards