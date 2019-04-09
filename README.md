# codebox
common dev enviroment as a service

## API

### flow typechecker

```http
POST https://codebox.now.sh/flow
{
  "code": "source code",
  "config": {"name": "filename"} // (optional) flow configuration
}
```

### code formatter

```http
POST https://codebox.now.sh/prettier
{
  "code": "source code",
  "config": {} // (optional) prettier configuration
}
```

### minifier

```http
POST https://codebox.now.sh/terser
{
  "code": "source code",
  "config": {} // (optional) terser configuration
}
```

### transpiler

```http
POST https://codebox.now.sh/babel
{
  "code": "source code",
  "config": {} // (optional) babel configuration
}
```

### type-at-pos

```http
POST https://codebox.now.sh/type-at-pos
```

### website
[https://codebox.now.sh](https://codebox.now.sh)

based on next.js


