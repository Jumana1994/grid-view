{
    'name': 'Website Product grid view',
    "version": "16.0.1.0.0",
    'description': 'Website Product grid view through sql view',
    'summary': 'sale order details through sql form view',
    "author": 'Cybrosys',
    'license': 'LGPL-3',
    'category': 'Website',
    "depends": [
        "base",
        'product',
        'website_sale'
    ],
    "data": [
        'views/product_attribute_view.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'website_grid_view/static/src/css/website_display_type.css',]
            # 'website_grid_view/static/src/js/website_display_type.js'],

    },
    "auto-install": True,
    # "application": True,
    "installable": True,

}
