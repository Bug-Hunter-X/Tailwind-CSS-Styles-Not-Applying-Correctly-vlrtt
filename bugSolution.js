```javascript
// Correctly configured Tailwind directives
// Assuming you've installed Tailwind and have necessary configurations
<div class="bg-red-500 p-4 text-white">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click Me
  </button>
</div>
// Add this to your main CSS file to include all the Tailwind classes you need
@tailwind base;
@tailwind components;
@tailwind utilities;
```