import { Foo } from "package-one";

const foo = new Foo({
    fooField: "test",
    // won't compile
    // bazField: 42
});

console.log(foo);
