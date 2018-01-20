import { Component } from '@stencil/core';
import get from 'lodash/get'
import filter from 'lodash/filter'

@Component({
    tag: 'typeahead-page',
    styleUrl: 'typeahead-page.scss'
})
export class StencilComponent {

    complex = [
        {
            name: 'object1',
            data: {
                data1: 'alabama',
                data2: 'data12value'
            }
        },
        {
            name: 'object2',
            data: {
                data1: 'alaska',
                data2: 'data22value'
            }
        },
        {
            name: 'object2',
            data: {
                data1: 'alexandro',
                data2: 'data22value'
            }
        }
    ]


    searchString = 'data.data1'

    complexResult = []



    data = ['Alex', 'Alabama', 'Alaska', 'andreas', 'alexandro']


    render() {
        return [


            <h3>Simple String[] data demo!</h3>,
            <cwc-typeahead
                data={this.data}></cwc-typeahead>,

            <br />,
            <br />,
            <br />,
            <br />,
            <h3>Complex Object[] demo!</h3>,
            <cwc-typeahead
                data={this.complex}
                searchKey={this.searchString}></ cwc-typeahead>
        ]
    }
}