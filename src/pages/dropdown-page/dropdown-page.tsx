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
            </div>,
            <div class="container pt-4" >
                <h2 class="mb-4">Dropdown component </h2>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="jumbotron pt-3" >
                            <h3>Usage </h3>
                            <p>To set position of the dropdown component you can pass position and align variables: </p>
                            {/* <p style="font-size:22px;">To set position of the dropdown component you can pass position and align variables: </p> */}
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="dropdown show mt-4 ml-5 mb-5">
                                        <button class="btn btn-primary dropdown-toggle ml-5 mt-2" data-toggle="dropdown" aria-expanded="true" type="button" >Example dropdown </button>
                                        <div class="dropdown-menu show" role="menu"><a class="dropdown-item" role="presentation" href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dropdown"><button class="btn btn-info dropdown-toggle ml-1 mt-2" data-toggle="dropdown" aria-expanded="false" type="button" >Select position</button>
                                        <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">Bottom </a><a class="dropdown-item" role="presentation" href="#">Left </a><a class="dropdown-item" role="presentation" href="#">Right </a><a class="dropdown-item" role="presentation"
                                            href="#">Top </a><a class="dropdown-item" role="presentation" href="#"> </a></div>
                                    </div>
                                    <div class="dropdown"><button class="btn btn-info dropdown-toggle ml-1 mt-2" data-toggle="dropdown" aria-expanded="false" type="button" >Select alignment</button>
                                        <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">None (centered)</a><a class="dropdown-item" role="presentation" href="#">Start </a><a class="dropdown-item" role="presentation" href="#">End </a><a class="dropdown-item"
                                            role="presentation" href="#"> </a></div>
                                    </div>
                                    <div class="dropdown"><button class="btn btn-info dropdown-toggle ml-1 mt-2" data-toggle="dropdown" aria-expanded="false" type="button" >Button overflow</button>
                                        <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">None (centered)</a><a class="dropdown-item" role="presentation" href="#">Start </a><a class="dropdown-item" role="presentation" href="#">End </a><a class="dropdown-item"
                                            role="presentation" href="#"> </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        ];
    }
}