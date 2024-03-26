import { getChannelRCSdkScript } from "@/utils"
import { exportSingleFile } from "@/exporter/3x"
import { TChannel, TChannelPkgOptions } from "@/typings"
import { INSERT_BEFORE_SCRIPT } from "./inject-vars"

export const export3xChartboost = async (options: TChannelPkgOptions) => {
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