const Applet = imports.ui.applet;
const Settings = imports.ui.settings;
const Lang = imports.lang;

class CounterApplet extends Applet.TextApplet {
    constructor(metadata, orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);

        this.settings = new Settings.AppletSettings(this, metadata.uuid, instance_id);
        
        this.settings.bind("default-value", "defaultValue", this.onSettingsChanged);
        this.settings.bind("increment-amount", "incrementAmount", this.onSettingsChanged);
        
        this.currentValue = this.defaultValue;
        this.updateDisplay();
        
        this.on_applet_clicked = () => {
            this.currentValue += this.incrementAmount;
            this.updateDisplay();
        };
      
    }
    
    updateDisplay() {
        this.set_applet_label(this.currentValue.toString());
    }
    
    onSettingsChanged() {
        this.currentValue = this.defaultValue;
        this.updateDisplay();
    }
    
}

function main(metadata, orientation, panel_height, instance_id) {
    return new CounterApplet(metadata, orientation, panel_height, instance_id);
}