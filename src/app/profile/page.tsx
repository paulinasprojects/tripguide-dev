import MyProfile from "@/components/my-profile"
import MyProfileSettings from "@/components/my-profile-settings"
import ProfileBreadcrumbs from "@/components/profile-breadcrumbs"

const ProfilePage = () => {
  return (
    <div className="mx-[137.5px] my-[70px]">
      <div>
        <ProfileBreadcrumbs
          href="/profile"
          label="Profile"
        />
      </div>
      <div className="mt-[44px]">
        {/* Flex Container */}
        <div className="flex gap-[33px]">
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