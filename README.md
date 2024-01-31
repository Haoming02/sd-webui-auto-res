# SD Webui Auto Resolution
This is an Extension for the [Automatic1111 Webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui), 
which automatically sets the `width` and `height` in **txt2img**, based on the currently selected Checkpoint name.

> In case you are not aware, **SD 1.5** models should use `512x512` while **SDXL** models should use around `1024x1024`

## Configs
This Extension comes with a `auto_config.json` file.
With it, you can customize your starting resolution.
The rule at the top is prioritized over the rules further down.

Each rule contains:
- **re:** The regular expression to filter for
- **width/height:** self-explanatory

By default, it comes with 2 rules:
```json
[
  {
    "re": "(xl)|(XL)",
    "width": 1024,
    "height": 1024
  },
  {
    "re": ".",
    "width": 512,
    "height": 512
  }
]
```

- The first one will capture any Checkpoint that has either "xl" or "XL" in the name
- The second one acts as the catch-all that simply captures any Checkpoint

<hr>
<sub>Learn, Build, & Test RegEx</sub>

- **RegExr:** https://regexr.com/
