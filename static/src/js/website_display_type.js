odoo.define('website_grid_view.grid_view', function (require) {
    'use strict';

    var publicWidget = require('web.public.widget');

    publicWidget.registry.clearCartButton = publicWidget.Widget.extend({
        selector: '.product-attribute-grid',
        events: {
            'click .attribute-box-button': '_onClickGrid',
        },

        _onClickGrid: function (ev) {
            ev.preventDefault();
            var $attributeButton = $(ev.currentTarget);
            var attributeValueId = $attributeButton.data('value_id');
            var value_name = $attributeButton.data('value_name');
            var attribute_name = $attributeButton.data('attribute_name');


            // Handle the selected attribute and value here
            console.log('Selected Attribute Value ID:', attributeValueId);
            console.log('value_name:', value_name);
            console.log('attribute_name:', attribute_name);

            // Highlight the selected attribute box
            this._highlightSelectedAttribute($attributeButton);
        },

        _highlightSelectedAttribute: function ($attributeButton) {
            // Remove the highlight from all attribute boxes
            $('.attribute-box-button').removeClass('selected-attribute');

            // Add the highlight class to the selected attribute box
            $attributeButton.addClass('selected-attribute');
        }
    });
});


//odoo.define('website_grid_view.grid_view', function (require) {
//    'use strict';
//
//    var publicWidget = require('web.public.widget');
//
//    publicWidget.registry.clearCartButton = publicWidget.Widget.extend({
//        selector: '.product-attribute-grid',
//        events: {
//            'click .attribute-box-button': '_onClickGrid',
//        },
//
//        _onClickGrid: function (ev) {
//            ev.preventDefault();
//            var $attributeButton = $(ev.currentTarget);
//            var attributeValueId = $attributeButton.data('value_id');
//            var value_name = $attributeButton.data('value_name');
//            var attribute_name = $attributeButton.data('attribute_name');
//
//
//            // Handle the selected attribute and value here
//
//            console.log('Selected Attribute Value ID:', attributeValueId);
//            console.log('value_name:', value_name);
//            console.log('attribute_name:', attribute_name);
//
//
//
//        }
//    });
//});


//odoo.define('website_grid_view.grid_view', function (require) {
//   'use strict';
//
//    var publicWidget = require('web.public.widget');
//    var rpc = require('web.rpc');
//    var core = require('web.core');
//
//    publicWidget.registry.clearCartButton = publicWidget.Widget.extend({
//        selector: '.product-attribute-grid',
//        events: {
//            'click .attribute-box': '_onClickGrid',
//        },
//
//        _onClickGrid:function(){
//        console.log('jjjjjjjjj')
//        }
//        })
//        })