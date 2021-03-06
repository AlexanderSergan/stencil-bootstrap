import { Component, State, Prop, Listen, Method } from '@stencil/core';
import filter from 'lodash/filter'
import get from 'lodash/get';



@Component({
    tag: 'cwc-typeahead',
    styleUrl: 'cwc-typeahead.scss'
})
export class CwcTypeahead {

    @Prop() minSearchLength: number = 1;
    @Prop() data: any[] = []
    @Prop() idValue: string = 'typeahead-' + Date.now();
    @Prop() searchKey: string;


    @State() filterValue: string = '';
    @State() optionsShown: boolean = false;
    @State() focusIndex: number = 0

    private filtered: any[] = []


    /**
     * Life cycle hooks
     */
    componentWillUpdate() {

        if (this.filterValue.length >= this.minSearchLength) {
            this.filtered = this.filter()

            if (this.filtered.length > 0)
                this.optionsShown = true
        }
    }


    /**
     * Private functions
     */
    private filter() {
        if (typeof this.data[0] == 'string')
            return this.filterStringArray(this.data)

        if (typeof this.data[0] == 'object') {
            return this.findInComplex(this.data, this.searchKey)
        }

    }

    private filterStringArray(data) {
        return filter(data, value =>
            value.toLowerCase().indexOf(
                this.filterValue.toLowerCase()) >= 0
        )
    }

    private findInComplex(data, address) {
        let temporary = []
        temporary = data.map(value =>
            get(value, address)
        )
        return this.filterStringArray(temporary)

    }


    /**
     * Handlers
     */
    handleInputChange(e) {
        this.filterValue = e.target.value
    }

    handleSelect(value) {
        let input: HTMLInputElement = document.querySelector(`#${this.idValue} input`)
        input.value = value
        this.close()
    }

    handleHover(i: number) {
        this.focusIndex = i
    }

    /**
     * Public methods
     */
    @Method()
    close() {
        this.focusIndex = 0
        this.filterValue = ''
        this.filtered = []
    }

    render() {

        return (
            <div id={this.idValue}>
                <input onInput={(e) => this.handleInputChange(e)}
                    type="text" class="form-control" placeholder="Search something e.g. 'Alabama'" />

                {(() => {
                    if (this.filtered.length > 0) {
                        return (
                            <div class="card">
                                {
                                    this.filtered.map((val, i) =>
                                        <option class={"dropdown-item".concat((this.focusIndex == i + 1) ? ' active' : '')}
                                            onClick={(e: any) => this.handleSelect(e.target.value)}
                                            onMouseEnter={() => this.handleHover(i + 1)}
                                        >{val}</option>)
                                }
                            </div>

                        )

                    }
                })()}

            </div>
        )
    }


    /** 
     * Keyboard handlers
     * 
     **/

    @Listen('keydown.down')
    handleDownArrow(ev) {

        if (this.focusIndex < this.filtered.length) {
            this.focusIndex = this.focusIndex + 1
        }
    }

    @Listen('keydown.up')
    handleUpArrow(ev) {
        if (this.focusIndex > 0) {
            this.focusIndex = this.focusIndex - 1
            ev.preventDefault()

        }
    }

    @Listen('keydown.escape')
    handleEscape(ev) {
        if (this.focusIndex > 0) {
            this.focusIndex = 0
        }
        this.close()
    }

    @Listen('keydown.enter')
    handleEnter(ev) {
        if (this.focusIndex > 0) {
            this.handleSelect(document.querySelectorAll(`#${this.idValue} option`)[this.focusIndex - 1].textContent)
        }
    }



}