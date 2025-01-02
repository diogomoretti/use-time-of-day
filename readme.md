# Use Time of Day

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
    morning: { start: 6, end: 11 },
    afternoon: { start: 12, end: 17 },
    evening: { start: 18, end: 20 },
    night: { start: 21, end: 23 },
  });
  
  return <div>It's {timeOfDay}!</div>;
}
```

## Options

The `number` is a hour in the 24-hour format. 

- **Start example**: `start: 6` means that the time starts at 6:00:00.
- **End example**: `end: 5` means that the time limit is 5:59:59.

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `earlyMorning` | `{ start: number, end: number }` | `{ start: 0, end: 5 }` | The range for early morning. |
| `morning` | `{ start: number, end: number }` | `{ start: 6, end: 11 }` | The range for morning. |
| `afternoon` | `{ start: number, end: number }` | `{ start: 12, end: 17 }` | The range for afternoon. |
| `evening` | `{ start: number, end: number }` | `{ start: 18, end: 19 }` | The range for evening. |
| `night` | `{ start: number, end: number }` | `{ start: 20, end: 23 }` | The range for night. |

## License

MIT © [Diogo Moretti](https://github.com/diogomoretti)
