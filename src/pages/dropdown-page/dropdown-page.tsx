import { Component } from '@stencil/core';


@Component({
    tag: 'dropdown-page',
    styleUrl: 'dropdown-page.scss'
})
export class StencilComponent {

    render() {
        return [
            <br />,
            <br />,
            <br />,
            <br />,
            <br />,
            <br />,
            <cwc-dropdown >

                <div slot="dropdown-trigger">
                    <button
                        class="btn btn-primary "
                        aria-haspopup="true" aria-expanded="false">
                        I'm button!
                    </button>
                </div>

                <div slot="dropdown-content" >
                    <ul class="hm-2 " >
                        <li>Item one</li>
                        <li>Second</li>
                        <li>Third</li>
                        <li>Fourth</li>

                    </ul>
                </div>

            </cwc-dropdown >,

            <br />, <br />, <br />,
            <div class="btn-group dropup">
                <button type="button" class="btn btn-danger " aria-haspopup="true" aria-expanded="false">
                    Action
  </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </div>


        ];
    }
}