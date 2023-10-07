# -*- coding: utf-8 -*-
from odoo import fields, models


class WebsiteProduct(models.Model):
    _inherit = 'product.attribute'
    display_type = fields.Selection(
        selection=[
            ('radio', 'Radio'),
            ('pills', 'Pills'),
            ('select', 'Select'),
            ('color', 'Color'),
            ('grid', 'Grid')
        ],
        default='radio',
        required=True,
        help="The display type used in the Product Configurator."
    )
