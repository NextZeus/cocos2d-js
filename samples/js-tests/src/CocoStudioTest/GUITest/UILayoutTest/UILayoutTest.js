/****************************************************************************
 Copyright (c) 2013 cocos2d-x.org

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var LAYOUT_RES = [
    "res/cocosgui/UIEditorTest/UILayout_Editor/UILayout_Editor/ui_layout_editor_1.json",
    "res/cocosgui/UIEditorTest/UILayout_Editor/UILayout_Color_Editor/ui_layout_color_editor_1.json",
    "res/cocosgui/UIEditorTest/UILayout_Editor/UILayout_Gradient_Color_Editor/ui_layout_gradient_color_editor_1_0.json",
    "res/cocosgui/UIEditorTest/UILayout_Editor/UILayout_BackgroundImage_Editor/ui_layout_backgroundimage_editor_1_0_0.json",
    "res/cocosgui/UIEditorTest/UILayout_Editor/UILayout_Scale9_BackgroundImage_Editor/ui_layout_scale9_backgroundimage_editor.json",
    "res/cocosgui/UIEditorTest/UILayout_Editor/UILayout_Linear_Vertical_Layout_Editor/ui_layout_linear_vertical_layout_editor.json",
    "res/cocosgui/UIEditorTest/UILayout_Editor/UILayout_Linear_Horizontal_Layout_Editor/ui_layout_linear_horizontal_layout_editor.json",
    "res/cocosgui/UIEditorTest/UILayout_Editor/UILayout_Relative_Align_Parent_Editor/ui_layout_relative_align_parent_editor.json",
    "res/cocosgui/UIEditorTest/UILayout_Editor/UILayout_Relative_Align_Location_Editor/ui_layout_relative_align_location_editor.json"
];
var LAYOUT_INDEX = 0;
var UILayoutEditorTest = UIBaseLayer.extend({
    ctor: function () {
        this._super();
        var root = ccs.guiReader.widgetFromJsonFile(LAYOUT_RES[LAYOUT_INDEX]);
        this._mainNode.addChild(root);

        var back_label = ccui.uiHelper.seekWidgetByName(root, "back");
        back_label.addTouchEventListener(this.backEvent, this);

        var left_button = ccui.Button.create();
        left_button.loadTextures("res/Images/b1.png", "res/Images/b2.png", "");
        left_button.x = 240-50;
        left_button.y = 50;
        left_button.anchorX = 0.5;
        left_button.anchorY = 0.5;
        left_button.zOrder = 999;
        left_button.addTouchEventListener(this.previousCallback, this);
        this._mainNode.addChild(left_button);

        var right_button = ccui.Button.create();
        right_button.loadTextures("res/Images/f1.png", "res/Images/f2.png", "");
        right_button.x = 240+50;
        right_button.y = 50;
        right_button.zOrder = 999;
        right_button.anchorX = 0.5;
        right_button.anchorY = 0.5;
        right_button.addTouchEventListener(this.nextCallback, this);
        this._mainNode.addChild(right_button);
    },
    previousCallback: function (render, type) {
        if (type == ccui.TOUCH_EVENT_TYPE_ENDED) {
            LAYOUT_INDEX--;
            if (LAYOUT_INDEX < 0)LAYOUT_INDEX = LAYOUT_RES.length-1;
            if (LAYOUT_INDEX >= LAYOUT_RES.length)LAYOUT_INDEX = 0;
            this.runNextScene();
        }
    },
    nextCallback: function (render, type) {
        if (type == ccui.TOUCH_EVENT_TYPE_ENDED) {
            LAYOUT_INDEX++;
            if (LAYOUT_INDEX < 0)LAYOUT_INDEX = LAYOUT_RES.length-1;
            if (LAYOUT_INDEX >= LAYOUT_RES.length)LAYOUT_INDEX = 0;
            this.runNextScene();
        }
    },
    runNextScene: function () {
        var scene = cc.Scene.create();
        scene.addChild(new UILayoutEditorTest());
        cc.director.runScene(scene);
    }
});
