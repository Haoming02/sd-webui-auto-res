onUiLoaded(async () => {
    setTimeout(() => {

        const label = document.getElementById('AUTORES_CFG');
        const data = label.querySelector('textarea').value.trim();
        const configs = JSON.parse(data);

        label.remove();

        const ckpt_setting = document.getElementById('setting_sd_model_checkpoint');

        if (ckpt_setting == null)
            return;

        const width = document.getElementById('txt2img_width').querySelector('input');
        const height = document.getElementById('txt2img_height').querySelector('input');

        const loadingbar = ckpt_setting.querySelector('.wrap.default.full');

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class" && loadingbar.classList.contains("hide")) {

                    const ckpt = ckpt_setting.querySelector('input').value.split(' [')[0].trim();

                    for (const config of configs) {
                        const re = new RegExp(config['re']);

                        if (re.test(ckpt)) {
                            width.value = config['width'];
                            height.value = config['height'];

                            updateInput(width);
                            updateInput(height);
                            break;

                        }
                    };

                }
            });
        });

        const obs_cfg = { attributes: true, attributeFilter: ["class"] };
        observer.observe(loadingbar, obs_cfg);

    }, 50);
});
