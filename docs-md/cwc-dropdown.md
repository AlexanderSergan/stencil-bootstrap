
## API: 

### Props


| Prop | PropType |Required? | defaultValue | Description |
|-|-|-|-|-|
| `dropdownPlacement`  | `enum` | no | `'bottom-start`    | Placement of the dropdown.
| `triggerOverflow` | `boolean` | no   | `false` | Will dropdown menu overflow trigger element or not.


### Popper.placements : <code>enum</code>
List of accepted placements to use as values of the `placement` option.<br />
Valid placements are:
- `auto`
- `top`
- `right`
- `bottom`
- `left`

Each placement can have a variation from this list:
- `-start`
- `-end`

Variations are interpreted easily if you think of them as the left to right
written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
is right.<br />
Vertically (`left` and `right`), `start` is top and `end` is bottom.

Some valid examples are:
- `top-end` (on top of reference, right aligned)
- `right-start` (on right of reference, top aligned)
- `bottom` (on bottom, centered)
- `auto-right` (on the side with more space available, alignment depends by placement)


| `bindToList` | `boolean` | no | `false` | Value which sets if component renders in fixed height wrapper or with infinite height.
| `debounce` | `number` | no | `300` | Debounce time between fired `'onBottomReach'` event
| `bottomOffset` | `number` | no | `false` |  Offset in `px` from bottom of last list element.
| `addClass` | `string` | no | - | Class to add to every template.
| `addClassFirst` | `string` | no | - | Class to add to first template.
| `addClassLast` | `string` | no | - | Class to add to last template.
| `addClassEven` | `string` | no | - | Class to add to even template.
| `addClassOdd` | `string` | no | - | Class to add to odd template.
| `wrapperClass` | `string` | no | - | Class to `<div></div>` wrapper of list.
