import { Component, State, Prop } from '@stencil/core';
import filter from 'lodash/filter'


@Component({
    tag: 'cwc-typeahead',
    styleUrl: 'cwc-typeahead.scss'
})
export class CwcTypeahead {

    @Prop() minSearchLength: number = 1;
    @Prop() data: any[] = ['Alex', 'Alabama', 'andreas', 'alexandro']

    @State() filterValue: string = '';
    @State() optionsShown: boolean = false;

    filtered: any[] = []

    filter() {
        return filter(this.data, (city) =>
            city.toLowerCase().indexOf(
                this.filterValue.toLowerCase()) >= 0
        )
    }

    handleChange(e) {
        this.filterValue = e.target.value
    }

    handleSelect(e) {
        let input: HTMLInputElement = document.querySelector('input#input')

        input.value = e.target.value
        this.filterValue = ''
    }


    render() {
        this.filtered = this.filter()
        if (this.filterValue.length >= this.minSearchLength && this.filtered.length > 0) {
            return (
                <div>
                    <input id="input" onInput={(e) => this.handleChange(e)}
                        type="text" class="form-control" />
                    <div class="card">
                        {
                            this.filtered && this.filtered.map(val =>
                                <option class="dropdown-item" onClick={(e) => this.handleSelect(e)}> {val} </option>)
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <input id="input" onInput={(e) => this.handleChange(e)}
                        type="text" class="form-control" placeholder="Search something" />
                </div>
            )
        }
    }
}