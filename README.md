<div align="left">
	<h1> ≽ Info ≼</h1> 
</div>

**Registry Policy Tweaks** file is fully commented. Adjust as needed.

**Extension & Theme Installation** > 
 1. Enable "Developer mode" on the edge://extensions page,
 2. Drag the theme or extension folder onto the page or click "Load unpacked" and select.

---

<details>
<summary><strong>Main In-Browser Settings</strong></summary>

- Disable Password, Payment, and Addresses save.

- Set Tracking Prevention to `Strict`.

- Enable Automatic HTTPS > Set alerts for both public and private sites.

- Disable JavaScript, Images, Background Sync, Payment Handlers by default (alongside relevant others).
  - Add exceptions as needed.

- Disables all cookies by default.
  - Add exceptions as needed.

  - Main Exceptions:
    - https://discord.com
    - https://discordapp.com
    - https://www.dropbox.com
    - https://github.com
    - https://gist.github.com
    - https://accounts.google.com
    - https://developer.microsoft.com
    - https://login.microsoftonline.com
    - https://studio.youtube.com
    - https://www.youtube.com
    - https://[*.]twitch.tv:443
	- https://seelen.io
    - https://[*.]vault.bitwarden.com:443

- Set Edge ram usage limit to 1GB if not set > Always active.
</details>

<details>
<summary><strong>Other Extensions</strong></summary>

- [Tab Session Manager](https://microsoftedge.microsoft.com/addons/detail/tab-session-manager/jkjjclfiflhpjangefhgfjhgfbhajadk)

- [Violentmonkey](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao)

  - Scripts:
    - Vaft (Enabled) & Video Swap from [Twitch Ad Solutions](https://github.com/pixeltris/TwitchAdSolutions)

- [UBlock Origin Lite](https://microsoftedge.microsoft.com/addons/detail/ublock-origin-lite/cimighlppcgcoapaliogpjjdehbnofhn)

</details>
