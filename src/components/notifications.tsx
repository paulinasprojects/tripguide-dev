import AccountSupportNotifications from "./account-support-notifications"
import MesssageNotifications from "./message-notifications"
import PolicyNotifications from "./policy-notifications"
import PromotionsNotifications from "./promotions-notifications"
import RemindersNotifications from "./reminders-notifications"


const Notifications = () => {
  return (
  <>
    <div>
      <MesssageNotifications/>
      <PromotionsNotifications/>
      <RemindersNotifications/>
      <PolicyNotifications/>
      <AccountSupportNotifications/>
    </div>
  </>
  )
}

export default Notifications