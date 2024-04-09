# AverlistUI

## Установка

Установка используя yarn:

```
yarn add averlist-ui
```

Установка используя npm:

```
npm i averlist-ui
```

## Пример

### Импорт

#### CommonJS

```ts
const { Button } = require('averlist-ui');
```

#### ES6

```ts
import { Button } from 'averlist-ui';
```

### Использование

```tsx
// main.ts or App.tsx

import 'averlist-ui/style.css'
```

```tsx
import { Button } from 'averlist-ui'

export const Component = () => {
	return (
		<Button>Click me!</Button>
    )
}
```
