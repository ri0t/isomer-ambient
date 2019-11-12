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
Schema: AmbientLoop
============

Contains
--------

ambientLoop: Metadata about ambient sound loops for ambient scenes. 

"""

from isomer.schemata.defaultform import *
from isomer.schemata.base import base_object, uuid_object

AmbientLoopSchema = base_object('ambientloop')

AmbientLoopSchema['properties'].update({
    'description': {
        'type': 'string', 'format': 'html',
        'title': 'Loop description',
        'description': 'Loop description'
    },
    'file': uuid_object('file', description='Select a loop file'),
    'default_volume': {'type': 'number'},
})


audio_file_filter = {"name": {"$regex": ".*\\.(mp3|wav|ogg|au|jpg)$"}}

AmbientLoopForm = [
    {
        'type': 'section',
        'htmlClass': 'row',
        'items': [
            {
                'type': 'section',
                'htmlClass': 'col-xs-4',
                'items': [
                    'name', lookup_field('file', 'file', search_filter=audio_file_filter)
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

AmbientLoop = {'schema': AmbientLoopSchema, 'form': AmbientLoopForm}
