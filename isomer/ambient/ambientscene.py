#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# Isomer - The distributed application framework
# ==============================================
# Copyright (C) 2011-2019 Heiko 'riot' Weinen <riot@c-base.org> and others.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

__author__ = "Heiko 'riot' Weinen"
__license__ = "AGPLv3"

"""
Schema: AmbientScene
====================

Contains
--------

ambientscene: Metadata about scenes for ambient sound. 

"""

from isomer.schemata.defaultform import *
from isomer.schemata.base import base_object, uuid_object

AmbientSceneSchema = base_object('ambientscene')

AmbientSceneSchema['properties'].update({
    'description': {
        'type': 'string', 'format': 'html',
        'title': 'Scene description',
        'description': 'AmbientScene description'
    },
    'loops': {
        'type': 'array',
        'items': {
            'type': 'object',
            'properties': {
                'uuid': uuid_object('Loop', 'Select a loop'),
                'volume': {'type': 'number'},
                'on': {'type': 'boolean'}
            }
        }
    },
    'default_volume': {'type': 'number'},
})

AmbientSceneForm = [
    {
        'type': 'section',
        'htmlClass': 'row',
        'items': [
            {
                'type': 'section',
                'htmlClass': 'col-xs-4',
                'items': [
                    'name', lookup_field('file', 'file')
                ]
            },
            {
                'type': 'section',
                'htmlClass': 'col-xs-4',
                'items': [
                    'default_volume'
                ]
            }
        ]
    },
    'description',
    editbuttons
]

AmbientScene = {'schema': AmbientSceneSchema, 'form': AmbientSceneForm}
