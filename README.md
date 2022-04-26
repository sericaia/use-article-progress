# `useArticleProgress` hook

Simple hook to get the progress (0-100%) when reading an article. Changes as the user scrolls the page.

## Usage

```tsx
export function ArticleProgress() {
  const { percentage } = useArticleProgress();

  return <div>{percentage}%</div>;
}
```

## Project Example

Check an example of usage inside `/example` folder.

```bash
cd example
yarn
yarn start
# open localhost:1234
```
