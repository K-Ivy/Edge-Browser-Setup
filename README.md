<div align="left">
	<h1> ≽ Info ≼</h1> 
</div>

**Registry Policy Tweaks** file is fully commented. Adjust as needed.

**Extension & Theme Installation** > 
 1. Enable "Developer mode" on the edge://extensions page,
 2. Drag the theme or extension folder onto the page or click "Load unpacked" and select.

**Host File (Base)** > [Niutech Gist](https://gist.github.com/niutech/1f1c1518ce0eba7e8d429c812d39493d?permalink_comment_id=4837999#file-hosts)

 - Open "C:\Windows\System32\drivers\etc\hosts" in a text edior with admin privileges and update.

---

<details>
<summary><strong>Main In-Browser Settings</strong></summary>

- Enable Automatic HTTPS > Set alerts for both public and private sites.

- Disable JavaScript, Images, Background Sync, Payment Handlers by default (alongside relevant others).
  - Add exceptions as needed.

- Disable all cookies by default.
  - Add exceptions as needed.

  - Main Exceptions:
    - https://discord.com
    - https://discordapp.com
    - https://github.com
    - https://gist.github.com
    - https://accounts.google.com
    - https://[*.]twitch.tv:443

</details>

<details>
<summary><strong>Other Extensions</strong></summary>

- [Tab Session Manager](https://microsoftedge.microsoft.com/addons/detail/tab-session-manager/jkjjclfiflhpjangefhgfjhgfbhajadk)

- [Violentmonkey](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao)

  - Scripts:
    - Vaft (Enabled) & Video Swap from [Twitch Ad Solutions](https://github.com/pixeltris/TwitchAdSolutions)

- [UBlock Origin Lite](https://microsoftedge.microsoft.com/addons/detail/ublock-origin-lite/cimighlppcgcoapaliogpjjdehbnofhn)
</details>
