## Gulp starter 
`scss` - use mixins 
    `container` - `@include make-container()`
    `row` - `@include make-row()`
    `col` - `@include make-col-ready()`
          - `@include make-col(number)`
          - `@include media-breakpoint-up(sm,md,lg,xl,xxl){}`
          example__col{
            @include make-col-ready();
            @include media-breakpoint-up(sm){
                @include make-col(6)
            }
          }
    `max-container` - `@include max-container();`
    `mobile first`  - `@include media(sm,md,lg,xl,xxl)`
`scss` - All settings in file
    `var.scss`
    