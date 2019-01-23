# codebox
common dev enviroment as a service

## API

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

### website
[https://codebox.now.sh](https://codebox.now.sh)

based on next.js
