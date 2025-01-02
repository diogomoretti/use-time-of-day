# use-time-of-day

> A React Hook to get the current time of day.

## Installation

Using npm:  

```bash
npm install use-time-of-day
```

Using yarn:

```bash
yarn add use-time-of-day
```

Using pnpm:

```bash
pnpm add use-time-of-day
```

## Usage

Using the default ranges:

```tsx
import useTimeOfDay from 'use-time-of-day';

function YourComponent() {
  const timeOfDay = useTimeOfDay();
  
  return <div>It's {timeOfDay}!</div>;
}
```

Using custom ranges:

```tsx
import useTimeOfDay from 'use-time-of-day';

function YourComponent() {
  const timeOfDay = useTimeOfDay({
    earlyMorning: { start: 0, end: 5 },
    morning: { start: 5, end: 12 },
    afternoon: { start: 12, end: 17 },
    evening: { start: 17, end: 20 },
    night: { start: 20, end: 24 },
  });
  
  return <div>It's {timeOfDay}!</div>;
}
```

## Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `earlyMorning` | `{ start: number, end: number }` | `{ start: 0, end: 6 }` | The range for early morning. |
| `morning` | `{ start: number, end: number }` | `{ start: 6, end: 12 }` | The range for morning. |
| `afternoon` | `{ start: number, end: number }` | `{ start: 12, end: 17 }` | The range for afternoon. |
| `evening` | `{ start: number, end: number }` | `{ start: 17, end: 20 }` | The range for evening. |
| `night` | `{ start: number, end: number }` | `{ start: 20, end: 24 }` | The range for night. |

## License

MIT © [Diogo Moretti](https://github.com/diogomoretti)
