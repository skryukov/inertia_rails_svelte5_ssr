# frozen_string_literal: true

InertiaRails.configure do |config|
  config.ssr_enabled = ViteRuby.config.ssr_build_enabled
  # createServer() in vite.config.ts listens on port 13714 by default
  config.ssr_url = "#{ViteRuby.config.protocol}://#{ViteRuby.config.host}:13714"
  config.version = ViteRuby.digest
end
