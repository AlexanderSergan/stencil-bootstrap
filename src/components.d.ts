/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';


import {
  CwcTypeahead as CwcTypeahead
} from './components/cwc-typeahead/cwc-typeahead';

declare global {
  interface HTMLCwcTypeaheadElement extends CwcTypeahead, HTMLElement {
  }
  var HTMLCwcTypeaheadElement: {
    prototype: HTMLCwcTypeaheadElement;
    new (): HTMLCwcTypeaheadElement;
  };
  interface HTMLElementTagNameMap {
    "cwc-typeahead": HTMLCwcTypeaheadElement;
  }
  interface ElementTagNameMap {
    "cwc-typeahead": HTMLCwcTypeaheadElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "cwc-typeahead": JSXElements.CwcTypeaheadAttributes;
    }
  }
  namespace JSXElements {
    export interface CwcTypeaheadAttributes extends HTMLAttributes {
      data?: any[];
      idValue?: string;
      minSearchLength?: number;
    }
  }
}

