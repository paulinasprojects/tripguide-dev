import MyProfile from "@/components/my-profile"
import MyProfileSettings from "@/components/my-profile-settings"
import ProfileBreadcrumbs from "@/components/profile-breadcrumbs"

const ProfilePage = () => {
  return (
    <div className="xl:mx-[137.5px] my-[70px] lg:mx-5 max-sm:mx-5 md:mx-5">
      <div>
        <ProfileBreadcrumbs
          href="/profile"
          label="Profile"
        />
      </div>
      <div className="mt-[44px]">
        {/* Flex Container */}
        <div className="flex gap-[35px] max-sm:flex-col">
          {/* left */}
          <div>
            <MyProfile/>
          </div>
          {/* Right */}
          <div>
            <MyProfileSettings/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage