# Cinnamon-Applets-panel-Tutorial
Simple examples for writing a Cinnamon Applet



- Applets are stored in the ~/.local/share/cinnamon/applets directory

```
mkdir -p ~/.local/share/cinnamon/applets/hello-world@yourname
cd ~/.local/share/cinnamon/applets/hello-world@yourname
```

- metadata.json
```
{
    "uuid": "hello-world@yourname",
    "name": "Hello World",
    "description": "A simple Hello World applet",
    "icon": "utilities-terminal"
}
```
- applet.js
```
const Applet = imports.ui.applet;
const St = imports.gi.St;

function MyApplet(metadata, orientation, panel_height, instance_id) {
    this._init(metadata, orientation, panel_height, instance_id);
}

MyApplet.prototype = {
    __proto__: Applet.TextApplet.prototype,

    _init: function(metadata, orientation, panel_height, instance_id) {
        Applet.TextApplet.prototype._init.call(this, orientation, panel_height, instance_id);
        this.set_applet_label("Hello World");
    }
};

function main(metadata, orientation, panel_height, instance_id) {
    return new MyApplet(metadata, orientation, panel_height, instance_id);
}
```
## Reload Cinnamon:
```
cinnamon --replace &
```
