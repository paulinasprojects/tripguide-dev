import AccountTabContent from "@/components/account-tab-content"
import ProfileBreadcrumbs from "@/components/profile-breadcrumbs"

const AccountSettingsPage = () => {
  return (
    <div className="xl:mx-[135px] my-[70px] lg:mx-5 max-sm:mx-5 md:mx-5 max-sm:my-5">
      <div>
        <ProfileBreadcrumbs
          href="/account-settings"
          label="Account Settings"
        />
      </div>
      <div className="mt-10">
        <AccountTabContent/>
      </div>
    </div>
  )
}

export default AccountSettingsPage