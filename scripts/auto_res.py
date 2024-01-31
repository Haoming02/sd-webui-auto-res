import modules.scripts as scripts
import gradio as gr
import os

CONFIG_FILE = os.path.join(scripts.basedir(), 'auto_config.json')

class AutoRes(scripts.Script):
    def title(self):
        return "Auto Resolution"

    def show(self, is_img2img):
        return None if is_img2img else scripts.AlwaysVisible

    def ui(self, is_img2img):
        if is_img2img:
            return None

        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            data = f.read()

        gr.Textbox(value=data, elem_id='AUTORES_CFG')
        return None
