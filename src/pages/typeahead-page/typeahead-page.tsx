import { Component } from '@stencil/core';


@Component({
    tag: 'typeahead-page',
    styleUrl: 'typeahead-page.scss'
})
export class StencilComponent {

    render() {
        return [

            <p>Holla typeahead!</p>,
            <cwc-typeahead></cwc-typeahead>
        ]
    }
}