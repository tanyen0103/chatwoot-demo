import ChannelCreateAccount from "features/channel/ChannelCreateAccount"
import ChannelCustom from "features/channel/ChannelCustom"
import ChannelFbInstagramManagement from "features/channel/ChannelFbInstagramManagement"
import ChannelList from "features/channel/ChannelList"
import ChannelTwitterProfileManagement from "features/channel/ChannelTwitterProfileManagement"
import ChannelWhatsAppBusinessAccounts from "features/channel/ChannelWhatsAppBusinessAccounts"

export default function Channel() {
  return (
    <main>
      <ChannelCreateAccount />
      <ChannelList />
      <ChannelTwitterProfileManagement />
      <ChannelFbInstagramManagement />
      <ChannelWhatsAppBusinessAccounts />
      <ChannelCustom />
    </main>
  )
}
