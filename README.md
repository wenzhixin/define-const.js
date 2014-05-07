#define-const.js

Define JavaScript const(unwritable) variable.

## BROWSER COMPATIBILITY

All browser.

## HOW TO USE:

```
<script src="define-const.js"></script>
<script>
var Const = defineConst({
    PI: 3.14,
    MAX: 10000,
    MIN: -10000
});

Const.PI = 3;
Const.MAX = 20000;
Const.MIN = -20000;

alert(Const.PI); // 3.14
alert(Const.MAX); // 10000
alert(Const.MIN); // -10000
</script>
```
