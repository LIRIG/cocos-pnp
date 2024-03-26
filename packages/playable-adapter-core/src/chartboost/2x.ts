import { getChannelRCSdkScript } from "@/utils"
import { exportSingleFile } from "@/exporter/2x"
import { TChannel, TChannelPkgOptions } from "@/typings"
import { INSERT_BEFORE_SCRIPT } from "./inject-vars"

export const export2xChartboost = async (options: TChannelPkgOptions) => {
  const channel: TChannel = 'Chartboost'
  await exportSingleFile({
    ...options,
    channel,
    transformHTML: async ($) => {
      const sdkInjectScript = getChannelRCSdkScript(channel) || INSERT_BEFORE_SCRIPT
      $('body script').first().before(sdkInjectScript)
    }
  })
}